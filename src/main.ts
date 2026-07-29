import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './styles/main.css'
import "leaflet/dist/leaflet.css"
import App from './App.vue'
import router from './router/index.ts'
import axios from 'axios'
import "@tabler/icons-webfont/dist/tabler-icons.css"
import { useThemeStore } from './stores/themStore.ts'



// Crear Pinia
const pinia = createPinia()


// Obtener cookie CSRF de Laravel antes de montar
await axios.get('/sanctum/csrf-cookie', { 
  withCredentials: true 
})


const app = createApp(App);


// Registrar Pinia y Router
app.use(pinia);
app.use(router);


// Inicializar tema
const themeStore = useThemeStore();

themeStore.initTheme();


app.mount("#app");