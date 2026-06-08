import { defineStore } from "pinia"
import api from "@/services/api"

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [],
    loading: false
  }),

  actions: {
    async fetchOrders() {
      this.loading = true

      try {
        const { data } = await api.get("/api/orders")
        this.orders = data
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
})