import axios from "axios";

const api = axios.create({
  baseURL: "/", // ✅ mismo origen, sin dominio externo
  withCredentials: true,
  withXSRFToken: true,
});

export default api;
