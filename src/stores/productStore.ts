import { defineStore } from "pinia"
import api from "@/services/api"
import type { Product } from "@/types"

export const useProductStore =
  defineStore("products", {

    state: () => ({

      products: [] as Product[],

      product: null as Product | null,

      loading: false

    }),

    actions: {

      async fetchProducts() {

        this.loading = true

        try {

          const response = await api.get('/api/products')

          this.products =
            response.data

        } catch (error) {

          console.error(error)

        } finally {

          this.loading = false

        }
      },

      async fetchProductById(id: number) {

        this.loading = true

        try {

          const response = await api.get(`/api/products/${id}`)

          this.product =
            response.data

        } catch (error) {

          console.error(error)

        } finally {

          this.loading = false

        }
      },
      async deleteProduct(id: number) {
        this.loading = true;

        try {
          await api.delete(`/api/products/${id}`)

          this.products = this.products.filter(
            product => product.id !== id
          );

        } catch (error) {
          console.error(error);

        } finally {
          this.loading = false;
        }
      }

    }

  })
