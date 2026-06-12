<script setup lang="ts">
const emit = defineEmits(["close"])
</script>

<template>
  <div
    class="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center"
  >
    <div class="bg-white rounded-2xl p-8 shadow-xl text-center w-[500px]">

      <div
        class="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center"
      >
        <span class="text-4xl text-green-600">✓</span>
      </div>

      <h3 class="mt-4 text-2xl font-bold text-gray-800">
        ¡Orden registrada!
      </h3>

      <p class="text-gray-500 mt-3">
        Hemos recibido tu pedido correctamente.
      </p>

      <p class="text-gray-500 mt-1">
        En breve nos comunicaremos contigo para confirmar los detalles.
      </p>

    </div>
  </div>
</template>