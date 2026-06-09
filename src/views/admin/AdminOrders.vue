<script setup lang="ts">
import { onMounted } from "vue"
import { useOrderStore } from "@/stores/orderStore"
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue"
import AsideAdmin from "@/components/admin/AsideAdmin.vue"
import { formatDate } from "@/helpers/formatDate"

const orderStore = useOrderStore()

onMounted(() => {
  orderStore.fetchOrders()
})
</script>

<template>
  <NavBarAdmin />

  <div class="flex min-h-screen pt-16">

    <!-- SIDEBAR -->
    <AsideAdmin class="w-64 shrink-0" />

    <!-- MAIN CONTENT -->
    <main class="flex-1 ml-64 p-6 bg-gray-50">

      <h1 class="text-2xl font-bold mb-6">
        Ordenes
      </h1>

      <div v-if="orderStore.orders.length === 0" class="text-gray-500">
        No hay pedidos todavía
      </div>

      <div v-else class="space-y-4">

        <div
  v-for="order in orderStore.orders"
  :key="order.id"
  class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
>
  <!-- HEADER -->
  <div
    class="flex items-center justify-between px-6 py-4 border-b bg-gray-50"
  >
    <div>
      <h2 class="text-lg font-semibold text-gray-900">
        Pedido #{{ order.id }}
      </h2>

      <p class="text-sm text-gray-500">
        {{ formatDate(order.created_at) }}
      </p>
    </div>

    <div class="text-right">
      <p class="text-xl font-bold text-indigo-600">
        S/ {{ order.total }}
      </p>

      <span
        class="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700"
      >
        Pagado
      </span>
    </div>
  </div>

  <!-- BODY -->
  <div class="p-6">

    <!-- CLIENTE -->
    <div class="mb-6">
      <h3
        class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3"
      >
        Información del cliente
      </h3>

      <div class="grid md:grid-cols-2 gap-4">

        <div
          class="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center"
          >
            📧
          </div>

          <div>
            <p class="text-xs text-gray-500">
              Correo electrónico
            </p>
            <p class="font-medium">
              {{ order.email }}
            </p>
          </div>
        </div>

        <div
          class="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
          >
            📱
          </div>

          <div>
            <p class="text-xs text-gray-500">
              Teléfono
            </p>
            <p class="font-medium">
              {{ order.phone }}
            </p>
          </div>
        </div>

        <div
          class="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
          >
            📱
          </div>

          <div>
            <p class="text-xs text-gray-500">
              Nombre del cliente
            </p>
            <p class="font-medium">
              {{ order.name }}
            </p>
          </div>
        </div>

        <div
          class="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
          >
            📱
          </div>

          <div>
            <p class="text-xs text-gray-500">
              Tipo de entrega
            </p>
            <p class="font-medium">
              {{ order.delivery }}
            </p>
          </div>
        </div>

        <div
          class="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
          >
            📱
          </div>

          <div>
            <p class="text-xs text-gray-500">
              Direccion
            </p>
            <p class="font-medium">
              {{ order.address }}
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- PRODUCTOS -->
    <div>
      <h3
        class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3"
      >
        Productos pedidos
      </h3>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr
              class="border-b text-left text-xs uppercase text-gray-500"
            >
              <th class="pb-3">Producto</th>
              <th class="pb-3 text-center">Cantidad</th>
              <th class="pb-3 text-right">Precio</th>
              <th class="pb-3 text-right">Fecha</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="item in order.items"
              :key="item.id"
              class="border-b last:border-0"
            >
              <td class="py-3 font-medium">
                {{ item.name_snapshot }}
              </td>

              <td class="py-3 text-center">
                {{ item.quantity }}
              </td>

              <td class="py-3 text-right">
                S/ {{ item.price_snapshot }}
              </td>

              <td class="py-3 text-right text-gray-500">
                {{ formatDate(item.created_at) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</div>

      </div>

    </main>

  </div>
</template>