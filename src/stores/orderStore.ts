import { defineStore } from "pinia";
import { api } from "@/services/api";
import type { Order } from "@/types";

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [] as Order[],
    loading: false,
    lastPage: 0,
    currentPage: 1,
  }),

  actions: {
    async fetchOrders(page: number) {
      this.loading = true;

      try {
        const { data } = await api.get("/api/orders", {
          params: {
            page,
          },
        });
        this.orders = data.data;
        this.lastPage = data.last_page;
        this.currentPage = data.current_page;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async updateOrderStatus(orderId: number, status: string, page: number) {
      await api.put(`/api/orders/${orderId}`, {
        status,
      });

      await this.fetchOrders(page);
    },
  },
});
