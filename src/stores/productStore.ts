import { defineStore } from "pinia"
import api from "@/services/api"
import type { Product } from "@/types"

type ProductPayload = {
  categoriaId: string
  nombre: string
  descripcion?: string
  precio: number | string
  combo?: string
  unidadCombo?: string
  image?: File | null
}

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    product: null as Product | null,
    loading: false,
  }),

  actions: {
    // =========================
    // GET ALL
    // =========================
    async fetchProducts() {
      this.loading = true

      try {
        const { data } = await api.get("/api/products")
        this.products = data
      } catch (error) {
        console.error("fetchProducts error:", error)
      } finally {
        this.loading = false
      }
    },

    // =========================
    // GET BY ID
    // =========================
    async fetchProductById(id: number) {
      this.loading = true

      try {
        const { data } = await api.get(`/api/products/${id}`)
        this.product = data
      } catch (error) {
        console.error("fetchProductById error:", error)
      } finally {
        this.loading = false
      }
    },

    // =========================
    // CREATE
    // =========================
    async createProduct(payload: ProductPayload) {
      this.loading = true

      try {
        const formData = this.buildFormData(payload)

        const { data } = await api.post("/api/products", formData)

        this.products.unshift(data)
        return data
      } catch (error) {
        console.error("createProduct error:", error)
      } finally {
        this.loading = false
      }
    },

    // =========================
    // UPDATE
    // =========================
    async updateProduct(id: number, payload: ProductPayload) {
      this.loading = true

      try {
        const formData = this.buildFormData(payload)

        // Laravel requirement
        formData.append("_method", "PUT")

        const { data } = await api.post(`/api/products/${id}`, formData)

        const index = this.products.findIndex(p => p.id === id)

        if (index !== -1) {
          this.products[index] = data
        }

        this.product = data

        return data
      } catch (error) {
        console.error("updateProduct error:", error)
      } finally {
        this.loading = false
      }
    },

    // =========================
    // DELETE
    // =========================
    async deleteProduct(id: number) {
      this.loading = true

      try {
        await api.delete(`/api/products/${id}`)

        this.products = this.products.filter(p => p.id !== id)
      } catch (error) {
        console.error("deleteProduct error:", error)
      } finally {
        this.loading = false
      }
    },

    // =========================
    // HELPERS
    // =========================
    buildFormData(payload: ProductPayload) {
      const formData = new FormData()

      formData.append("categoriaId", payload.categoriaId)
      formData.append("nombre", payload.nombre)
      formData.append("descripcion", payload.descripcion ?? "")
      formData.append("precio", String(payload.precio))

      if (payload.combo) {
        formData.append("combo", payload.combo)
      }

      if (payload.unidadCombo) {
        formData.append("unidadCombo", payload.unidadCombo)
      }

      if (payload.image instanceof File) {
        formData.append("image", payload.image)
      }

      return formData
    },
  },
})