<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dim transition-colors duration-200">
    <div class="flex justify-between items-center w-full px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-(--spacing-base) max-w-7xl mx-auto">

      <!-- Logo -->
      <a class="flex items-center gap-2" href="/">
        <img
          alt="Q'Bocao Logo"
          class="h-10 md:h-14 w-auto object-contain aspect-video"
          loading="lazy"
          src="../../assets/icons/LogoMain.png"
        />
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-(--spacing-lg)">
        <a class="text-on-surface font-medium hover:text-primary transition-colors duration-200" href="#carte">Notre Carte</a>
        <a class="text-on-surface dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#ofertas">Ofertas</a>
        <a class="text-on-surface dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/products">Seguimiento del pedido</a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-(--spacing-md)">
        <!-- Search bar (desktop) -->
        <div class="hidden lg:flex items-center bg-surface-container rounded-full px-md py-xs">
          <svg width="16px" height="32px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" style="fill:none;stroke:#000000;stroke-miterlimit:10;stroke-width:32px"/>
            <line x1="338.29" y1="338.29" x2="448" y2="448" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/>
          </svg>
          <input
            class="appearance-none bg-transparent border-none outline-none focus:ring-0 ml-2 text-(length:--text-body-md) placeholder:text-primary"
            placeholder="Buscar..."
            type="text"
          />
        </div>

        <!-- Cart (mobile) -->
        <button class="md:hidden p-2 cursor-pointer relative">
          <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="absolute top-0 right-0 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
        </button>

        <!-- Hamburger (mobile) -->
        <button @click="showMobileMenu = !showMobileMenu" class="md:hidden p-2 cursor-pointer">
          <svg v-if="showMobileMenu" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M6 6l12 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg v-else width="32px" height="32px" viewBox="0 0 24 24" fill="none">
            <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="fade">
      <div
        v-if="showMobileMenu"
        class="md:hidden fixed top-20 left-0 right-0 bg-white dark:bg-zinc-900 shadow-2xl border-t border-zinc-200 dark:border-zinc-700 z-40"
      >
        <div class="p-6 flex flex-col gap-1">
          <a href="#carte" class="block py-3 font-semibold" @click="showMobileMenu = false">Notre Carte</a>
          <a href="#ofertas" class="block py-3 font-semibold" @click="showMobileMenu = false">Ofertas</a>
          <a href="/products" class="block py-3 font-semibold" @click="showMobileMenu = false">Seguimiento del pedido</a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMobileMenu = ref(false);
</script>
