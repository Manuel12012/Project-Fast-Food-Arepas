<script setup lang="ts">
import { ref } from "vue";

import NavBar from "@/components/core/NavBar.vue";
import Footer from "@/components/core/Footer.vue";

import FilterCategories from "@/components/Products/FilterCategories.vue";
import ProductGrid from "@/components/Products/ProductGrid.vue";

// por defecto arepas
const categoriaSeleccionada = ref("arepas");
</script>

<template>
  <div class="min-h-screen bg-background text-on-surface overflow-x-hidden">
    <!-- HEADER -->

    <header>
      <NavBar />
    </header>

    <!-- MAIN -->

    <main
      class="max-w-7xl mx-auto px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) pt-24 pb-16 bg-white"
    >
      <section class="space-y-10">
        <FilterCategories
          :categoriaSeleccionada="categoriaSeleccionada"
          @change-category="categoriaSeleccionada = $event"
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
