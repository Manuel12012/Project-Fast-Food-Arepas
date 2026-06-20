<template>
    <aside
      class="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-surface dark:bg-surface-dim flex flex-col gap-base p-base border-r border-outline-variant shadow-sm z-40"
    >
      <div class="py-md px-md">
        <span class="font-headline-lg text-primary font-black">Q'Bocao</span>
        <p class="text-on-surface-variant/70">Management Portal</p>
      </div>

      <nav class="flex-1 space-y-xs">

        <!-- PRODUCTS -->
        <RouterLink
          to="/admin/products"
          class="flex items-center gap-base px-md py-sm rounded-lg transition-all active:scale-95"
          :class="isActive('/admin/products')
            ? 'bg-primary-container text-on-primary-container font-bold'
            : 'text-on-surface-variant hover:bg-surface-variant'"
        >
          Productos
        </RouterLink>

        <!-- ORDERS -->
        <RouterLink
          to="/admin/orders"
          class="flex items-center gap-base px-md py-sm rounded-lg transition-all active:scale-95"
          :class="isActive('/admin/orders')
            ? 'bg-primary-container text-on-primary-container font-bold'
            : 'text-on-surface-variant hover:bg-surface-variant'"
        >
          Ordenes
        </RouterLink>

        <RouterLink
          to="/admin/settings"
          class="flex items-center gap-base px-md py-sm rounded-lg transition-all active:scale-95"
          :class="isActive('/admin/settings')
            ? 'bg-primary-container text-on-primary-container font-bold'
            : 'text-on-surface-variant hover:bg-surface-variant'"
        >
          Configuración
        </RouterLink>

      </nav>

      <div class="pt-md border-t border-outline-variant">
        <button
          class="bg-primary-container text-white px-xl py-sm rounded-lg w-full cursor-pointer"
          @click="handleLogout"
        >
          Cerrar Sesion
        </button>
      </div>
    </aside>
  </template>
  <script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { useRouter, useRoute } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

const handleLogout = async () => {
  await auth.logout()
  router.push('/admin/login')
}

const isActive = (path: string) => {
  return route.path === path
}
</script>
