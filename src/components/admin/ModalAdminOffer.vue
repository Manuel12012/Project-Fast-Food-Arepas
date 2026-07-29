<template>
  <div
    v-if="isModalOffer"
    class="fixed inset-0 z-50 flex items-center justify-center"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-black/40 backdrop-blur-sm"
      @click="close"
    ></div>

    <!-- Contenido -->
    <div
      class="relative z-10 w-full max-w-2xl mx-4 bg-surface rounded-2xl border border-outline-variant/50 shadow-2xl animate-in fade-in zoom-in duration-200"
    >
      hola
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, watch, computed } from "vue"
const props = defineProps<{
  isModalOffer: boolean
  offerToEdit?: any
}>()

const emit = defineEmits(["close-modal-offer"])

// FORM STATE
const precio = ref("");
const precioOferta = ref("");
const inicioOferta= ref("");
const finOferta = ref("");

const close = ()=>{
    emit("close-modal-offer")
}
</script>
