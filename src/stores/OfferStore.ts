import { api } from "@/services/api";
import { defineStore } from "pinia";
import { useProductStore } from "./productStore";

export type OfferProduct = {
  id: number;
  category_id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  combo: string | null;
  unidadCombo: string | null;
  image: string;
  created_at: string;
  updated_at: string;
  offer_id: number;
};

export type Offer = {
  id: number;
  inicio: string;
  fin: string;
  descuento: string;
  product: OfferProduct;
};

export type OfferPayload = {
  inicio: string;
  fin: string;
  descuento: number;
};

export const useOfferStore = defineStore("offers", {
  state: () => ({
    offers: [] as Offer[],
    loading: false,
  }),

  getters: {
    activeOffers: (state) => {
      const today = new Date();

      return state.offers.filter((offer) => {
        const inicio = new Date(offer.inicio);
        const fin = new Date(offer.fin);

        return today >= inicio && today <= fin;
      });
    },
  },

  actions: {
    async createOffer(payload: OfferPayload) {
      this.loading = true;

      try {
        const { data } = await api.post("/api/offers", payload);

        return data;
      } catch (error) {
        console.error("Error creando oferta:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchOffers() {
      this.loading = true;

      try {
        const { data } = await api.get("/api/offers");

        this.offers = data;

        return data;
      } catch (error) {
        console.error("Error obteniendo ofertas:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createOfferForProduct(
      productId: number,
      payload: OfferPayload,
    ) {
      this.loading = true;

      try {
        const offer = await this.createOffer(payload);

        await api.put(`/api/products/${productId}/offer`, {
          offer_id: offer.id,
        });

        const productStore = useProductStore();
        await productStore.fetchProducts();

        await this.fetchOffers();

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
