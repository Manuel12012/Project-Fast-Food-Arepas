<template>
  <aside
    class="fixed left-0 top-16 h-[calc(100vh-64px)] w-64
           bg-surface dark:bg-surface-dim
           border-r border-outline-variant
           shadow-lg
           flex flex-col"
  >
    <!-- Logo -->
    <div class="px-6 py-6 border-b border-outline-variant">
      <h1 class="text-2xl font-black text-primary tracking-tight">
        Q'Bocao
      </h1>
      <p class="text-sm text-on-surface-variant">
        Management Portal
      </p>
    </div>

    <!-- Navegación -->
    <nav class="flex-1 px-3 py-5 space-y-2">

      <RouterLink
        to="/admin/products"
        :class="linkClass('/admin/products')"
      >
        <i class="ti ti-package text-xl"></i>
        <span>Productos</span>
      </RouterLink>

      <RouterLink
        to="/admin/orders"
        :class="linkClass('/admin/orders')"
      >
        <i class="ti ti-shopping-cart text-xl"></i>
        <span>Órdenes</span>
      </RouterLink>

      <RouterLink
        to="/admin/settings"
        :class="linkClass('/admin/settings')"
      >
        <i class="ti ti-settings text-xl"></i>
        <span>Configuración</span>
      </RouterLink>

    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-outline-variant">
      <button
        @click="handleLogout"
        class="w-full flex items-center justify-center gap-2
               rounded-xl
               bg-red-500/10
               text-red-600
               py-3
               hover:bg-red-500
               hover:text-white
               transition-all"
      >
        <i class="ti ti-logout"></i>
        <span>Cerrar sesión</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { useRouter, useRoute } from "vue-router";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const handleLogout = async () => {
  await auth.logout();
  router.push("/admin/login");
};

const linkClass = (path: string) => [
  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
  route.path === path
    ? "bg-primary text-white shadow-md"
    : "text-on-surface-variant hover:bg-primary/10 hover:text-primary",
];
</script>