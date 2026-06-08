<template>
  <div class="flex justify-between items-end mb-xl">
    <div>
      <h1 class="font-display-lg text-display-lg text-on-surface tracking-tight mb-xs">
        Inventario
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Gestiona tus auténticos sabores latinos y tus niveles de existencias.
      </p>
    </div>
    <div class="flex gap-md">
      <button
        class="bg-surface-container-highest px-md py-sm rounded-lg flex items-center gap-xs font-label-lg text-label-lg text-on-surface hover:shadow-sm transition-all border border-outline-variant"
      >
        Filtros
      </button>
      <button
        class="bg-primary-container text-white px-xl py-sm rounded-lg cursor-pointer flex items-center gap-xs font-headline-md text-headline-md shadow-lg hover:shadow-primary-container/40 transition-all hover:-translate-y-0.5 active:scale-95"
        @click="$emit('open-modal')"
      >
        Nuevo Producto
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["open-modal"]);
</script>
