<script setup lang="ts">
import { onMounted } from "vue"
import { useOrderStore } from "@/stores/orderStore"
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue"
import AsideAdmin from "@/components/admin/AsideAdmin.vue"

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
          Pedidos
        </h1>
  
        <div v-if="orderStore.orders.length === 0" class="text-gray-500">
          No hay pedidos todavía
        </div>
  
        <div v-else class="space-y-4">
  
          <div
            v-for="order in orderStore.orders"
            :key="order.id"
            class="bg-white border rounded-xl p-5 shadow-sm"
          >
  
            <div class="flex justify-between mb-2">
              <h2 class="font-bold">Pedido #{{ order.id }}</h2>
              <span>S/ {{ order.total }}</span>
            </div>
  
            <p class="text-sm">Email: {{ order.email }}</p>
            <p class="text-sm mb-3">Celular: {{ order.phone }}</p>
  
            <ul class="text-sm space-y-1">
              <li
                v-for="item in order.items"
                :key="item.id"
                class="flex justify-between border-b pb-1"
              >
                <span>{{ item.name_snapshot }} × {{ item.quantity }}</span>
                <span>S/ {{ item.price_snapshot }}</span>
              </li>
            </ul>
  
          </div>
  
        </div>
  
      </main>
  
    </div>
  </template>