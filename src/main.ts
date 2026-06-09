import { createApp } from 'vue'
import { createPinia, defineStore } from 'pinia'
import './styles/main.css'
import "leaflet/dist/leaflet.css"

import App from './App.vue'
import router from './router/index.ts'

export const useCartStore = defineStore("cart", {
    state: () => ({
      cart: [] as any[]
    }),
  
    // ...getters y actions igual que antes...
  
    persist: true, // ✅ Agrega esto
  })

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
