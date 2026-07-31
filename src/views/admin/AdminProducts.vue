<script setup lang="ts">
import { ref } from "vue";

import AsideAdmin from "@/components/admin/AsideAdmin.vue";
import DashboardAdmin from "@/components/admin/DashboardAdmin.vue";
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue";
import ModalAdmin from "@/components/admin/ModalAdmin.vue";
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue";
import TableAdmin from "@/components/admin/TableAdmin.vue";
import ModalAdminOffer from "@/components/admin/ModalAdminOffer.vue";
import ModalAdminCategorie from "@/components/admin/ModalAdminCategorie.vue";
import TableAdminCategory from "@/components/admin/TableAdminCategory.vue";

// MODALES
const isModalOpen = ref(false);
const isModalOffer = ref(false);
const isModalCategoryOpen = ref(false);

// REFERENCES
const selectedProduct = ref(null);
const selectedPrice = ref(null);
const selectedCategory = ref(null);
// abrir modal en modo CREATE
const openCreateModal = () => {
  selectedProduct.value = null;
  isModalOpen.value = true;
};

// abrir modal en modo EDIT
const editProduct = (product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
};

// abrir modal en modo OFERTA
const openOfferModal = () => {
  console.log("abriendo oferta");
  selectedPrice.value = null;
  isModalOffer.value = true;
};
// cerrar
const closeModal = () => {
  isModalOpen.value = false;
  selectedProduct.value = null;
};

const closeModalOffer = () => {
  isModalOffer.value = false;
  selectedPrice.value = null;
};

const closeModalCategory = () => {
  isModalCategoryOpen.value = false;
  selectedCategory.value = null;
};

// ABRIR CREATE MODAL CATEGORY
const openModalCategory = () => {
  selectedCategory.value = null;
  isModalCategoryOpen.value = true;
};

// ABRIR EDIT MODAL CATEGORY
const editCategory = (category) => {
  selectedCategory.value = category;
  isModalCategoryOpen.value = true;
};
</script>

<template>
  <NavBarAdmin />

  <div class="min-h-screen bg-surface-container pt-16">
    <div class="grid grid-cols-[256px_1fr]">
      <!-- SIDEBAR -->
      <AsideAdmin class="h-[calc(100vh-4rem)] sticky top-16 z-40" />

      <!-- CONTENT -->
      <main class="p-6 lg:p-8">
        <div class="space-y-6">

          <!-- HEADER -->
          <section
            class="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5"
          >
            <HeaderAdmin
              @open-modal="openCreateModal"
              @open-modal-category="openModalCategory"
            />
          </section>


          <!-- DASHBOARD -->
          <DashboardAdmin />

          <!-- PRODUCTS HEADER -->
          <section class="pt-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-xl font-bold text-on-surface">
                  Productos
                </h2>

                <p class="text-sm text-on-surface-variant mt-1">
                  Administra los productos disponibles
                </p>
              </div>

            </div>
          </section>
          <!-- PRODUCTS -->
          <section
            class="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden"
          >
            <TableAdmin
              @edit-product="editProduct"
              @create-offer="openOfferModal"
            />
          </section>


          <!-- CATEGORIES HEADER -->
          <section class="pt-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-xl font-bold text-on-surface">
                  Categorías
                </h2>

                <p class="text-sm text-on-surface-variant mt-1">
                  Administra las categorías disponibles de tus productos
                </p>
              </div>

            </div>
          </section>


          <!-- CATEGORIES TABLE -->
          <section
            class="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden"
          >
            <TableAdminCategory
              @edit-category="editCategory"
            />
          </section>

        </div>


        <!-- MODALS -->

        <ModalAdmin
          :isModalOpen="isModalOpen"
          :productToEdit="selectedProduct"
          @close-modal="closeModal"
        />


        <ModalAdminOffer
          :isModalOffer="isModalOffer"
          :offerToEdit="selectedPrice"
          @close-modal-offer="closeModalOffer"
        />


        <ModalAdminCategorie
          :isModalCategoryOpen="isModalCategoryOpen"
          :categoryToEdit="selectedCategory"
          @close-modal-category="closeModalCategory"
        />

      </main>
    </div>
  </div>
</template>
