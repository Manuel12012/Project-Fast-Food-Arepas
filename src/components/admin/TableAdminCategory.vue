<template>
  <div
    class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-sm table-fixed">
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
              Nombre
            </th>

            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Imagen
            </th>

            <th
              class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant text-center"
            >
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="item in store.categories"
            :key="item.id"
            class="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors"
          >
            <td class="px-5 py-4 text-on-surface-variant font-medium">#{{ item.id }}</td>
            <!-- NOMBRE -->
            <td class="px-5 py-4 font-medium text-on-surface">
              {{ item.nombre }}
            </td>

            <!-- IMAGEN -->
            <td class="px-5 py-4 text-center">
              <div class="flex items-center ">
                <img
                  :src="`http://localhost:8000/storage/${item.image}`"
                  :alt="item.nombre"
                  class="w-12 h-12 rounded-xl object-cover border border-outline-variant/20 shadow-sm hover:scale-110 transition-transform"
                />
              </div>
            </td>

            <!-- ACCIONES -->
            <td class="px-5 py-4">
              <div class="flex items-center justify-center gap-2">
                <!-- EDIT -->
                <button
                  @click="emit('edit-category', item)"
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
              </div>
            </td>
          </tr>

          <!-- EMPTY STATE -->
          <tr v-if="!store.categories.length">
            <td colspan="4" class="text-center py-12 text-on-surface-variant">
              <div class="flex flex-col items-center gap-2">
                <i class="ti ti-package-off text-3xl" />
                <p>No hay productos registrados</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="deleteModal" class="fixed inset-0 z-[9999] flex items-center justify-center">
      <!-- Fondo -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="close"></div>

      <!-- Modal -->
      <div
        class="relative z-10 w-full max-w-2xl mx-4 rounded-2xl bg-surface p-6 shadow-2xl"
        @click.stop
      >
        <h2 class="text-lg font-semibold">¿Estás seguro que quieres la categoria?</h2>

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
import { useCategorieStore } from "@/stores/categorieStore";
import { onMounted, ref } from "vue";

const store = useCategorieStore();
const deleteModal = ref(false);
const itemId = ref<number | null>(null);

const emit = defineEmits<{
  (e: "edit-category", category: any): void;
  (e: "create-offer"): void;
}>();

onMounted(async () => {
  await store.fetchCategories();
});

const handleDelete = async (id: number | null) => {
  if (id === null) return;

  await store.deleteCategorie(id);

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
