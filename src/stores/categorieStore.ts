import { authApi } from "@/services/api";
import { defineStore } from "pinia";

export const useCategorieStore = defineStore("categories", {
  state: () => ({
    categories: [],
    categorie: null,
    loading: false,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true;

      try {
        const { data } = await authApi.get("/api/categories");

        console.log("Respuesta API:", data);
        console.log("¿Es arreglo?", Array.isArray(data));

        this.categories = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
