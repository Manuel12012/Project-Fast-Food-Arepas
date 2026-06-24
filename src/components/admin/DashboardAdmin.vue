<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

    <!-- TOTAL PRODUCTOS -->
    <div
      class="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
          Total productos
        </p>

        <i class="ti ti-package text-primary text-lg" />
      </div>

      <p class="text-3xl font-bold text-primary">
        {{ productStore.totalProducts }}
      </p>
    </div>

    <!-- CATEGORÍAS -->
    <div
      class="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div class="flex items-center justify-between mb-3">
        <p class="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
          Categorías
        </p>

        <i class="ti ti-category text-secondary text-lg" />
      </div>

      <p class="text-3xl font-bold text-secondary">
        {{ productStore.totalCategories }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.countProducts();
  await productStore.countCategories();
});
</script>