<template>
  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center">

    <!-- BACKDROP -->
    <div
      class="absolute inset-0 bg-black/40 backdrop-blur-sm"
      @click="close"
    />

    <!-- MODAL -->
    <div
      class="relative w-full max-w-2xl mx-4 bg-surface rounded-2xl border border-outline-variant/50 shadow-2xl animate-in fade-in zoom-in duration-200"
    >

      <!-- HEADER -->
      <div class="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">

        <div>
          <h2 class="text-xl font-semibold text-on-surface">
            {{ isEditMode ? "Editar producto" : "Nuevo producto" }}
          </h2>

          <p class="text-sm text-on-surface-variant mt-1">
            Completa la información del producto
          </p>
        </div>

        <button
          @click="close"
          class="p-2 rounded-full hover:bg-surface-container transition-colors"
        >
          <i class="ti ti-x text-xl text-on-surface-variant" />
        </button>

      </div>

      <!-- FORM -->
      <form class="p-6 space-y-5" @submit.prevent="submitProduct">

        <!-- NOMBRE -->
        <div>
          <label class="text-sm text-on-surface-variant">Nombre</label>
          <input v-model="nombre" type="text" class="input" placeholder="Ej: Arepa reina pepiada" />
        </div>

        <!-- GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

          <!-- CATEGORÍA -->
          <div>
            <label class="text-sm text-on-surface-variant">Categoría</label>
            <select v-model="categoriaId" class="input">
              <option value="">Seleccione categoría</option>
              <option value="arepas">Arepas</option>
              <option value="empanadas">Empanadas</option>
              <option value="bebidas">Bebidas</option>
              <option value="postres">Postres</option>
              <option value="tequeños">Tequeños</option>
            </select>
          </div>

          <!-- PRECIO -->
          <div>
            <label class="text-sm text-on-surface-variant">Precio</label>
            <input v-model="precio" type="number" class="input" placeholder="0.00" />
          </div>

        </div>

        <!-- DESCRIPCIÓN -->
        <div>
          <label class="text-sm text-on-surface-variant">Descripción</label>
          <input v-model="descripcion" type="text" class="input" placeholder="Descripción del producto" />
        </div>

        <!-- IMAGEN -->
        <div>
          <label class="text-sm text-on-surface-variant">Imagen</label>

          <input
            type="file"
            accept="image/*"
            @change="handleImage"
            class="mt-2 block w-full text-sm text-on-surface-variant"
          />

          <div v-if="previewImage" class="mt-4">
            <p class="text-xs text-on-surface-variant mb-2">Vista previa</p>

            <img
              :src="previewImage"
              class="w-40 h-40 object-cover rounded-xl border border-outline-variant/30 shadow-sm hover:scale-105 transition-transform"
            />
          </div>
        </div>

        <!-- ACTIONS -->
        <div class="flex justify-end gap-3 pt-2 border-t border-outline-variant/30">

          <button
            type="button"
            @click="close"
            class="px-4 py-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            Cancelar
          </button>

          <button
            type="submit"
            class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-all active:scale-95"
          >
            {{ isEditMode ? "Actualizar" : "Guardar" }}
          </button>

        </div>

      </form>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue"
import { useProductStore } from "@/stores/productStore"

const props = defineProps<{
  isModalOpen: boolean
  productToEdit?: any
}>()

const emit = defineEmits(["close-modal"])

const store = useProductStore()

// FORM STATE
const nombre = ref("")
const categoriaId = ref("")
const descripcion = ref("")
const precio = ref("")
const imageFile = ref<File | null>(null)
const previewImage = ref("")

// MODE
const isEditMode = computed(() => !!props.productToEdit)

// FILL FORM WHEN EDITING
watch(
  () => props.productToEdit,
  (product) => {
    if (product) {
      nombre.value = product.nombre
      categoriaId.value = product.categoriaId
      descripcion.value = product.descripcion
      precio.value = product.precio
      previewImage.value = product.image
      imageFile.value = null
    } else {
      nombre.value = ""
      categoriaId.value = ""
      descripcion.value = ""
      precio.value = ""
      previewImage.value = ""
      imageFile.value = null
    }
  },
  { immediate: true }
)

// IMAGE
const handleImage = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]

  if (file) {
    imageFile.value = file
    previewImage.value = URL.createObjectURL(file)
  }
}

// CLOSE
const close = () => {
  emit("close-modal")
}

// SUBMIT (CREATE / UPDATE)
const submitProduct = async () => {
  const payload = {
    categoriaId: categoriaId.value,
    nombre: nombre.value,
    descripcion: descripcion.value,
    precio: precio.value,
    image: imageFile.value
  }

  if (isEditMode.value) {
    await store.updateProduct(props.productToEdit.id, payload)
  } else {
    await store.createProduct(payload)
  }

  close()
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.btn-primary {
  flex: 1;
  padding: 10px;
  background: black;
  color: white;
  border-radius: 8px;
}

.btn-secondary {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
