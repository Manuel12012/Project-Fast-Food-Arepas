import { defineStore } from "pinia"
import api from "@/services/api"

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: JSON.parse(localStorage.getItem("cart") ?? "[]") as any[]
    }),

    getters: {
        total: (state) =>
            state.cart.reduce((sum, p) => sum + p.precio * p.cantidad, 0)
    },

    actions: {
        _saveToStorage() {
            localStorage.setItem("cart", JSON.stringify(this.cart))
        },

        addToCart(product: any, cantidad: number = 1) {
            const exists = this.cart.find(p => p.id === product.id)
            if (exists) {
                exists.cantidad += cantidad  // ← suma la cantidad seleccionada
            } else {
                this.cart.push({ ...product, cantidad })  // ← usa la cantidad recibida
            }
            this._saveToStorage()
        },

        incrementQuantity(id: number) {
            const item = this.cart.find(p => p.id === id)
            if (item) item.cantidad++
            this._saveToStorage()
        },

        decrementQuantity(id: number) {
            const item = this.cart.find(p => p.id === id)
            if (!item) return
            item.cantidad--
            if (item.cantidad <= 0) {
                this.cart = this.cart.filter(p => p.id !== id)
            }
            this._saveToStorage()
        },

        removeItem(id: number) {
            this.cart = this.cart.filter(p => p.id !== id)
            this._saveToStorage()
        },

        clearCart() {
            this.cart = []
            localStorage.removeItem("cart")
        },

        async checkout(email: string, phone: string, name: string, delivery: string, address: string,
            latitude: number, longitude: number
        ) {
            try {
                const payload = {
                    email,
                    phone,
                    name,
                    delivery,
                    address,
                    latitude,
                    longitude,
                    items: this.cart.map(p => ({
                        product_id: p.id,
                        name: p.nombre,
                        price: p.precio,
                        quantity: p.cantidad
                    }))
                }
                console.log("PAYLOAD", payload)
                const { data } = await api.post("/api/orders", payload)
                this.clearCart()
                return data
            } catch (error) {
                console.log("FULL ERROR:", error)
        }
    }
}})