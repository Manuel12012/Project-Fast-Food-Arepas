<template>
  <div
    class="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container border-b border-outline-variant">
            <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-center">
              ID
            </th>

            <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-center">
              Categoría
            </th>

            <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-center">
              Nombre
            </th>

            <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-center">
              Descripción
            </th>

            <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-center">
              Precio
            </th>

            <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-center">
              Imagen
            </th>

            <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in product.products"
            :key="item.id"
            class="border-b border-outline-variant/20 hover:bg-primary/5 transition-all duration-200 text-center"
          >
            <td class="px-md py-md font-medium">
              {{ item.id }}
            </td>

            <td class="px-md py-md">
              {{ item.categoriaId }}
            </td>

            <td class="px-md py-md font-medium">
              {{ item.nombre }}
            </td>

            <td class="px-md py-md max-w-xs truncate">
              {{ item.descripcion }}
            </td>

            <td class="px-md py-md font-semibold text-primary">S/ {{ item.precio }}</td>

            <td class="px-md py-md">
              <div class="flex justify-center">
                <img
                  :src="`http://localhost:8000/storage/${item.image}`"
                  :alt="item.nombre"
                  class="w-16 h-16 object-cover rounded-xl shadow-md border border-outline-variant/20 hover:scale-110 transition-transform duration-200"
                />
              </div>
            </td>

            <td class="px-md py-md">
              <div class="flex justify-center gap-3">
                <button
                  class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Editar
                </button>

                <button
                  class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                  @click="handleDelete(item.id)"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>

          <tr v-if="!product.products.length">
            <td colspan="7" class="text-center py-10 text-on-surface-variant">
              No hay productos registrados
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="p-md bg-surface-container flex justify-between items-center border-t border-outline-variant"
    >
      <p class="font-label-lg text-label-lg text-on-surface-variant">
        Mostrando 1-3 de 124 productos
      </p>
      <div class="flex gap-xs">
        <button
          class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors disabled:opacity-50"
          disabled=""
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button class="px-base py-xs rounded-lg bg-primary text-white font-bold">1</button>
        <button class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors">
          2
        </button>
        <button class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors">
          3
        </button>
        <button class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

defineProps({
  showModal: Boolean,
});
const product = useProductStore();
defineEmits(["close-modal"]);

const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchProducts();
});

const handleDelete = async(id: number) => {
  await productStore.deleteProduct(id)
};
</script>
