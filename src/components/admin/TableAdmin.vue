<template>
  <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">

    <div class="overflow-x-auto">

      <table class="w-full text-sm">

        <!-- HEADER -->
        <thead class="bg-surface-container border-b border-outline-variant">
          <tr class="text-left">
            <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">ID</th>
            <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Categoría</th>
            <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Nombre</th>
            <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Descripción</th>
            <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Precio</th>
            <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Imagen</th>
            <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant text-center">Acciones</th>
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
            <td class="px-5 py-4 text-on-surface-variant font-medium">
              #{{ item.id }}
            </td>

            <!-- CATEGORÍA -->
            <td class="px-5 py-4">
              <span class="px-2.5 py-1 text-xs rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
                {{ item.categoriaId }}
              </span>
            </td>

            <!-- NOMBRE -->
            <td class="px-5 py-4 font-medium text-on-surface">
              {{ item.nombre }}
            </td>

            <!-- DESCRIPCIÓN -->
            <td class="px-5 py-4 max-w-[220px] truncate text-on-surface-variant">
              {{ item.descripcion }}
            </td>

            <!-- PRECIO -->
            <td class="px-5 py-4 font-semibold text-primary">
              S/ {{ Number(item.precio).toFixed(2) }}
            </td>

            <!-- IMAGEN -->
            <td class="px-5 py-4">
              <div class="flex items-center justify-center">
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
                  @click="emit('edit-product', item)"
                  class="p-2 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500 hover:text-white transition-all"
                >
                  <i class="ti ti-edit text-lg" />
                </button>

                <!-- DELETE -->
                <button
                  @click="handleDelete(item.id)"
                  class="p-2 rounded-lg bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white transition-all"
                >
                  <i class="ti ti-trash text-lg" />
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

  </div>
</template>  
  <script setup lang="ts">
  import { onMounted } from "vue"
  import { useProductStore } from "@/stores/productStore"
  
  const store = useProductStore()
  
  const emit = defineEmits<{
    (e: "edit-product", product: any): void
  }>()
  
  onMounted(async () => {
    await store.fetchProducts()
  })
  
  const handleDelete = async (id: number) => {
    await store.deleteProduct(id)
  }
  </script>