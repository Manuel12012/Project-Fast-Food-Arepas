<template>
    <Filters
      :categoriaSeleccionada="categoriaSeleccionada"
      @change-category="categoriaSeleccionada = $event"
    />
  
    <Grid
      :categoria="categoriaSeleccionada"
    />
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Filters from "@/components/Filters.vue";
  import Grid from "@/components/Grid.vue";
  
  const categoriaSeleccionada = ref("arepas");
  </script>