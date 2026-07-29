<script setup lang="ts">
import Footer from "@/components/core/Footer.vue";
import NavBar from "@/components/core/NavBar.vue";
</script>

<template>
  <NavBar />

  <main
    class="max-w-7xl mx-auto px-6 lg:px-10 py-16 mt-24 min-h-[60vh] bg-surface"
  >

    <section
      class="
        flex
        flex-col
        items-center
        justify-center
        text-center

        rounded-2xl

        border
        border-outline-variant

        bg-surface-container

        p-10

        shadow-sm
      "
    >

      <!-- ICON -->

      <div
        class="
          flex
          items-center
          justify-center

          w-20
          h-20

          rounded-full

          bg-surface-container-high

          shadow

          mb-6
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-on-surface-variant"
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



      <!-- TITLE -->

      <h1
        class="
          text-2xl
          font-semibold
          text-on-surface
          mb-3
        "
      >
        Aún no hay ofertas disponibles
      </h1>



      <!-- DESCRIPTION -->

      <p
        class="
          max-w-2xl
          text-on-surface-variant
        "
      >
        Estamos preparando nuevas promociones para ti.
        Vuelve pronto para descubrir productos y descuentos especiales.
      </p>



      <!-- BUTTON -->

      <button
        class="
          mt-8

          px-6
          py-3

          rounded-lg

          bg-primary
          text-on-primary

          hover:opacity-90

          transition
        "
        @click="$router.push('/')"
      >
        Explorar productos
      </button>


    </section>


  </main>


  <Footer />

</template>
