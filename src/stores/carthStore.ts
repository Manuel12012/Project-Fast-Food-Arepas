import { defineStore } from "pinia";
import { api, getCsrfCookie } from "@/services/api";
import type { Product } from "@/types";
import { calculateDiscountedPrice } from "@/helpers/Pricing";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart") ?? "[]") as any[],
    loading: false,
  }),

  getters: {
    total: (state) => {
      return state.cart.reduce((sum, item) => {
        return sum + Number(item.precioFinal) * Number(item.cantidad);
      }, 0);
    },

    totalItems: (state) => {
      return state.cart.reduce((sum, item) => {
        return sum + Number(item.cantidad);
      }, 0);
    },
  },

  actions: {
    _saveToStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    addToCart(product: Product, cantidad: number = 1) {
      const exists = this.cart.find((p) => p.id === product.id);

      // Precio original
      const precioOriginal = Number(product.precio ?? 0);

      // Descuento del producto
      const descuento = Number(product.offer?.descuento ?? 0);

      // Precio final de UNA unidad
      const precioFinal = calculateDiscountedPrice(precioOriginal, descuento);
      if (exists) {
        exists.cantidad += cantidad;
      } else {
        this.cart.push({
          ...product,

          // Guardamos los precios como números
          precio: precioOriginal,
          descuento,
          precioFinal,

          cantidad,
        });
      }

      this._saveToStorage();
    },

    incrementQuantity(id: number) {
      const item = this.cart.find((p) => p.id === id);

      if (item) {
        item.cantidad++;
      }

      this._saveToStorage();
    },

    decrementQuantity(id: number) {
      const item = this.cart.find((p) => p.id === id);

      if (!item) return;

      item.cantidad--;

      if (item.cantidad <= 0) {
        this.cart = this.cart.filter((p) => p.id !== id);
      }

      this._saveToStorage();
    },

    removeItem(id: number) {
      this.cart = this.cart.filter((p) => p.id !== id);

      this._saveToStorage();
    },

    clearCart() {
      this.cart = [];

      localStorage.removeItem("cart");
    },

    async checkout(
      email: string,
      phone: string,
      name: string,
      delivery: string,
      latitude: number | null,
      longitude: number | null,
      scheduledFor: string | null,
    ) {
      try {
        const payload = {
          email,
          phone,
          name,
          delivery,
          latitude,
          longitude,
          scheduled_for: scheduledFor,

          items: this.cart.map((p) => ({
            product_id: p.id,
            name: p.nombre,

            // IMPORTANTE:
            // Enviamos el precio YA DESCONTADO
            price: Number(p.precioFinal),

            quantity: Number(p.cantidad),
          })),
        };

        await getCsrfCookie();

        const { data } = await api.post("/api/orders", payload);

        this.clearCart();

        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
});
