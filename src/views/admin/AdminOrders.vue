<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useOrderStore } from "@/stores/orderStore";
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue";
import AsideAdmin from "@/components/admin/AsideAdmin.vue";
import { formatDate } from "@/helpers/formatDate";
import { ref } from "vue";

const orderStore = useOrderStore();
const currentPage = ref(1);
onMounted(async () => {
  await orderStore.fetchOrders(currentPage);
  orderStore.orders.forEach((order) => {
    statusDraft[order.id] = order.status;
  });
});

const pages = computed(() => {
  return Array.from({ length: orderStore.lastPage }, (_, index) => index + 1);
});
const nextPage = async () => {
  if (orderStore.currentPage < orderStore.lastPage) {
    orderStore.currentPage++;
    await orderStore.fetchOrders(orderStore.currentPage);
  }
};

const goToPage = async (page: number) => {
  await orderStore.fetchOrders(page);
};

const prevPage = async () => {
  if (orderStore.currentPage > 1) {
    orderStore.currentPage--;
    await orderStore.fetchOrders(orderStore.currentPage);
  }
};
const statusDraft = reactive<Record<number, string>>({});

const updateStatus = async (orderId: number, status: string | undefined, page: number) => {
  if (!status) return;

  await orderStore.updateOrderStatus(orderId, status, page);
  statusDraft[orderId] = status;
};

// const statusClass = (status: string) => {
//   if (status === "Entregado") return "status-entregado";
//   if (status === "Cancelado") return "status-cancelado";
//   return "status-sin";
// };

const statusIcon = (status: string | undefined) => {
  if (status === "Entregado") return "ti-circle-check";
  if (status === "Cancelado") return "ti-circle-x";
  return "ti-clock";
};
</script>

