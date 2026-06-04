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
      },
      async updateProduct(id: number, data: any) {
        this.loading = true

        try {
          const formData = new FormData()

          formData.append('categoriaId', data.categoriaId)
          formData.append('nombre', data.nombre)
          formData.append('descripcion', data.descripcion ?? '')
          formData.append('precio', data.precio)

          if (data.combo) formData.append('combo', data.combo)
          if (data.unidadCombo) formData.append('unidadCombo', data.unidadCombo)

          if (data.image instanceof File) {
            formData.append('image', data.image)
          }

          // 🔥 IMPORTANTE: Laravel + archivos = POST + _method PUT
          formData.append('_method', 'PUT')

          const response = await api.post(`/api/products/${id}`, formData)

          // actualizar estado local (opcional pero recomendado)
          const index = this.products.findIndex(p => p.id === id)
          if (index !== -1) {
            this.products[index] = response.data
          }

          this.product = response.data
        } catch (error: any) {
          console.error('Error updateProduct:', error.response?.data || error)
        } finally {
          this.loading = false
        }
      }
    }

  })
