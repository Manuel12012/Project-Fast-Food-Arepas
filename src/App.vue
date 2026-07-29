<script setup lang="ts">
import { onMounted } from "vue"
import { useProductStore } from "@/stores/productStore"

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <RouterView />
</template>