<template>
  <NavBarAdmin />

  <div class="flex min-h-screen pt-16 bg-background">
    <AsideAdmin class="w-64 shrink-0" />

    <main class="flex-1 ml-64 p-6 bg-surface min-h-screen transition-colors duration-300">
      <h1 class="text-2xl font-semibold mb-6 text-on-surface">Órdenes</h1>

      <!-- VACIO -->
      <div
        v-if="orderStore.orders.length === 0"
        class="flex flex-col items-center justify-center py-20 text-outline"
      >
        <i class="ti ti-inbox text-4xl mb-3" />

        <p class="text-sm">No hay pedidos todavía</p>
      </div>

      <div v-else class="flex flex-col gap-4">
        <!-- CARD PEDIDO -->

        <div
          v-for="order in orderStore.orders"
          :key="order.id"
          class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-colors"
        >
          <!-- HEADER -->

          <div
            class="flex items-center justify-between px-5 py-4 bg-surface-container border-b border-outline-variant gap-3 flex-wrap"
          >
            <div class="flex flex-col gap-1">
              <span class="text-base font-semibold text-on-surface"> Pedido #{{ order.id }} </span>

              <span class="text-xs text-outline flex items-center gap-1">
                <i class="ti ti-clock" />

                {{ formatDate(order.created_at) }}
              </span>
            </div>

            <div class="flex items-center gap-5 flex-wrap">
              <!-- PRECIO -->

              <div class="text-right">
                <p class="text-xl font-semibold text-primary">
                  EUR {{ Number(order.total).toFixed(2) }}
                </p>

                <div class="flex flex-col gap-1 text-xs text-outline">
                  <span>
                    Subtotal: EUR
                    {{ (Number(order.total) - Number(order.delivery_cost)).toFixed(2) }}
                  </span>

                  <span
                    class="flex items-center gap-1 justify-end"
                    :class="order.free_delivery ? 'text-green-500' : 'text-amber-500'"
                  >
                    <i class="ti" :class="order.free_delivery ? 'ti-gift' : 'ti-motorbike'" />

                    <template v-if="order.free_delivery"> Delivery gratis </template>

                    <template v-else>
                      Delivery: EUR {{ Number(order.delivery_cost).toFixed(2) }}
                    </template>
                  </span>

                  <span class="flex items-center justify-end gap-1 text-outline">
                    <i class="ti ti-route" />

                    {{ order.distance_km }} km
                  </span>
                </div>
              </div>

              <!-- STATUS -->

              <div class="flex flex-col items-end gap-2">
                <select
                  v-model="statusDraft[order.id]"
                  class="border border-outline-variant rounded-lg px-3 py-1.5 text-sm bg-surface text-on-surface"
                >
                  <option value="Sin asignar">Sin asignar</option>

                  <option value="Entregado">Entregado</option>

                  <option value="Cancelado">Cancelado</option>
                </select>

                <span
                  class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                  :class="{
                    'bg-surface-container text-outline': statusDraft[order.id] === 'Sin asignar',

                    'bg-green-500/20 text-green-500': statusDraft[order.id] === 'Entregado',

                    'bg-red-500/20 text-red-500': statusDraft[order.id] === 'Cancelado',
                  }"
                >
                  <i class="ti" :class="statusIcon(statusDraft[order.id])" />

                  {{ statusDraft[order.id] }}
                </span>

                <button
                  @click="updateStatus(order.id, statusDraft[order.id])"
                  :disabled="statusDraft[order.id] === order.status"
                  class="text-xs bg-primary hover:bg-primary-container text-on-primary px-4 py-1.5 rounded-lg disabled:opacity-40 transition"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
          <!-- BODY -->

          <div class="p-5 flex flex-col gap-6">
            <!-- CLIENTE -->

            <div>
              <p class="text-xs font-medium uppercase tracking-widest text-outline mb-3">
                Información del cliente
              </p>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <!-- EMAIL -->

                <div class="flex items-center gap-3 bg-surface-container rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0"
                  >
                    <i class="ti ti-mail" />
                  </div>

                  <div>
                    <p class="text-xs text-outline">Correo</p>

                    <p class="text-sm font-medium text-on-surface truncate max-w-30">
                      {{ order.email }}
                    </p>
                  </div>
                </div>

                <!-- TELEFONO -->

                <div class="flex items-center gap-3 bg-surface-container rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"
                  >
                    <i class="ti ti-phone" />
                  </div>

                  <div>
                    <p class="text-xs text-outline">Teléfono</p>

                    <p class="text-sm font-medium text-on-surface">
                      {{ order.phone }}
                    </p>
                  </div>
                </div>

                <!-- CLIENTE -->

                <div class="flex items-center gap-3 bg-surface-container rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0"
                  >
                    <i class="ti ti-user" />
                  </div>

                  <div>
                    <p class="text-xs text-outline">Cliente</p>

                    <p class="text-sm font-medium text-on-surface">
                      {{ order.name }}
                    </p>
                  </div>
                </div>

                <!-- ENTREGA -->

                <div class="flex items-center gap-3 bg-surface-container rounded-xl p-3">
                  <div
                    class="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0"
                  >
                    <i class="ti ti-package" />
                  </div>

                  <div>
                    <p class="text-xs text-outline">Tipo de entrega</p>

                    <p class="text-sm font-medium text-on-surface capitalize">
                      {{ order.delivery }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- UBICACION -->

              <div
                v-if="order.delivery === 'delivery' && order.latitude"
                class="flex items-start gap-3 bg-surface-container rounded-xl p-4 mt-3"
              >
                <div
                  class="w-9 h-9 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"
                >
                  <i class="ti ti-map-pin" />
                </div>

                <div>
                  <p class="text-xs text-outline mb-1">Ubicación de entrega</p>

                  <div class="flex gap-4 text-sm text-on-surface-variant">
                    <span>
                      Lat:
                      <strong class="text-on-surface">
                        {{ Number(order.latitude).toFixed(6) }}
                      </strong>
                    </span>

                    <span>
                      Lng:
                      <strong class="text-on-surface">
                        {{ Number(order.longitude).toFixed(6) }}
                      </strong>
                    </span>
                  </div>

                  <a
                    :href="`https://www.google.com/maps?q=${order.latitude},${order.longitude}`"
                    target="_blank"
                    class="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-secondary bg-secondary-container px-3 py-1.5 rounded-lg transition"
                  >
                    <i class="ti ti-external-link" />

                    Ver en Google Maps
                  </a>
                </div>
              </div>

              <!-- PROGRAMADO -->

              <div class="mt-3">
                <span
                  v-if="order.scheduled_for"
                  class="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary-container text-secondary px-3 py-1.5 rounded-lg"
                >
                  <i class="ti ti-calendar" />

                  Programado:
                  {{ formatDate(order.scheduled_for) }}
                </span>

                <span
                  v-else
                  class="inline-flex items-center gap-1.5 text-xs font-medium bg-green-500/20 text-green-500 px-3 py-1.5 rounded-lg"
                >
                  <i class="ti ti-truck" />

                  Entrega inmediata
                </span>
              </div>
            </div>
            <!-- PRODUCTOS -->

            <div>
              <p class="text-xs font-medium uppercase tracking-widest text-outline mb-3">
                Productos pedidos
              </p>

              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-outline-variant">
                    <th class="text-left text-xs font-medium text-outline uppercase pb-2">
                      Producto
                    </th>

                    <th class="text-center text-xs font-medium text-outline uppercase pb-2">
                      Cantidad
                    </th>

                    <th class="text-right text-xs font-medium text-outline uppercase pb-2">
                      Precio
                    </th>

                    <th class="text-right text-xs font-medium text-outline uppercase pb-2">
                      Fecha
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="item in order.items"
                    :key="item.id"
                    class="border-b border-outline-variant last:border-0"
                  >
                    <td class="py-2.5 font-medium text-on-surface">
                      {{ item.name_snapshot }}
                    </td>

                    <td class="py-2.5 text-center">
                      <span
                        class="bg-surface-container text-on-surface-variant text-xs font-medium px-2.5 py-0.5 rounded-md"
                      >
                        ×{{ item.quantity }}
                      </span>
                    </td>

                    <td class="py-2.5 text-right text-on-surface-variant">
                      EUR
                      {{ Number(item.price_snapshot).toFixed(2) }}
                    </td>

                    <td class="py-2.5 text-right text-outline text-xs">
                      {{ formatDate(item.created_at) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="flex gap-5">
          <button
            @click="prevPage"
            :disabled="orderStore.currentPage === 1"
            class="border border-gray-500 px-2 rounded"
          >
            Anterior
          </button>
          <div class="flex gap-2">
            <button
              v-for="page in pages"
              v-bind:key="page"
              @click="goToPage(page)"
              class="border border-gray-500 px-2 rounded"
            >
              {{ page }}
            </button>
          </div>

          <button
            @click="nextPage"
            :disabled="orderStore.currentPage === orderStore.lastPage"
            class="border border-gray-500 px-2 rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
