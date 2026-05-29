<template>

    <NavBar/>
    <section class="max-w-4xl mx-auto p-6">
  
      <h1 class="text-3xl font-bold mb-6">
        Carrito
      </h1>
  
      <!-- CARRITO VACÍO -->
      <div v-if="cart.length === 0">
  
        <p>
          Tu carrito está vacío
        </p>
  
      </div>
  
      <!-- ITEMS -->
      <div
        v-else
        class="space-y-4"
      >
  
        <article
          v-for="item in cart"
          :key="item.id"
          class="border rounded-xl p-4 flex justify-between items-center"
        >
  
          <!-- INFO -->
          <div>
  
            <h2 class="font-semibold text-lg">
              {{ item.nombre }}
            </h2>
  
            <p>
              S/ {{ item.precio }}
            </p>
  
            <p>
              Cantidad: {{ item.cantidad }}
            </p>
  
          </div>
  
          <!-- ACCIONES -->
          <div class="flex items-center gap-2">
  
            <button
              @click="decrementQuantity(item.id)"
              class="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>
  
            <span>
              {{ item.cantidad }}
            </span>
  
            <button
              @click="incrementQuantity(item.id)"
              class="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>
  
            <button
              @click="deleteItem(item.id)"
              class="px-3 py-1 bg-red-500 text-white rounded"
            >
              Eliminar
            </button>
  
          </div>
  
        </article>
  
        <!-- TOTAL -->
        <div class="text-right mt-6">
  
          <h2 class="text-2xl font-bold">
            Total: S/ {{ total }}
          </h2>
  
        </div>
  
      </div>
  
    </section>

    <Footer />
  </template>
  
  <script setup lang="ts">
  
  import Footer from "@/components/core/Footer.vue";
import NavBar from "@/components/core/NavBar.vue";
import { useCart } from "@/composables/useCart";
  
  const {
  
    cart,
  
    total,
  
    incrementQuantity,
  
    decrementQuantity,
  
    deleteItem
  
  } = useCart();
  
  </script>