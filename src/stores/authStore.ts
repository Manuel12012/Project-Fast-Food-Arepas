import { defineStore } from "pinia";
import api from "@/services/api"
export const useAuthStore = defineStore("auth", {

  state: () => ({
    user: null as any,
    authenticated: false,
    loading: false
  }),

  actions: {

    async login(email: string, password: string) {

      this.loading = true;

      try {

        await api.get("/sanctum/csrf-cookie")

        const response = await api.post("/api/login", {
          email,
          password
        });

        this.user = response.data.user;
        this.authenticated = true;

        return true;

      } catch (error: any) {

        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);
        console.log("ERRORS:", error.response?.data?.errors);

        this.user = null;
        this.authenticated = false;

        return false;
      } finally {

        this.loading = false;

      }
    },

    async logout() {

      await api.post("/api/logout");

      this.user = null;
      this.authenticated = false;
    },

    async fetchUser() {
      try {
        const response = await api.get('/api/me') // ✅ cambia /api/user por /api/me
        console.log('fetchUser OK:', response.data)
        this.user = response.data
        this.authenticated = true
      } catch (error: any) {
        console.log('fetchUser FAIL:', error.response?.status)
        this.user = null
        this.authenticated = false
      }
    }

  }
});
