import { api } from "@/services/api";
import { defineStore } from "pinia";
import { useProductStore } from "./productStore";

export type OfferPayload = {
  inicio: string;
  fin: string;
  descuento: number;
};

export const useOfferStore = defineStore("offers", {
  state: () => ({
    offers: [],
    loading: false,
    offer: "",
  }),
  actions: {
    async createOffer(payload: OfferPayload) {
      this.loading = true;
      try {
        const { data } = await api.post("/api/offers", payload);

        return data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async createOfferForProduct(productId: number, payload: OfferPayload) {
      this.loading = true;

      try {
        // 1. Crear la oferta
        const offer = await this.createOffer(payload);

        // 2. Asociarla al producto
        await api.put(`/api/products/${productId}/offer`, {
          offer_id: offer.id,
        });

        // 3. Actualizar productos
        const productStore = useProductStore();
        await productStore.fetchProducts();

        return offer;
      } catch (error: any) {
        console.error("createOfferForProduct error:", error);
        console.error("Backend:", error.response?.data);

        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
