<template>
  <div v-if="isModalOffer" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="close" />
    <div
      class="relative w-full max-w-2xl mx-4 bg-surface rounded-2xl border border-outline-variant/50 shadow-2xl animate-in fade-in zoom-in duration-200"
    >
      <div class="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
        <div>
          <h2 class="text-xl font-semibold text-on-surface">Crear Oferta</h2>

          <p class="text-sm text-on-surface-variant mt-1">Completa la información del producto</p>
        </div>

        <button
          @click="close"
          class="p-2 rounded-full hover:bg-surface-container transition-colors"
        >
          <i class="ti ti-x text-xl text-on-surface-variant" />
        </button>
      </div>

      <form class="p-6 space-y-5" @submit.prevent="submitOffer">
        <div>
          <label class="text-sm text-on-surface-variant"> Descuento (%) </label>

          <input
            v-model="descuento"
            type="number"
            min="0"
            max="100"
            step="0.01"
            class="input"
            placeholder="Ej: 20"
          />
        </div>

        <div>
          <label class="text-sm text-on-surface-variant">Inicio de la oferta</label>
          <input v-model="inicioOferta" type="date" class="input" />
        </div>

        <div>
          <label class="text-sm text-on-surface-variant">Fin de la oferta</label>
          <input v-model="finOferta" type="date" class="input" />
        </div>

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
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOfferStore } from "@/stores/OfferStore";
import type { Product } from "@/types";
import { ref, watch, computed } from "vue";

const props = defineProps<{
  isModalOffer: boolean;
  offerToEdit?: any;
  selectedProduct: Product | null;
}>();

const emit = defineEmits(["close-modal-offer"]);
const offerStore = useOfferStore();

const submitOffer = async () => {
  if (!props.selectedProduct) return;

  const payload = {
    inicio: inicioOferta.value,
    fin: finOferta.value,
    descuento: Number(descuento.value),
  };

  await offerStore.createOfferForProduct(props.selectedProduct.id, payload);

  close();
};

// FORM STATE
const descuento = ref("");
const inicioOferta = ref("");
const finOferta = ref("");

const close = () => {
  emit("close-modal-offer");
};
</script>

<style scoped>
.input {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;

  background: var(--color-surface-container-lowest);
  color: var(--color-on-surface);

  border: 1px solid var(--color-outline-variant);
  border-radius: 0.75rem;

  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s,
    box-shadow 0.2s;
}

.input::placeholder {
  color: var(--color-on-surface-variant);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent);
}

.input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

select.input {
  cursor: pointer;
}

input[type="file"] {
  color: var(--color-on-surface-variant);
}

input[type="file"]::file-selector-button {
  margin-right: 0.75rem;
  padding: 0.55rem 1rem;

  border: none;
  border-radius: 0.6rem;

  background: var(--color-primary);
  color: var(--color-on-primary);

  cursor: pointer;
  transition: opacity 0.2s;
}

input[type="file"]::file-selector-button:hover {
  opacity: 0.9;
}
</style>
