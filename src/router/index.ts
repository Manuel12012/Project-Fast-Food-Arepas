import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    // vista de HomeView
    path: '/',
    name: "home",
    component: HomeView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})