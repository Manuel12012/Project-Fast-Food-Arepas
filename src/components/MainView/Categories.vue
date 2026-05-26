<template>
  <section class="py-xl px-margin-mobile md:px-margin-desktop max-w-full mx-auto bg-[#F9F9F9]">
    <div class="flex items-end justify-between mb-lg">
      <div>
        <h2 class="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
          Buscar por categoria
        </h2>
        <p class="text-on-surface-variant [font-family:var(--font-body-md)]">
          Descubre nuestra cuidada selección de delicias latinas de alta velocidad.
        </p>
      </div>
      <button class="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
        View All <span class="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-md">
      <!-- Categories -->
      <div class="group cursor-pointer">
        <div
          class="relative overflow-hidden aspect-square rounded-xl bg-surface-container-low flex items-center justify-center transition-all duration-300 group-hover:bg-primary-fixed"
        >
          <img
            alt="Burgers"
            class="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
            data-alt="A professional top-down shot of a classic cheese burger on a minimalist white plate. The lighting is crisp and even, highlighting the vibrant colors. The overall aesthetic is clean and modern, following a high-contrast palette of white and vibrant orange accents."
            src= "../../assets/"
          />
        </div>
        <p class="mt-sm font-headline-sm text-center">Burgers</p>
      </div>
    </div>
  </section>
</template>

<script>
import categorias from "../../data/Categories.js";

console.log(categorias);
</script>
