import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import AdminProducts from '@/views/admin/AdminProducts.vue'
import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import DetailProductView from '@/views/DetailProductView.vue'
import PayView from '@/views/PayView.vue'
import CartView from '@/views/CartView.vue'
import AdminLogin from '@/views/admin/AdminLogin.vue'
import AdminOrders from '@/views/admin/AdminOrders.vue'
import AdminSettings from '@/views/admin/AdminSettings.vue'

// ...tus imports de vistas

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/menu', name: 'menu', component: MenuView },
  { path: '/product/:id', name: 'product', component: DetailProductView },
  { path: '/pay', name: 'pay', component: PayView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/admin/login', name: 'admin-login', component: AdminLogin },


  // rutas protegidas con meta
  {
    path: '/admin/dashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/products',
    component: AdminProducts,
    meta: { requiresAuth: true }
  }, {
    path: '/admin/orders',
    component: AdminOrders,
    meta: { requiresAuth: true }
  }, {
    path: '/admin/settings',
    component: AdminSettings,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// guard global
router.beforeEach(async (to) => {
  if (!to.meta.requiresAuth) return true

  const authStore = useAuthStore()

  if (authStore.authenticated) return true

  await authStore.fetchUser()

  if (authStore.authenticated) return true

  return { name: 'admin-login' }
})

export default router
