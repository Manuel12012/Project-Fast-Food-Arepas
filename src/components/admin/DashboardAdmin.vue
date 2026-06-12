<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-md mb-xl">
    <div class="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
      <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
        Total Productos
      </p>
      <p class="font-headline-lg text-headline-lg text-primary"> {{ productStore.totalProducts }}</p>
    </div>
    <!-- <div class="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
      <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
        Low Stock
      </p>
      <p class="font-headline-lg text-headline-lg text-tertiary">8 Items</p>
    </div> -->
    <div class="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
      <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
        Categories
      </p>
      <p class="font-headline-lg text-headline-lg text-secondary">{{ productStore.totalCategories }}</p>
    </div>
    <!-- <div class="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
      <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
        Avg Price
      </p>
      <p class="font-headline-lg text-headline-lg text-on-surface">$12.50</p>
    </div> -->
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
