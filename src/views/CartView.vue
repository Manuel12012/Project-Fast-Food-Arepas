<template>
  <NavBar />

  <section class="max-w-7xl mx-auto px-4 py-8 mt-16">

    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

      <RouterLink to="/menu"
        class="inline-flex items-center gap-2 bg-[#EF6C22] hover:bg-[#d95f1e] text-white px-5 py-3 rounded-xl transition-all duration-200 w-fit">
        ← Seguir comprando
      </RouterLink>

      <h1 class="text-4xl font-bold text-gray-800">
        Mi Carrito
      </h1>

    </div>

    <!-- Carrito vacío -->
    <div v-if="cartStore.cart.length === 0" class="bg-white rounded-2xl shadow-md border p-10 text-center">
      <div class="text-6xl mb-4">
        🛒
      </div>

      <h2 class="text-2xl font-bold mb-2">
        Tu carrito está vacío
      </h2>

      <p class="text-gray-500 mb-6">
        Agrega algunos productos para comenzar tu pedido.
      </p>

      <RouterLink to="/menu" class="inline-flex items-center gap-2 bg-[#EF6C22] text-white px-6 py-3 rounded-xl">
        Ver menú
      </RouterLink>
    </div>

    <!-- Carrito con productos -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- Productos -->
      <div class="lg:col-span-2 space-y-4">

        <article v-for="item in cartStore.cart" :key="item.id"
          class="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <!-- Info -->
            <div>
              <h2 class="text-xl font-bold text-gray-800">
                {{ item.nombre }}
              </h2>

              <p class="text-gray-500 mt-1">
                Precio unitario: S/ {{ item.precio }}
              </p>

              <p class="text-sm text-gray-400 mt-1">
                Subtotal:
                <span class="font-semibold text-gray-700">
                  S/ {{ item.precio * item.cantidad }}
                </span>
              </p>
            </div>

            <!-- Controles -->
            <div class="flex items-center gap-3">

              <button @click="cartStore.decrementQuantity(item.id)" :disabled="item.cantidad <= 1"
                class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition disabled:opacity-100">
                -
              </button>

              <span class="font-bold text-lg min-w-7.5 text-center">
                {{ item.cantidad }}
              </span>

              <button @click="cartStore.incrementQuantity(item.id)"
                class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                +
              </button>

              <button @click="cartStore.removeItem(item.id)"
                class="ml-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                Eliminar
              </button>

            </div>

          </div>
        </article>

      </div>

      <!-- Resumen -->
      <div>

        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">

          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            Resumen del pedido
          </h2>

          <div class="space-y-3 border-b pb-4">

            <div class="flex justify-between">
              <span class="text-gray-500">
                Productos
              </span>

              <span class="font-semibold">
                {{ cartStore.cart.length }}
              </span>
            </div>

            <div class="flex justify-between text-xl">
              <span class="font-semibold">
                Total
              </span>

              <span class="font-bold text-[#EF6C22]">
                S/ {{ cartStore.total }}
              </span>
            </div>

          </div>

          <!-- Datos -->
          <div class="mt-6">

            <h3 class="font-semibold text-lg mb-4">
              Datos de entrega
            </h3>

            <div class="space-y-3">

              <input v-model="name" type="text" placeholder="Nombre completo"
                class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

              <input v-model="phone" type="number" placeholder="Celular"
                class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

              <input v-model="email" type="email" placeholder="Correo electrónico"
                class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

              <select v-model="delivery"
                class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">
                  Selecciona tipo de entrega
                </option>

                <option value="delivery">
                  Delivery
                </option>

                <option value="tienda">
                  Recojo en tienda
                </option>
              </select>

              <div class="border rounded-xl p-4 bg-gray-50">

                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" v-model="isScheduled" />

                  <span>
                    Programar pedido
                  </span>
                </label>

                <div v-if="isScheduled" class="mt-3">
                  <input v-model="scheduledFor" type="datetime-local"
                    class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>

              </div>

            </div>

          </div>

          <div v-if="delivery === 'delivery'" class="mt-6">
            <div class="flex items-center gap-2 mb-3">
              <h3 class="font-semibold">Ubicación de entrega</h3>
            </div>

            <div class="border rounded-2xl overflow-hidden">
              <div class="p-3">
                <DeliveryLocationPicker @location-selected="handleLocation" />
              </div>
            </div>
          </div>

          <!-- Botón -->
          <button @click="checkout"
            class="w-full mt-6 bg-[#EF6C22] hover:bg-[#d95f1e] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg">
            Finalizar compra • S/ {{ cartStore.total }}
          </button>

        </div>

      </div>

    </div>

  </section>

  <Footer />
  <LoadingOverlay v-if="loading" />
  <SuccesOverlay v-if="orderSuccess" @close="orderSuccess = false" />
</template>
<script setup lang="ts">

import Footer from "@/components/core/Footer.vue"
import NavBar from "@/components/core/NavBar.vue"
import { ref } from "vue"
import { useCartStore } from "@/stores/carthStore"
import DeliveryLocationPicker from "@/components/core/DeliveryLocationPicker.vue"
import LoadingOverlay from "@/components/core/LoadingOverlay.vue"
import SuccesOverlay from "@/components/core/SuccesOverlay.vue"
import router from "@/router"

const cartStore = useCartStore()
const orderSuccess = ref(false)
const loading = ref(false)
const email = ref("")
const phone = ref("")
const name = ref("")
const delivery = ref("")
const latitude = ref<number | null>(null)
const longitude = ref<number | null>(null)
const isScheduled = ref(false)
const scheduledFor = ref("")

const checkout = async () => {
  if (!email.value || !phone.value || !name.value) {
    alert("Completa todos tus datos")
    return
  }
  if (!delivery.value) {
    alert("Selecciona un tipo de entrega")
    return
  }
  if (
    delivery.value === "delivery" &&
    (latitude.value === null || longitude.value === null)
  ) {
    alert("Selecciona una ubicación en el mapa")
    return
  }
  // validacion fecha programada
  if (isScheduled.value && !scheduledFor.value) {
    alert("Selecciona una fecha y hora para el pedido")
    return
  }
  if (
    isScheduled.value &&
    new Date(scheduledFor.value) <= new Date()
  ) {
    alert("La fecha programada debe ser futura")
    return
  }

  loading.value = true  // ← activas aquí

  try {
    const [data] = await Promise.all([
      cartStore.checkout(
        email.value,
        phone.value,
        name.value,
        delivery.value,
        latitude.value!,
        longitude.value!,
        isScheduled.value
          ? scheduledFor.value
          : null
      ),
      new Promise(resolve => setTimeout(resolve, 3000))
    ])
    orderSuccess.value = true
    setTimeout(() => {
      router.push('/')
    }, 3000)
  } catch (error) {
    console.error(error)
    alert("Error al procesar la orden")
  } finally {
    loading.value = false  // ← desactivas aquí, después de los 3s
  }
}
const handleLocation = (location: any) => {
  latitude.value = location.latitude
  longitude.value = location.longitude
}

</script>