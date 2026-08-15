<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/carthStore";

const cartStore = useCartStore();
const store = useProductStore();
const route = useRoute();

const productId = Number(route.params.id);
const cantidad = ref(1);

onMounted(async () => {
  await store.fetchProductById(productId);
});

const producto = computed(() => store.product);

const precioOriginal = computed(() => {
  return Number(producto.value?.precio ?? 0);
});

const descuento = computed(() => {
  return Number(producto.value?.offer?.descuento ?? 0);
});

const precioDescuento = computed(() => {
  const precio = precioOriginal.value;
  const porcentaje = descuento.value;

  return precio - (precio * porcentaje) / 100;
});

const precioTotal = computed(() => {
  return precioDescuento.value * cantidad.value;
});

const incrementar = () => {
  cantidad.value++;
};

const disminuir = () => {
  if (cantidad.value > 1) {
    cantidad.value--;
  }
};

const handleAddToCart = () => {
  if (!producto.value) return;

  cartStore.addToCart(producto.value, cantidad.value);
};
</script>

<template>
  <main
    v-if="producto"
    class="max-w-7xl mx-auto px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-10 pt-28 bg-background"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- LEFT -->
      <section class="space-y-5">
        <!-- MAIN IMAGE -->
        <div
          class="group relative overflow-hidden rounded-3xl bg-surface-container-lowest border border-outline-variant shadow-sm"
        >
          <img
            :src="producto.image"
            :alt="producto.nombre || ''"
            class="w-full h-125 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <!-- THUMBNAILS -->
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="n in 3"
            :key="n"
            class="rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-lowest h-28"
          >
            <img
              :src="producto.image"
              :alt="producto.nombre || ''"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <!-- RIGHT -->
      <section class="sticky top-28">
        <!-- CHIP -->
        <span
          class="inline-flex items-center rounded-full bg-primary-container text-on-primary-container px-4 py-1 text-sm font-medium mb-5"
        >
          Producto destacado
        </span>

        <!-- TITLE -->
        <h1 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">
          {{ producto.nombre }}
        </h1>

        <!-- DESCRIPTION -->
        <p class="mt-5 text-lg leading-relaxed text-on-surface-variant">
          {{ producto.descripcion }}
        </p>

        <!-- PRICE -->
        <!-- PRICE -->
        <div class="mt-8 flex items-end gap-3">
          <span class="text-5xl font-black text-primary"> {{ precioDescuento.toFixed(2) }}€ </span>

          <span
            v-if="descuento > 0"
            class="text-on-surface-variant line-through text-lg opacity-70"
          >
            {{ precioOriginal.toFixed(2) }}€
          </span>
        </div>

        <!-- FEATURES -->
        <div class="mt-10 grid grid-cols-2 gap-4">
          <div class="rounded-2xl border border-outline-variant p-4 bg-surface-container-lowest">
            <p class="text-sm text-on-surface-variant">Calidad</p>

            <h4 class="font-bold text-lg mt-1 text-on-surface">Premium</h4>
          </div>

          <div class="rounded-2xl border border-outline-variant p-4 bg-surface-container-lowest">
            <p class="text-sm text-on-surface-variant">Entrega</p>

            <h4 class="font-bold text-lg mt-1 text-on-surface">15–25 min</h4>
          </div>
        </div>

        <!-- QUANTITY -->
        <!-- QUANTITY -->
        <div class="mt-10 flex items-center gap-5">
          <div class="flex items-center bg-surface-container rounded-full p-2">
            <button
              @click="disminuir"
              class="w-10 h-10 rounded-full hover:bg-surface-container-high transition font-bold text-xl"
            >
              −
            </button>

            <span class="w-10 text-center font-bold text-lg">
              {{ cantidad }}
            </span>

            <button
              @click="incrementar"
              class="w-10 h-10 rounded-full hover:bg-surface-container-high transition font-bold text-xl"
            >
              +
            </button>
          </div>

          <div>
            <p class="text-sm text-on-surface-variant">Total</p>

            <p class="text-2xl font-extrabold text-primary">{{ precioTotal.toFixed(2) }}€</p>
          </div>
        </div>

        <!-- BUTTON -->
        <div class="mt-10">
          <button
            @click="handleAddToCart"
            class="w-full bg-primary hover:brightness-95 text-on-primary font-bold py-4 rounded-2xl transition shadow-lg"
          >
            Añadir al carrito
          </button>
        </div>

        <!-- ACCORDION -->
        <div class="mt-12 border-t border-outline-variant pt-8 space-y-5">
          <details
            class="group border border-outline-variant rounded-2xl p-5 bg-surface-container-lowest"
          >
            <summary
              class="flex items-center justify-between cursor-pointer font-semibold text-on-surface"
            >
              Información del producto

              <span class="transition-transform group-open:rotate-180"> ▼ </span>
            </summary>

            <div class="mt-4 text-on-surface-variant leading-relaxed">
              {{ producto.descripcion }}
            </div>
          </details>

          <details
            class="group border border-outline-variant rounded-2xl p-5 bg-surface-container-lowest"
          >
            <summary
              class="flex items-center justify-between cursor-pointer font-semibold text-on-surface"
            >
              Envío y entrega

              <span class="transition-transform group-open:rotate-180"> ▼ </span>
            </summary>

            <div class="mt-4 text-on-surface-variant leading-relaxed">
              Tiempo estimado de entrega entre 15 y 25 minutos dependiendo de tu ubicación.
            </div>
          </details>
        </div>
      </section>
    </div>
  </main>

  <!-- NOT FOUND -->

  <section
    v-else
    class="min-h-[60vh] flex flex-col items-center justify-center text-center px-(--spacing-margin-mobile)"
  >
    <h2 class="text-5xl font-black text-on-surface">Producto no encontrado</h2>

    <p class="mt-4 max-w-md text-on-surface-variant">
      El producto que intentas visualizar no existe o fue eliminado.
    </p>
  </section>
</template>
