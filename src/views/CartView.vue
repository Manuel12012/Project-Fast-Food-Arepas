<template>
  <NavBar />

  <section class="max-w-4xl mx-auto p-6 mt-16">

    <RouterLink to="/menu">
      Volver a menu
    </RouterLink>

    <h1 class="text-3xl font-bold mb-6">
      Carrito
    </h1>

    <!-- CARRITO VACÍO -->
    <div v-if="cartStore.cart.length === 0">
      <p>Tu carrito está vacío</p>
    </div>

    <!-- CARRITO CON ITEMS -->
    <div v-else class="space-y-4">

      <article v-for="item in cartStore.cart" :key="item.id"
        class="border rounded-xl p-4 flex justify-between items-center">

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

          <button @click="cartStore.decrementQuantity(item.id)" class="px-3 py-1 bg-gray-200 rounded">
            -
          </button>

          <span>
            {{ item.cantidad }}
          </span>

          <button @click="cartStore.incrementQuantity(item.id)" class="px-3 py-1 bg-gray-200 rounded">
            +
          </button>

          <button @click="cartStore.removeItem(item.id)" class="px-3 py-1 bg-red-500 text-white rounded">
            Eliminar
          </button>

        </div>

      </article>

      <!-- TOTAL -->
      <div class="text-right mt-6">
        <h2 class="text-2xl font-bold">
          Total: S/ {{ cartStore.total }}
        </h2>
      </div>

      <!-- CHECKOUT -->
      <div class="mt-8 space-y-3">

        <h2 class="text-xl font-semibold">
          Datos para entrega
        </h2>

        <input v-model="email" type="email" placeholder="Correo" class="border p-2 w-full rounded" />

        <input v-model="phone" type="text" placeholder="Celular" class="border p-2 w-full rounded" />

        <button @click="checkout" class="bg-black text-white px-4 py-3 rounded w-full">
          Finalizar compra
        </button>

      </div>

    </div>

  </section>

  <Footer />
</template>
<script setup lang="ts">

import Footer from "@/components/core/Footer.vue"
import NavBar from "@/components/core/NavBar.vue"
import { onMounted, ref } from "vue"
import { useCartStore } from "@/stores/carthStore"

const cartStore = useCartStore()

const email = ref("")
const phone = ref("")

const checkout = async () => {
  if (!email.value || !phone.value) {
    alert("Completa tus datos")
    return
  }

  await cartStore.checkout(email.value, phone.value)
}

</script>