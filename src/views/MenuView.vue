<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import NavBar from "@/components/core/NavBar.vue";
import Footer from "@/components/core/Footer.vue";

import FilterCategories from "@/components/Products/FilterCategories.vue";
import ProductGrid from "@/components/Products/ProductGrid.vue";

const route = useRoute();
const router = useRouter();

const categoriaSeleccionada = computed<number>(() => {
  const categoria = Number(route.query.categoria);

  return categoria || 0;
});

const cambiarCategoria = (categoria: number) => {
  router.replace({
    query: {
      ...route.query,
      categoria: categoria.toString(),
    },
  });
};
</script>

<template>
  <div class="min-h-screen bg-surface text-on-surface overflow-x-hidden">
    <!-- HEADER -->

    <header>
      <NavBar />
    </header>

    <!-- MAIN -->

    <main
      class="max-w-7xl mx-auto px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) pt-24 pb-16 bg-surface"
    >
      <section class="space-y-10">
        <FilterCategories
          :categoriaSeleccionada="categoriaSeleccionada"
          @change-category="cambiarCategoria"
        />

        <ProductGrid :categoria="categoriaSeleccionada" />
      </section>
    </main>

    <!-- FOOTER -->

    <footer>
      <Footer />
    </footer>
  </div>
</template>
