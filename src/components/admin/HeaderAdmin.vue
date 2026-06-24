<template>
  <div class="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">

    <!-- TEXTOS -->
    <div class="space-y-2">
      <h1 class="text-3xl font-bold text-gray-900 tracking-tight">
        Inventario
      </h1>

      <p class="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">
        Gestiona tus auténticos sabores latinos y controla el stock de tus productos en tiempo real.
      </p>
    </div>

    <!-- ACCIÓN -->
    <div class="flex">
      <button
        @click="$emit('open-modal')"
        class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <i class="ti ti-plus text-base" />
        Nuevo producto
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
defineEmits(["open-modal"]);
</script>