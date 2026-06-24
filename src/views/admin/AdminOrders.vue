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
  if (status === "Entregado") return "status-entregado"
  if (status === "Cancelado") return "status-cancelado"
  return "status-sin"
}

const statusIcon = (status: string) => {
  if (status === "Entregado") return "ti-circle-check"
  if (status === "Cancelado") return "ti-circle-x"
  return "ti-clock"
}
</script>

<template>
  <NavBarAdmin />

  <div class="flex min-h-screen pt-16">
    <AsideAdmin class="w-64 shrink-0" />

    <main class="flex-1 ml-64 p-6 bg-gray-50 min-h-screen">

      <h1 class="text-2xl font-semibold mb-6">Órdenes</h1>

      <div v-if="orderStore.orders.length === 0" class="flex flex-col items-center justify-center py-20 text-gray-400">
        <i class="ti ti-inbox text-4xl mb-3" />
        <p class="text-sm">No hay pedidos todavía</p>
      </div>

      <div v-else class="flex flex-col gap-4">

        <div v-for="order in orderStore.orders" :key="order.id"
          class="bg-white border border-gray-200 rounded-xl overflow-hidden">

          <!-- HEADER -->
          <div class="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-200 gap-3 flex-wrap">

            <div class="flex flex-col gap-0.5">
              <span class="text-base font-semibold text-gray-900">Pedido #{{ order.id }}</span>
              <span class="text-xs text-gray-400 flex items-center gap-1">
                <i class="ti ti-clock" />
                {{ formatDate(order.created_at) }}
              </span>
            </div>

            <div class="flex items-center gap-5 flex-wrap">

              <!-- PRICING -->
              <div class="text-right">
                <p class="text-xl font-semibold text-blue-600">S/ {{ Number(order.total).toFixed(2) }}</p>
                <div class="flex flex-col gap-0.5 text-xs text-gray-400 mt-0.5">
                  <span>Subtotal: S/ {{ (Number(order.total) - Number(order.delivery_cost)).toFixed(2) }}</span>
                  <span :class="order.free_delivery ? 'text-green-600' : 'text-amber-600'"
                    class="flex items-center gap-1 justify-end">
                    <i :class="order.free_delivery ? 'ti-gift' : 'ti-motorbike'" class="ti" />
                    <template v-if="order.free_delivery">Delivery gratis</template>
                    <template v-else>Delivery: S/ {{ Number(order.delivery_cost).toFixed(2) }}</template>
                  </span>
                  <span class="flex items-center gap-1 justify-end text-gray-400">
                    <i class="ti ti-route" />
                    {{ order.distance_km }} km
                  </span>
                </div>
              </div>

              <!-- STATUS CONTROLS -->
              <div class="flex flex-col items-end gap-2">
                <select v-model="statusDraft[order.id]"
                  class="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white text-gray-700">
                  <option value="Sin asignar">Sin asignar</option>
                  <option value="Entregado">Entregado</option>
                  <option value="Cancelado">Cancelado</option>
                </select>

                <span class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full" :class="{
                  'bg-gray-100 text-gray-600': statusDraft[order.id] === 'Sin asignar',
                  'bg-green-100 text-green-700': statusDraft[order.id] === 'Entregado',
                  'bg-red-100 text-red-600': statusDraft[order.id] === 'Cancelado',
                }">
                  <i class="ti" :class="statusIcon(statusDraft[order.id])" />
                  {{ statusDraft[order.id] }}
                </span>

                <button @click="updateStatus(order.id, statusDraft[order.id])"
                  :disabled="statusDraft[order.id] === order.status"
                  class="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg disabled:opacity-40 transition-colors">
                  Guardar
                </button>
              </div>

            </div>
          </div>

          <!-- BODY -->
          <div class="p-5 flex flex-col gap-6">

            <!-- CLIENTE -->
            <div>
              <p class="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Información del cliente</p>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-base shrink-0">
                    <i class="ti ti-mail" />
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">Correo</p>
                    <p class="text-sm font-medium text-gray-800 truncate max-w-[120px]">{{ order.email }}</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-base shrink-0">
                    <i class="ti ti-phone" />
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">Teléfono</p>
                    <p class="text-sm font-medium text-gray-800">{{ order.phone }}</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-base shrink-0">
                    <i class="ti ti-user" />
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">Cliente</p>
                    <p class="text-sm font-medium text-gray-800">{{ order.name }}</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-base shrink-0">
                    <i class="ti ti-package" />
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">Tipo de entrega</p>
                    <p class="text-sm font-medium text-gray-800 capitalize">{{ order.delivery }}</p>
                  </div>
                </div>

              </div>

              <!-- UBICACIÓN DELIVERY -->
              <div v-if="order.delivery === 'delivery' && order.latitude"
                class="flex items-start gap-3 bg-gray-50 rounded-xl p-4 mt-3">
                <div
                  class="w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg shrink-0">
                  <i class="ti ti-map-pin" />
                </div>
                <div>
                  <p class="text-xs text-gray-400 mb-1">Ubicación de entrega</p>
                  <div class="flex gap-4 text-sm text-gray-600">
                    <span>Lat: <strong>{{ Number(order.latitude).toFixed(6) }}</strong></span>
                    <span>Lng: <strong>{{ Number(order.longitude).toFixed(6) }}</strong></span>
                  </div>

                  <a :href="`https://www.google.com/maps?q=${order.latitude},${order.longitude}`" target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                    <i class="ti ti-external-link" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              <!-- PROGRAMADO / INMEDIATO -->
              <div class="mt-3">
                <span v-if="order.scheduled_for"
                  class="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg">
                  <i class="ti ti-calendar" />
                  Programado: {{ formatDate(order.scheduled_for) }}
                </span>
                <span v-else
                  class="inline-flex items-center gap-1.5 text-xs font-medium bg-green-50 text-green-600 px-3 py-1.5 rounded-lg">
                  <i class="ti ti-truck" />
                  Entrega inmediata
                </span>
              </div>
            </div>

            <!-- PRODUCTOS -->
            <div>
              <p class="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Productos pedidos</p>

              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-gray-100">
                    <th class="text-left text-xs font-medium text-gray-400 uppercase pb-2">Producto</th>
                    <th class="text-center text-xs font-medium text-gray-400 uppercase pb-2">Cantidad</th>
                    <th class="text-right text-xs font-medium text-gray-400 uppercase pb-2">Precio</th>
                    <th class="text-right text-xs font-medium text-gray-400 uppercase pb-2">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.items" :key="item.id" class="border-b border-gray-50 last:border-0">
                    <td class="py-2.5 font-medium text-gray-800">{{ item.name_snapshot }}</td>
                    <td class="py-2.5 text-center">
                      <span class="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-md">
                        ×{{ item.quantity }}
                      </span>
                    </td>
                    <td class="py-2.5 text-right text-gray-500">S/ {{ Number(item.price_snapshot).toFixed(2) }}</td>
                    <td class="py-2.5 text-right text-gray-400 text-xs">{{ formatDate(item.created_at) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </main>
  </div>
</template>