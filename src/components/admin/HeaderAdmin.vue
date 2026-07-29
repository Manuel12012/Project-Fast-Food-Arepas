<template>
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
    <!-- Títulos -->
    <div class="space-y-2">
      <h1 class="text-headline-md font-headline-md font-bold text-on-background tracking-tight">
        Inventario
      </h1>

      <p class="max-w-2xl text-body-md text-on-surface-variant">
        Gestiona tus auténticos sabores latinos y controla el stock de tus productos en tiempo real.
      </p>
    </div>

    <!-- Acción -->
    <div class="flex gap-5">
      <div class="flex">
        <button
          @click="$emit('open-modal')"
          class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-label-md font-medium text-on-primary shadow-sm transition-all duration-200 hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <i class="ti ti-plus text-lg"></i>
          Nuevo producto
        </button>
      </div>

      <div class="flex">
        <button
          @click="$emit('open-modal')"
          class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-label-md font-medium text-on-primary shadow-sm transition-all duration-200 hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <i class="ti ti-plus text-lg"></i>
          Nueva Categoria
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["open-modal"]);
</script>
