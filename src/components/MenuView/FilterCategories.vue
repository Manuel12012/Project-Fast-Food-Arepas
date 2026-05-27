<template>

  <section class="pt-24 pb-8">

    <div
      class="
        flex
        overflow-x-auto
        gap-3
        pb-2
        hide-scrollbar
        md:flex-wrap
        md:justify-center
      "
    >

      <button
        v-for="categoria in categorias"
        :key="categoria.id"

        @click="$emit('change-category', categoria.id)"

        class="
          shrink-0
          px-5
          py-3
          rounded-xl
          cursor-pointer
          transition-all
          duration-300
          font-medium
          whitespace-nowrap
        "

        :class="[
          categoriaSeleccionada === categoria.id
            ? 'bg-[#EE6C4B] text-white shadow-md'
            : 'bg-surface-container-low hover:bg-[#EE6C4B] hover:text-white'
        ]"
      >

        {{ convertirAOracion(categoria.nombre) }}

      </button>

    </div>

  </section>

</template>

<script setup>
import categorias from "@/data/Categories.js";
import { convertirAOracion } from "@/helpers/text.js";

defineProps({
  categoriaSeleccionada: String
});

defineEmits(["change-category"]);
</script>