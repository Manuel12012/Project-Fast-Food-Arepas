<template>
  <section class="p-0 bg-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- HEADER -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <h2 class="text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight">
            Buscar por categoría
          </h2>

          <p class="text-sm sm:text-base text-on-surface-variant mt-1">
            Encuentra rápidamente lo que te apetece
          </p>
        </div>

        <a href="/menu" class="group flex items-center gap-2 text-primary font-semibold transition">
          Ver todas

          <span class="transition-transform group-hover:translate-x-1"> → </span>
        </a>
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="categoria in categories.slice(0, 4)"
          :key="categoria.id"
          class="group cursor-pointer"
          @click="irAlMenu(categoria)"
        >
          <!-- CARD -->

          <div
            class="relative aspect-square rounded-3xl overflow-hidden bg-surface-container border border-outline-variant/40 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
          >
            <!-- IMAGE -->

            <img
              :src="getImage(categoria)"
              :alt="categoria.nombre"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <!-- OVERLAY -->

            <div
              class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition"
            ></div>

            <!-- LABEL -->

            <div class="absolute bottom-4 left-4 right-4">
              <p class="text-white font-semibold text-base sm:text-lg leading-tight">
                {{ categoria.nombre }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useCategorieStore } from "@/stores/categorieStore";
import type { Category } from "@/types";

const router = useRouter();

const categorieStore = useCategorieStore();

// Primero creas las referencias
const { categories } = storeToRefs(categorieStore);

// Ahora sí puedes usarlas
console.log("Store:", categorieStore);
console.log("Categories:", categories.value);

onMounted(() => {
  categorieStore.fetchCategories();
});

const irAlMenu = (categoria: Category) => {
  router.push({
    path: "/menu",
    query: {
      categoria: categoria.id.toString(),
    },
  });
};

// const images = import.meta.glob("../../assets/categories/*", {
//   eager: true,
//   import: "default",
// });
const getImage = (categoria: Category) => {
  if (!categoria.image) {
    return "/placeholder-category.png";
  }

  return `http://localhost:8000/storage/${categoria.image}`;
};
</script>
