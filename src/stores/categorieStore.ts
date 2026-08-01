import { authApi } from "@/services/api";
import type { Category } from "@/types";
import { defineStore } from "pinia";

type CategoriePayload = {
  nombre: string;
  image?: File | null;
};

export const useCategorieStore = defineStore("categories", {
  state: () => ({
    categories: [] as Category[],
    categorie: null as Category | null,
    loading: false as boolean,
    totalCategories: 0 as number,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true;

      try {
        const { data } = await authApi.get("/api/categories");

        // console.log("Respuesta API:", data);
        // console.log("¿Es arreglo?", Array.isArray(data));

        this.categories = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchById(id: number) {
      this.loading = true;

      try {
        const { data } = await authApi.get(`/api/categories/${id}`);
        this.categorie = data;
      } catch (error) {
        console.error("fetchCategoryById error:", error);
      } finally {
        this.loading = false;
      }
    },

    async createProduct(payload: CategoriePayload) {
      this.loading = true;

      try {
        const formData = this.buildFormData(payload);

        const { data } = await authApi.post("/api/categories", formData);

        this.categories.unshift(data);

        
        return data;
      } catch (error) {
        console.error("createCategori error:", error);
      } finally {
        this.loading = false;
      }
    },

    async deleteCategorie(id: number) {
      this.loading = true;

      try {
        await authApi.delete(`/api/categories/${id}`);

        this.categories = this.categories.filter((p) => p.id !== id);
      } catch (error) {
        console.error("deleteCategory error:", error);
      } finally {
        this.loading = false;
      }
    },

    async countProducts() {
      this.loading = true;

      try {
        const { data } = await authApi.get(`/api/categories/count`);
        this.totalCategories = data.total;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async updateCategorie(id: number, payload: CategoriePayload) {
      this.loading = true;

      try {
        const formData = this.buildFormData(payload);

        // Laravel requirement
        formData.append("_method", "PUT");

        const { data } = await authApi.post(`/api/categories/${id}`, formData);

        return data;
      } catch (error) {
        console.error("updateProduct error:", error);
      } finally {
        this.loading = false;
      }
    },

    buildFormData(payload: CategoriePayload) {
      const formData = new FormData();

      formData.append("nombre", payload.nombre);

      if (payload.image instanceof File) {
        formData.append("image", payload.image);
      }

      return formData;
    },
  },
});
