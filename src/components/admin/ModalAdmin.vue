<template>
    <div v-if="isModalOpen" class="fixed inset-0 z-60 flex items-center justify-center">
      <div
        class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
        @click="close"
      ></div>
  
      <div
        class="relative bg-surface p-8 rounded-2xl shadow-xl w-175 max-w-[95vw] border border-outline-variant/50 animate-in fade-in zoom-in duration-300"
      >
        <!-- TITLE -->
        <div class="flex justify-between items-center mb-md">
          <h2 class="font-headline-lg text-headline-lg text-on-surface">
            {{ isEditMode ? "Editar Producto" : "Nuevo Producto" }}
          </h2>
  
          <button
            class="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-all"
            @click="close"
          >
            X
          </button>
        </div>
  
        <!-- FORM -->
        <form class="space-y-md" @submit.prevent="submitProduct">
  
          <!-- NOMBRE -->
          <div>
            <label class="block mb-xs">Nombre del Producto</label>
            <input v-model="nombre" class="input" type="text" />
          </div>
  
          <!-- CATEGORIA + PRECIO -->
          <div class="grid grid-cols-2 gap-md">
            <div>
              <label class="block mb-xs">Categoría</label>
              <select v-model="categoriaId" class="input">
                <option value="">Seleccione</option>
                <option value="arepas">Arepas</option>
                <option value="empanadas">Empanadas</option>
                <option value="bebidas">Bebidas</option>
                <option value="postres">Postres</option>
              </select>
            </div>
  
            <div>
              <label class="block mb-xs">Precio</label>
              <input v-model="precio" type="number" class="input" />
            </div>
          </div>
  
          <!-- DESCRIPCION -->
          <div>
            <label class="block mb-xs">Descripción</label>
            <input v-model="descripcion" type="text" class="input" />
          </div>
  
          <!-- IMAGE -->
          <div>
            <label class="block mb-xs">Imagen</label>
            <input type="file" accept="image/*" @change="handleImage" />
  
            <img
              v-if="previewImage"
              :src="previewImage"
              class="mt-4 w-40 h-40 object-cover rounded-lg border"
            />
          </div>
  
          <!-- ACTIONS -->
          <div class="flex gap-md pt-md">
            <button type="button" class="btn-secondary" @click="close">
              Cancelar
            </button>
  
            <button type="submit" class="btn-primary">
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