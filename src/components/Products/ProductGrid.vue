<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <article
      v-for="item in productosFiltrados"
      :key="item.id"
      @click="irAlProducto(item.id)"
      class="group cursor-pointer rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <!-- IMAGE -->

      <div class="h-64 bg-surface-container overflow-hidden">
        <img
          :src="item.image"
          :alt="item.nombre"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <!-- CONTENT -->

      <div class="p-5 flex flex-col gap-3">
        <!-- TITLE -->

        <div class="flex justify-between items-start gap-3">
          <h3 class="font-bold text-lg text-on-surface">
            {{ item.nombre }}
          </h3>

          <span class="font-bold text-primary whitespace-nowrap"> {{ item.precio }}€ </span>
        </div>

        <!-- DESCRIPTION -->

        <p v-if="item.descripcion" class="text-sm text-on-surface-variant line-clamp-2">
          {{ item.descripcion }}
        </p>

        <!-- COMBO -->

        <div v-if="item.combo" class="flex justify-between items-center mt-auto text-sm">
          <span class="text-on-surface-variant"> Combo {{ item.unidadCombo }} </span>

          <span class="font-semibold text-primary"> {{ item.combo }}€ </span>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/productStore";

const store = useProductStore();

onMounted(async () => {
  await store.fetchProducts();
});

const router = useRouter();

const props = defineProps<{
  categoria: number;
}>();

const productosFiltrados = computed(() => {
  if (!props.categoria) {
    return store.products;
  }

  return store.products.filter((item) => item.category_id === props.categoria);
});

const irAlProducto = (id: number) => {
  router.push(`/product/${id}`);
};
</script>
