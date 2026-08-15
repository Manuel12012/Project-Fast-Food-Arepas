<template>
  <div
    class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <!-- HEADER -->
        <thead class="bg-surface-container border-b border-outline-variant">
          <tr class="text-left">
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              ID
            </th>
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Categoría
            </th>
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Nombre
            </th>
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Descripción
            </th>
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Precio
            </th>
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Imagen
            </th>
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Estado
            </th>
            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant text-center"
            >
              Acciones
            </th>
          </tr>
        </thead>

        <!-- BODY -->
        <tbody>
          <tr
            v-for="item in store.products"
            :key="item.id"
            class="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors"
          >
            <!-- ID -->
            <td class="px-5 py-4 text-on-surface-variant font-medium">#{{ item.id }}</td>

            <!-- CATEGORÍA -->
            <td class="px-5 py-4">
              <span
                class="px-2.5 py-1 text-xs rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30"
              >
                {{ item.category?.nombre ?? "Sin categoría" }}
              </span>
            </td>

            <!-- NOMBRE -->
            <td class="px-5 py-4 font-medium text-on-surface">
              {{ item.nombre }}
            </td>

            <!-- DESCRIPCIÓN -->
            <td class="px-5 py-4 max-w-55 truncate text-on-surface-variant">
              {{ item.descripcion }}
            </td>

            <!-- PRECIO -->
            <td class="px-5 py-4 font-semibold text-primary">
              EUR {{ Number(item.precio).toFixed(2) }}
            </td>

            <!-- IMAGEN -->
            <td class="px-5 py-4">
              <div class="flex items-center">
                <img
                  :src="item.image"
                  :alt="item.nombre"
                  class="w-12 h-12 rounded-xl object-cover border border-outline-variant/20 shadow-sm hover:scale-110 transition-transform"
                />
              </div>
            </td>
            <td class="px-5 py-4">
              <span
                v-if="item.offer"
                class="px-2.5 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-600"
              >
                -{{ item.offer.descuento }}%
              </span>

              <span v-else class="text-on-surface-variant"> Sin oferta </span>
            </td>

            <!-- ACCIONES -->
            <td class="px-5 py-4">
              <div class="flex items-center justify-center gap-2">
                <!-- EDIT -->
                <button
                  @click="emit('edit-product', item)"
                  class="p-2 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500 hover:text-white transition-all"
                >
                  <i class="ti ti-edit text-lg" />
                </button>

                <!-- DELETE -->
                <button
                  @click="openModalDelete(item.id)"
                  class="p-2 rounded-lg bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white transition-all"
                >
                  <i class="ti ti-trash text-lg" />
                </button>

                <button
                  @click="emit('create-offer', item)"
                  class="p-2 rounded-lg bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all"
                >
                  <i class="ti ti-discount-2 text-lg"></i>
                </button>
              </div>
            </td>
          </tr>

          <!-- EMPTY STATE -->
          <tr v-if="!store.products.length">
            <td colspan="7" class="text-center py-12 text-on-surface-variant">
              <div class="flex flex-col items-center gap-2">
                <i class="ti ti-package-off text-3xl" />
                <p>No hay productos registrados</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="deleteModal" class="fixed inset-0 z-9999 flex items-center justify-center">
      <!-- Fondo -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="close"></div>

      <!-- Modal -->
      <div
        class="relative z-10 w-full max-w-2xl mx-4 rounded-2xl bg-surface p-6 shadow-2xl"
        @click.stop
      >
        <h2 class="text-lg font-semibold">¿Estás seguro que quieres eliminar el producto?</h2>

        <div class="mt-6 flex justify-end gap-3">
          <button @click="close" class="px-4 py-2 rounded-lg border">Cancelar</button>

          <button @click="handleDelete(itemId)" class="px-4 py-2 rounded-lg bg-red-600 text-white">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useProductStore } from "@/stores/productStore";
import type { Product } from "@/types";

const store = useProductStore();
const deleteModal = ref(false);
const itemId = ref<number | null>(null);

const emit = defineEmits<{
  (e: "edit-product", product: Product): void;
  (e: "create-offer", product: Product): void;
}>();

onMounted(async () => {
  await store.fetchProducts();
});

const handleDelete = async (id: number | null) => {
  if (id === null) return;

  await store.deleteProduct(id);

  deleteModal.value = false;
  itemId.value = null;
};

const openModalDelete = (id: number) => {
  deleteModal.value = true;
  itemId.value = id;
};

const close = () => {
  deleteModal.value = false;
};
</script>
