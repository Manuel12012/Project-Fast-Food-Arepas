<script setup lang="ts">
import Footer from "@/components/core/Footer.vue";
import NavBar from "@/components/core/NavBar.vue";
</script>

<template>
  <NavBar />

  <main class="max-w-7xl mx-auto px-6 lg:px-10 py-16 mt-24 min-h-[60vh]">
    <section
      class="flex flex-col items-center justify-center text-center rounded-2xl border border-gray-200 bg-gray-50 p-10 shadow-sm"
    >
      <div
        class="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-.707.293h-4.172a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 006.586 13H2"
          />
        </svg>
      </div>

      <h1 class="text-2xl font-semibold text-gray-800 mb-3">
        Aún no hay ofertas disponibles
      </h1>

      <p class="max-w-2xl text-gray-500">
        Estamos preparando nuevas promociones para ti. Vuelve pronto para
        descubrir productos y descuentos especiales.
      </p>

      <button
        class="mt-8 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        @click="$router.push('/')"
      >
        Explorar productos
      </button>
    </section>
  </main>

  <Footer />
</template>
