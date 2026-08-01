<template>
  <section class="pt-24 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- SCROLL CONTAINER -->
      <div
        class="flex gap-3 overflow-x-auto md:overflow-visible pb-2 md:flex-wrap md:justify-start scrollbar-hide"
      >
        <button
          v-for="categoria in store.categories"
          :key="categoria.id"
          @click="selectCategory(categoria.id)"
          type="button"
          class="relative shrink-0 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 border"
          :class="[
            categoriaSeleccionada === categoria.id
              ? 'bg-primary text-white shadow-lg border-primary'
              : 'bg-surface-container-low text-on-surface border-transparent hover:bg-primary hover:text-white hover:shadow-md',
          ]"
        >
          {{ convertirAOracion(categoria.nombre) }}

          <!-- ACTIVE DOT -->
          <span
            v-if="categoriaSeleccionada === categoria.id"
            class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FFED94] rounded-full"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { convertirAOracion } from "@/helpers/text";
import { useCategorieStore } from "@/stores/categorieStore";
import { onMounted } from "vue";

type CategoryId = number;

const store = useCategorieStore();

onMounted(async () => {
  await store.fetchCategories();
});
defineProps<{
  categoriaSeleccionada: CategoryId;
}>();

const emit = defineEmits<{
  (e: "change-category", value: CategoryId): void;
}>();

const selectCategory = (id: CategoryId) => {
  emit("change-category", id);
};
</script>
