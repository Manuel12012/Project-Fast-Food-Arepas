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

// 🔥 abrir modal en modo CREATE
const openCreateModal = () => {
  selectedProduct.value = null
  isModalOpen.value = true
}

// 🔥 abrir modal en modo EDIT
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

  <div class="flex pt-16 min-h-screen">
    <AsideAdmin />

    <main class="ml-64 flex-1 p-margin-desktop">

      <!-- HEADER -->
      <HeaderAdmin @open-modal="openCreateModal" />

      <DashboardAdmin />

      <!-- TABLE -->
      <TableAdmin @edit-product="editProduct" />

      <!-- MODAL -->
      <ModalAdmin
        :isModalOpen="isModalOpen"
        :productToEdit="selectedProduct"
        @close-modal="closeModal"
      />

    </main>
  </div>
</template>