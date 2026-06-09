<template>
  <NavBar />

  <section class="max-w-4xl mx-auto p-6 mt-16">

    <RouterLink to="/menu" class="bg-[#EF6C22] text-white text-lg px-4 py-2 rounded-md">
      Volver al menú
    </RouterLink>

    <h1 class="text-3xl font-bold mb-6 mt-6">
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

        <input v-model="name" type="text" placeholder="Nombre" class="border p-2 w-full rounded" />

        <select name="delivery" id="delivery" v-model="delivery" class="border p-2 w-full rounded">
          <option value="">-- Seleccione Tipo de Entrega --</option>
          <option value="delivery">Delivery</option>
          <option value="tienda">Recojo en tienda</option>
        </select>

        <DeliveryLocationPicker @location-selected="handleLocation" />

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
import DeliveryLocationPicker from "@/components/core/DeliveryLocationPicker.vue"

const cartStore = useCartStore()

const email = ref("")
const phone = ref("")
const name = ref("")
const delivery = ref("")
const address = ref("")
const latitude = ref<number | null>(null)
const longitude = ref<number | null>(null)

const checkout = async () => {
  // Validaciones
  if (!email.value || !phone.value || !name.value) {
    alert("Completa todos tus datos")
    return
  }

  if (!delivery.value) {
    alert("Selecciona un tipo de entrega")
    return
  }

  if (latitude.value === null || longitude.value === null) {
    alert("Selecciona una ubicación en el mapa")
    return
  }

  try {
    const data = await cartStore.checkout(
      email.value,
      phone.value,
      name.value,
      delivery.value,
      address.value,
      latitude.value,
      longitude.value
    )

    if (data) {
      alert(`✅ Orden #${data.order.id} creada exitosamente`)
      // Opcional: redirigir
      // router.push("/menu")
    }
  } catch (error) {
    alert("Error al procesar la orden")
    console.error(error)
  }
}
const handleLocation = (location: any) => {
  console.log("RECIBIDO DEL MAPA", location)
  address.value = location.address
  latitude.value = location.latitude
  longitude.value = location.longitude
}

</script>