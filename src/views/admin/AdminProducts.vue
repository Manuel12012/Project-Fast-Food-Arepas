<script setup>
import { ref } from 'vue'

import AsideAdmin from '@/components/admin/AsideAdmin.vue'
import DashboardAdmin from '@/components/admin/DashboardAdmin.vue'
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import ModalAdmin from '@/components/admin/ModalAdmin.vue'
import NavBarAdmin from '@/components/admin/NavBarAdmin.vue'
import TableAdmin from '@/components/admin/TableAdmin.vue'

const isModalOpen = ref(false)
const selectedProduct = ref(null)

// abrir modal en modo CREATE
const openCreateModal = () => {
  selectedProduct.value = null
  isModalOpen.value = true
}

// abrir modal en modo EDIT
const editProduct = (product) => {
  selectedProduct.value = product
  isModalOpen.value = true
}

// cerrar
const closeModal = () => {
  isModalOpen.value = false
  selectedProduct.value = null
}
</script>

<template>
  <NavBarAdmin />

  <div class="min-h-screen bg-surface-container pt-16">

    <div class="grid grid-cols-[256px_1fr]">

      <!-- SIDEBAR -->
      <AsideAdmin class="h-[calc(100vh-4rem)] sticky top-16 z-40" />

      <!-- CONTENT -->
      <main class="p-6 lg:p-8">

        <div class="max-w-7xl mx-auto flex flex-col gap-6">

          <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5">
            <HeaderAdmin @open-modal="openCreateModal" />
          </div>

          <DashboardAdmin />

          <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden">
            <TableAdmin @edit-product="editProduct" />
          </div>

        </div>

        <ModalAdmin
          :isModalOpen="isModalOpen"
          :productToEdit="selectedProduct"
          @close-modal="closeModal"
        />

      </main>

    </div>

  </div>
</template>