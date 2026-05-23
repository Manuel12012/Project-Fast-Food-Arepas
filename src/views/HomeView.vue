<script setup lang="ts">
import Categories from "@/components/Categories.vue";
import DeliverySpeedBaner from "@/components/DeliverySpeedBaner.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import MostPopular from "@/components/MostPopular.vue";
import NavBar from "@/components/NavBar.vue";
import NewsLetter from "@/components/NewsLetter.vue";
</script>

<template>
    <div>
        <NavBar />
        <Hero />
        <DeliverySpeedBaner />
        <Categories />
        <MostPopular />
        <NewsLetter />
        <Footer />
    </div>
</template>
