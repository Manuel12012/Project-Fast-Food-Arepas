import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import DetailProductView from '@/views/DetailProductView.vue'
import PayView from '@/views/PayView.vue'

const routes = [
  {
    // vista de HomeView
    path: '/',
    name: "home",
    component: HomeView
  },
  {
    // vista de Menu
    path: '/menu',
    name: "menu",
    component: MenuView
  },
  {
    // vista de Detalle de productos
    path: '/products',
    name: "products",
    component: DetailProductView
  },
  {
    // vista de Detalle de productos
    path: '/pay',
    name: "pay",
    component: PayView
  }
  
]

export default createRouter({
  history: createWebHistory(),
  routes
})