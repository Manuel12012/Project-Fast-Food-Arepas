import { defineStore } from "pinia"
import {api} from "@/services/api"
import type { Order } from "@/types"

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [] as Order[],
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
    },
    async updateOrderStatus(
      orderId: number,
      status: string
    ) {
      await api.put(`/api/orders/${orderId}`, {
        status
      })

      await this.fetchOrders()
    }

  }
})
