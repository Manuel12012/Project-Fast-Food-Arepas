<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-(--spacing-margin-desktop) h-16 bg-surface-container border-b border-outline-variant/30 shadow-md transition-colors duration-300"
  >
    <div class="flex items-center gap-md">
          <img
            alt="Q'Bocao Logo"
            class="h-12 w-auto object-contain"
            src="../../assets/icons/LogoMain.png"
            />    </div>

    <div class="flex items-center gap-md">
      <button
        class="p-xs rounded-full text-on-surface hover:bg-surface-container-high transition-all"
      >
        <span class="material-symbols-outlined"> notifications </span>
      </button>

      <button
        class="p-xs rounded-full text-on-surface hover:bg-surface-container-high transition-all"
      >
        <span class="material-symbols-outlined"> settings </span>
      </button>
      <button
        @click="themeStore.toggleTheme"
        class="p-2 rounded-full hover:bg-surface-container transition"
      >
        <span class="material-symbols-outlined">
          {{ themeStore.darkMode ? "light_mode" : "dark_mode" }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useThemeStore } from "@/stores/themStore";

const themeStore = useThemeStore();
</script>
