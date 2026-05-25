<script setup lang="ts">
import Footer from "@/components/MainView/Footer.vue";
import NavBar from "@/components/MainView/NavBar.vue";
import FilterCategories from "@/components/MenuView/FilterCategories.vue";
import ProductGrid from "@/components/MenuView/ProductGrid.vue";
</script>

<template>                                                                  
    <div>
        <NavBar />
        <FilterCategories/>
        <ProductGrid/>
        <Footer />
    </div>
</template>
