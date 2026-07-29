import axios from "axios";

// 🔐 AUTH (Sanctum)
export const authApi = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json"
  }
});

// 🌐 API pública
export const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});

export const getCsrfCookie = () => authApi.get("/sanctum/csrf-cookie");