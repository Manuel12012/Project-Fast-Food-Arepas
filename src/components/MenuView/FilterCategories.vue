<template>
  <section class="mb-(--spacing-xl) pt-24">
    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-(--spacing-md) mb-(--spacing-lg)"
    >
      <div>
        <h1
          class="[font-family:var(--font-display-lg)] font-black text-(length:--text-display-lg-mobile) md:text-(length:--text-display-lg) text-on-surface mb-(--spacing-xs)"
        >
          Q'Bocao
        </h1>

        <p
          class="text-on-surface-variant [font-family:var(--font-body-lg)] text-(length:--text-body-lg)"
        >
          Fast. Fresh. Latino. Sabor auténtico en cada mordida.
        </p>
      </div>
    </div>

    <!-- Chips / Filter Row -->
    <div class="flex overflow-x-auto pb-4 gap-(--spacing-sm) hide-scrollbar">
      <div v-for="categoria in categorias" :key="categoria.id" class="group cursor-pointer">
        <button
          class="bg-[#F9F9F9] cursor-pointer px-5 py-2 rounded-full hover:bg-[#EE6C4B] hover:text-white"
        >
          {{ convertirAOracion(categoria.nombre) }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import categorias from "@/data/Categories.js";
import { convertirAOracion } from "@/helpers/text.js";
</script>
