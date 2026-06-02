import { defineStore } from "pinia";
import api from "@/services/api";

export const useProductStore = defineStore("products", {

    state: () => ({
        products: [],
        loading: false
    }),

    actions: {

        async fetchProducts() {

            this.loading = true;

            try {

                const response = await api.get("/products");

                this.products = response.data;

            } catch(error) {

                console.error(error);

            } finally {

                this.loading = false;

            }

        }

    }

});