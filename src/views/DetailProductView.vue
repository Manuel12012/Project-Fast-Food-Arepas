<script setup lang="ts">
import { useRoute } from "vue-router";

import NavBar from "@/components/core/NavBar.vue";
import Footer from "@/components/core/Footer.vue";
import Main from "@/components/DetailProduct/Main.vue";
// import Recommendation from "@/components/DetailProduct/Recommendation.vue";

const route = useRoute();

// ID del producto desde la URL
const id = route.params.id;

console.log(id);
</script>

<template>
  <div class="min-h-screen bg-background text-on-surface overflow-x-hidden">
    <!-- HEADER -->
    <header>
      <NavBar />
    </header>

    <!-- MAIN -->
    <main class="pt-20 bg-background">
      <Main />

      <!-- <Recommendation /> -->
    </main>

    <!-- FOOTER -->
    <footer>
      <Footer />
    </footer>
  </div>
</template>
