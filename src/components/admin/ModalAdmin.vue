<template>
  <div v-if="isModalOpen" class="fixed inset-0 z-60 flex items-center justify-center">
    <div
      class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
      @click="$emit('close-modal')"
    ></div>
    <div
      class="relative bg-surface p-8 rounded-2xl shadow-xl w-175 max-w-[95vw] border border-outline-variant/50 animate-in fade-in zoom-in duration-300"
    >
      <div class="flex justify-between items-center mb-md">
        <h2 class="font-headline-lg text-headline-lg text-on-surface">Nuevo Producto</h2>
        <button
          class="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-all"
          @click="$emit('close-modal')"
        >
          X
        </button>
      </div>
      <form class="space-y-md" @submit.prevent="submitProduct">
        <div>
          <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs"
            >Nombre del Producto</label
          >
          <input
            class="w-full bg-surface-container-low border border-outline rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md"
            placeholder="Ej: Empanada de Pollo"
            v-model="nombre"
            type="text"
          />
        </div>
        <div class="grid grid-cols-2 gap-md">
          <div>
            <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs"
              >Categoría</label
            >
            <select
              v-model="categoriaId"
              class="w-full bg-surface-container-low border border-outline rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md"
            >
              <option value="">--- Seleccione una categoria ---</option>
              <option value="arepas">Arepas</option>
              <option>Entradas</option>
              <option>Bebidas</option>
              <option>Postres</option>
            </select>
          </div>
          <div>
            <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs"
              >Precio ($)</label
            >
            <input
              class="w-full bg-surface-container-low border border-outline rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md"
              placeholder="0.00"
              step="0.01"
              type="number"
              v-model="precio"
            />
          </div>
        </div>
        <div>
          <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs"
            >Descripcion</label
          >
          <input
            type="text"
            placeholder="Ingrese una descripcion"
            v-model="descripcion"
            class="w-full bg-surface-container-low border border-outline rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md"
          />
        </div>
        <div>
          <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs"
            >Imagen del Producto</label
          >
          <input type="file" accept="image/*" @change="handleImage" />

          <img
            v-if="previewImage"
            :src="previewImage"
            class="mt-4 w-40 h-40 object-cover rounded-lg border"
          />
        </div>
        <div class="pt-md flex gap-md">
          <button
            class="flex-1 px-md py-sm border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-variant transition-all"
            @click="$emit('close-modal')"
            type="button"
          >
            Cancelar
          </button>
          <button
            class="flex-1 px-md py-sm bg-primary-container text-white font-bold rounded-lg hover:bg-primary shadow-md hover:shadow-primary-container/40 transition-all"
            type="submit"
          >
            Guardar Producto
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isModalOpen: Boolean,
});

defineEmits(["close-modal"]);

import { ref } from "vue";
import api from "@/services/api";

const nombre = ref("");
const categoriaId = ref("");
const descripcion = ref("");
const precio = ref("");
const combo = ref("");
const unidadCombo = ref("");
const previewImage = ref("");
const imageFile = ref<File | null>(null);

const handleImage = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.files) {
    imageFile.value = target.files[0];

    console.log(imageFile.value);

    console.log(imageFile.value.type);
  }
};

const submitProduct = async () => {
  try {
    const formData = new FormData();

    formData.append("categoriaId", categoriaId.value);

    formData.append("nombre", nombre.value);

    formData.append("descripcion", descripcion.value);

    formData.append("precio", precio.value);

    formData.append("combo", combo.value);

    formData.append("unidadCombo", unidadCombo.value);

    if (imageFile.value) {
      formData.append("image", imageFile.value);
    }

    const response = await api.post("/products", formData);

    console.log(response.data);
  } catch (error: any) {
    console.log(error.response.data.errors);
  }
};
</script>
