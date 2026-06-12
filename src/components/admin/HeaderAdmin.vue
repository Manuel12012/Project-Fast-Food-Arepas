<template>
  <div class="flex justify-between items-end mb-xl">
    <div>
      <h1 class="text-2xl font-bold mb-6">
        Inventario
      </h1>
      <p class="text-lg font-light text-gray-900">
        Gestiona tus auténticos sabores latinos y tus niveles de existencias.
      </p>
    </div>
    <div class="flex gap-md">

      <button
        class="bg-primary-container text-white px-xl py-sm rounded-lg cursor-pointer flex items-center gap-xs  shadow-lg hover:shadow-primary-container/40 transition-all hover:-translate-y-0.5 active:scale-95"
        @click="$emit('open-modal')">
        Nuevo Producto
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["open-modal"]);
</script>
