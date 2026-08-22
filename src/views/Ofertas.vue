<template>
  <NavBar />

  <main class="max-w-7xl mx-auto px-6 lg:px-10 py-16 mt-24 bg-surface">
    <div class="mb-10">
      <h1 class="text-4xl font-black text-on-surface">Ofertas especiales</h1>

      <p class="mt-3 text-on-surface-variant">Aprovecha nuestros productos con descuento.</p>
    </div>

    <!-- SIN OFERTAS -->
    <section
      v-if="ofertas.activeOffers.length === 0"
      class="flex flex-col items-center justify-center text-center rounded-2xl border border-outline-variant bg-surface-container p-10"
    >
      <div class="text-6xl mb-4">🏷️</div>

      <h2 class="text-2xl font-bold text-on-surface">No hay ofertas disponibles</h2>

      <p class="mt-3 text-on-surface-variant">Vuelve pronto para descubrir nuevas promociones.</p>
    </section>

    <!-- OFERTAS -->
    <section v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="offer in ofertas.activeOffers"
        :key="offer.id"
        class="overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-sm"
      >
        <!-- IMAGEN -->
        <div class="relative">
          <img
            :src="offer.product?.image"
            :alt="offer.product?.nombre"
            class="w-full h-64 object-cover"
          />

          <!-- DESCUENTO -->
          <span
            class="absolute top-4 right-4 rounded-full bg-error text-on-error px-4 py-2 font-black"
          >
            -{{ Number(offer.descuento).toFixed(0) }}%
          </span>
        </div>

        <!-- INFO -->
        <div class="p-6">
          <h2 class="text-2xl font-bold text-on-surface">
            {{ offer.product?.nombre }}
          </h2>

          <p class="mt-2 text-on-surface-variant">
            {{ offer.product?.descripcion }}
          </p>

          <!-- PRECIO -->
          <div class="mt-5 flex items-center gap-3">
            <span class="text-3xl font-black text-primary">
              {{
                (
                  Number(offer.product?.precio) -
                  (Number(offer.product?.precio) * Number(offer.descuento)) / 100
                ).toFixed(2)
              }}
            </span>

            <span class="text-lg line-through text-on-surface-variant opacity-60">
              {{ Number(offer.product?.precio).toFixed(2) }}
            </span>
          </div>

          <!-- BOTÓN -->
          <RouterLink
            :to="`/product/${offer.product?.id}`"
            class="mt-6 block w-full text-center bg-primary text-on-primary font-bold py-3 rounded-xl hover:opacity-90 transition"
          >
            Ver producto
          </RouterLink>
        </div>
      </article>
    </section>
  </main>

  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Footer from "@/components/core/Footer.vue";
import NavBar from "@/components/core/NavBar.vue";
import { useOfferStore } from "@/stores/OfferStore";

defineOptions({
  name: "OfertasView",
});

const ofertas = useOfferStore();

onMounted(async () => {
  await ofertas.fetchOffers();

  console.log("Ofertas:", ofertas.activeOffers);
});
</script>
