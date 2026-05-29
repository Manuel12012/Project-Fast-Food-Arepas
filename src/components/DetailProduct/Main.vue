<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '@/composables/useCart'
import products from '@/data/Grid.ts'


const { addToCart } = useCart();
const route = useRoute()

const productId = Number(route.params.id)

const producto = computed(() => {
  return products.find((item) => item.id === productId)
})

const cantidad = ref(1)

const incrementar = () => {
  cantidad.value++
}

const handleAddToCart = () => {

  if (!producto.value) return;

  addToCart(
    producto.value,
    cantidad.value
  );

}

const disminuir = () => {
  if (cantidad.value > 1) {
    cantidad.value--
  }
}

const precioTotal = computed(() => {
  if (!producto.value) return 0

  return (producto.value.precio * cantidad.value).toFixed(2)
})
</script>

<template>
  <main v-if="producto" class="max-w-7xl mx-auto px-6 lg:px-10 py-10 mt-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      <!-- LEFT -->
      <section class="space-y-5">

        <!-- MAIN IMAGE -->
        <div class="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm">
          <img :src="producto.image" :alt="producto.nombre"
            class="w-full h-125 object-contain transition-transform duration-500 group-hover:scale-105" />

          <div
            class="absolute top-5 left-5 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
            {{ producto.emoji }} Popular
          </div>
        </div>

        <!-- THUMBNAILS -->
        <div class="grid grid-cols-3 gap-4">
          <div v-for="n in 3" :key="n" class="rounded-2xl overflow-hidden border border-gray-200 bg-white h-28">
            <img :src="producto.image" :alt="producto.nombre" class="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      <!-- RIGHT -->
      <section class="sticky top-28">

        <!-- CATEGORY -->
        <span
          class="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1 text-sm font-medium mb-5">
          Producto destacado
        </span>

        <!-- TITLE -->
        <h1 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          {{ producto.nombre }}
        </h1>

        <!-- DESCRIPTION -->
        <p class="mt-5 text-lg leading-relaxed text-gray-600">
          {{ producto.descripcion }}
        </p>

        <!-- PRICE -->
        <div class="mt-8 flex items-end gap-3">
          <span class="text-5xl font-black text-primary">
            {{ producto.precio }}€
          </span>

          <span class="text-gray-400 line-through text-lg">
            {{ (producto.precio + 4).toFixed(2) }}€
          </span>
        </div>

        <!-- FEATURES -->
        <div class="mt-10 grid grid-cols-2 gap-4">

          <div class="rounded-2xl border border-gray-200 p-4 bg-white">
            <p class="text-sm text-gray-500">
              Calidad
            </p>

            <h4 class="font-bold text-lg mt-1">
              Premium
            </h4>
          </div>

          <div class="rounded-2xl border border-gray-200 p-4 bg-white">
            <p class="text-sm text-gray-500">
              Entrega
            </p>

            <h4 class="font-bold text-lg mt-1">
              15-25 min
            </h4>
          </div>

        </div>

        <!-- QUANTITY -->
        <div class="mt-10 flex items-center gap-5">

          <div class="flex items-center bg-gray-100 rounded-full p-2">
            <button @click="disminuir" class="w-10 h-10 rounded-full hover:bg-white transition font-bold text-xl">
              −
            </button>

            <span class="w-10 text-center font-bold text-lg">
              {{ cantidad }}
            </span>

            <button @click="incrementar" class="w-10 h-10 rounded-full hover:bg-white transition font-bold text-xl">
              +
            </button>
          </div>

          <div>
            <p class="text-sm text-gray-500">
              Total
            </p>

            <p class="text-2xl font-extrabold text-primary">
              {{ precioTotal }}€
            </p>
          </div>

        </div>

        <!-- ACTIONS -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4">

          <button @click="handleAddToCart"
            class="flex-1 bg-primary hover:opacity-90 text-white font-bold py-4 rounded-2xl transition shadow-lg shadow-primary/20">
            Añadir al carrito
          </button>

          <button class="px-6 py-4 rounded-2xl border border-gray-300 hover:bg-gray-50 transition">
            ❤️
          </button>

        </div>

        <!-- EXTRA INFO -->
        <div class="mt-12 border-t border-gray-200 pt-8 space-y-5">

          <details class="group border border-gray-200 rounded-2xl p-5 bg-white">
            <summary class="flex items-center justify-between cursor-pointer font-semibold">
              Información del producto

              <span class="transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>

            <div class="mt-4 text-gray-600 leading-relaxed">
              Elaborado con ingredientes frescos y seleccionado para
              garantizar la mejor experiencia gastronómica.
            </div>
          </details>

          <details class="group border border-gray-200 rounded-2xl p-5 bg-white">
            <summary class="flex items-center justify-between cursor-pointer font-semibold">
              Envío y entrega

              <span class="transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>

            <div class="mt-4 text-gray-600 leading-relaxed">
              Tiempo estimado de entrega entre 15 y 25 minutos
              dependiendo de tu ubicación.
            </div>
          </details>

        </div>

      </section>

    </div>
  </main>

  <!-- NOT FOUND -->
  <section v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
    <h2 class="text-5xl font-black text-gray-900">
      Producto no encontrado
    </h2>

    <p class="mt-4 text-gray-500 max-w-md">
      El producto que intentas visualizar no existe o fue eliminado.
    </p>
  </section>
</template>