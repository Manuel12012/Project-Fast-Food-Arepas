<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl">

    <div v-for="item in productosFiltrados" :key="item.id"
      class="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300">

      <div class="h-64 overflow-hidden">
        <img :src="item.image" :alt="item.nombre"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      <div class="p-md flex flex-col h-full">

        <!-- HEADER -->

        <div class="flex justify-between items-start mb-xs">

          <h3>
            {{ item.emoji }} {{ item.nombre }}
          </h3>

          <span class="text-primary font-bold">
            {{ item.precio }}€
          </span>

        </div>

        <!-- DESCRIPTION -->

        <p class="mb-lg text-sm text-gray-600">
          {{ item.descripcion }}
        </p>

        <!-- COMBO -->

        <div v-if="item.combo" class="mt-auto flex justify-between">

          <span>
            Combo {{ item.unidadCombo }}
          </span>

          <span class="font-semibold text-primary">
            {{ item.combo }}€
          </span>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { computed } from "vue";
import products from "@/data/Grid.js";

const props = defineProps({
  categoria: String
});

const productosFiltrados = computed(() => {

  console.log("Categoria actual:", props.categoria);

  return products.filter(
    item => item.categoriaId === props.categoria
  );

});
</script>