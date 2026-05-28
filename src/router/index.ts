import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import DetailProductView from '@/views/DetailProductView.vue'
import PayView from '@/views/PayView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },

  {
    // detalle del producto
    path: '/product/:id',
    name: 'product',
    component: DetailProductView
  },

  {
    path: '/pay',
    name: 'pay',
    component: PayView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})