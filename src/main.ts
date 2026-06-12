import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/main.css'
import "leaflet/dist/leaflet.css"
import App from './App.vue'
import router from './router/index.ts'
import axios from 'axios'

// Obtener cookie CSRF de Laravel antes de montar
await axios.get('/sanctum/csrf-cookie', { withCredentials: true })

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')