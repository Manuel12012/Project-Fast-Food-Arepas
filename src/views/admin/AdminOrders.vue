<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { useOrderStore } from "@/stores/orderStore"
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue"
import AsideAdmin from "@/components/admin/AsideAdmin.vue"
import { formatDate } from "@/helpers/formatDate"

const orderStore = useOrderStore()

onMounted(async () => {
  await orderStore.fetchOrders()

  orderStore.orders.forEach(order => {
    statusDraft[order.id] = order.status
  })
})
const statusDraft = reactive<Record<number, string>>({})

const updateStatus = async (orderId: number, status: string) => {
  await orderStore.updateOrderStatus(orderId, status)

  statusDraft[orderId] = status
}

const statusClass = (status: string) => {
  switch (status) {
    case "Sin asignar":
      return "bg-gray-100 text-gray-700"

    case "Entregado":
      return "bg-green-100 text-green-700"

    case "Cancelado":
      return "bg-red-100 text-red-700"

    default:
      return "bg-gray-100 text-gray-700"
  }
}
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

        <div v-for="order in orderStore.orders" :key="order.id"
          class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <!-- HEADER -->
          <div class="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
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

              <div class="flex flex-col items-end gap-2">

                <select v-model="statusDraft[order.id]" class="border rounded-lg px-3 py-1 text-sm">
                  <option value="Sin asignar">Sin asignar</option>
                  <option value="Entregado">Entregado</option>
                  <option value="Cancelado">Cancelado</option>
                </select>

                <span class="inline-flex px-3 py-1 text-xs font-medium rounded-full"
                  :class="statusClass(statusDraft[order.id])">
                  {{ statusDraft[order.id] }}
                </span>
                <button @click="updateStatus(order.id, statusDraft[order.id])"
                  :disabled="statusDraft[order.id] === order.status"
                  class="text-sm bg-indigo-600 text-white px-3 py-1 rounded-lg disabled:opacity-50">
                  Guardar
                </button>
              </div>
            </div>
          </div>

          <!-- BODY -->
          <div class="p-6">

            <!-- CLIENTE -->
            <div class="mb-6">
              <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                Información del cliente
              </h3>

              <div class="grid md:grid-cols-2 gap-4">

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                          fill="#080341"></path>
                      </g>
                    </svg>
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

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                      transform="matrix(-1, 0, 0, 1, 0, 0)">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                          stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>
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

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"></circle>
                        <path
                          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                          stroke="#1C274C" stroke-width="1.5"></path>
                      </g>
                    </svg>
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

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545M3.74157 20.5545C2.54194 19.1091 2.9534 16.9146 3.77633 12.5257C4.36155 9.40452 4.65416 7.84393 5.76506 6.92196M3.74157 20.5545C3.74156 20.5545 3.74157 20.5545 3.74157 20.5545ZM20.2582 20.5545C21.4578 19.1091 21.0464 16.9146 20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196M20.2582 20.5545C20.2582 20.5545 20.2582 20.5545 20.2582 20.5545ZM18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196M18.2347 6.92196C18.2347 6.92196 18.2347 6.92196 18.2347 6.92196ZM5.76506 6.92196C5.76506 6.92196 5.76506 6.92196 5.76506 6.92196Z"
                          stroke="#1C274C" stroke-width="1.5"></path>
                        <path opacity="0.5" d="M10 14.3C10.5207 14.7686 10.8126 15.0314 11.3333 15.5L14 12.5"
                          stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path opacity="0.5" d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                          stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                      </g>
                    </svg>
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

                <!-- RECOJO CONDICIONAL-->
                <div v-if="order.delivery === 'delivery'"
                  class="flex items-start gap-4 bg-gray-50 rounded-xl p-4  border-gray-200">
                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl shrink-0">
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M9 11L11 13L15 9M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                          stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>
                  </div>

                  <div class="flex-1">
                    <p class="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Ubicación de entrega
                    </p>

                    <p class="text-sm text-gray-700 mt-1">
                      Lat:
                      <span class="font-medium">
                        {{ Number(order.latitude).toFixed(6) }}
                      </span>
                    </p>

                    <p class="text-sm text-gray-700">
                      Lng:
                      <span class="font-medium">
                        {{ Number(order.longitude).toFixed(6) }}
                      </span>
                    </p>

                    <a :href="`https://www.google.com/maps?q=${order.latitude},${order.longitude}`" target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Abrir ubicación en Google Maps
                    </a>
                  </div>
                </div>
                <!-- FIN RECOJO CONDICIONAL-->

                <div v-if="order.scheduled_for" class="bg-blue-50 text-blue-700 p-2 rounded-lg">
                  📅 Programado para:
                  {{ formatDate(order.scheduled_for) }}
                </div>

                <div v-else class="bg-green-50 text-green-700 p-2 rounded-lg">
                  🚚 Entrega inmediata
                </div>
              </div>
            </div>

            <!-- PRODUCTOS -->
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                Productos pedidos
              </h3>

              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="border-b text-left text-xs uppercase text-gray-500">
                      <th class="pb-3">Producto</th>
                      <th class="pb-3 text-center">Cantidad</th>
                      <th class="pb-3 text-right">Precio</th>
                      <th class="pb-3 text-right">Fecha</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="item in order.items" :key="item.id" class="border-b last:border-0">
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