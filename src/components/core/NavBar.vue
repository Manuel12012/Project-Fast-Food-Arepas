<template>
  <nav class="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20">
    <div
      class="max-w-7xl mx-auto flex items-center justify-between px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-3">

      <!-- LOGO -->
      <a href="/" class="flex items-center gap-2 shrink-0">
        <img src="../../assets/icons/LogoMain.png" alt="Q'Bocao" class="h-10 md:h-12 w-auto" />
      </a>

      <!-- DESKTOP NAV -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#carte" class="text-on-surface hover:text-primary transition-colors font-medium">
          Notre Carte
        </a>

        <a href="#ofertas" class="text-on-surface hover:text-primary transition-colors font-medium">
          Ofertas
        </a>

        <a href="/products" class="text-on-surface hover:text-primary transition-colors font-medium">
          Seguimiento del pedido
        </a>
      </div>

      <!-- ACTIONS -->
      <div class="flex items-center gap-3">

        <!-- SEARCH (desktop) -->
        <div class="hidden lg:flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>

          <input type="text" placeholder="Buscar..."
            class="bg-transparent outline-none text-sm placeholder:text-on-surface-variant w-40" />
        </div>

        <!-- CART -->
        <RouterLink to="/cart" class="relative p-2 rounded-full hover:bg-surface-container transition"> <svg width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6h15l-1 7H7z" />
            <path d="M6 6L5 3H2" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          <span v-if="totalItems > 0" class="absolute -top-1 -right-1 bg-primary text-white text-[10px]
         w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {{ totalItems }}
          </span>
        </RouterLink>

        <RouterLink to="/admin/login" class="text-on-surface hover:text-primary transition-colors font-medium">
            Administrador
        </RouterLink>

        <!-- MOBILE MENU BUTTON -->
        <button @click="showMobileMenu = !showMobileMenu"
          class="md:hidden p-2 rounded-full hover:bg-surface-container transition">
          <svg v-if="!showMobileMenu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>

          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>

      </div>
    </div>

    <!-- MOBILE MENU -->
    <Transition name="fade">
      <div v-if="showMobileMenu"
        class="md:hidden absolute inset-x-0 top-full bg-surface border-t border-outline-variant shadow-lg">
        <div class="px-6 py-6 flex flex-col gap-4">

          <a href="#carte" class="font-medium text-on-surface hover:text-primary" @click="showMobileMenu = false">
            Notre Carte
          </a>

          <a href="#ofertas" class="font-medium text-on-surface hover:text-primary" @click="showMobileMenu = false">
            Ofertas
          </a>

          <a href="/products" class="font-medium text-on-surface hover:text-primary" @click="showMobileMenu = false">
            Seguimiento del pedido
          </a>

        </div>
      </div>
    </Transition>

  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useCart } from "@/composables/useCart";

const showMobileMenu = ref(false);

const { cart } = useCart();

const totalItems = computed(() => {
  return cart.value.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );
});

</script>
