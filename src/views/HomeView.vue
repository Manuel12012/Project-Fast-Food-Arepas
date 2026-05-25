<script setup lang="ts">
import Categories from "@/components/MainView/Categories.vue";
import DeliverySpeedBaner from "@/components/MainView/DeliverySpeedBaner.vue";
import Footer from "@/components/MainView/Footer.vue";
import Hero from "@/components/MainView/Hero.vue";
import MostPopular from "@/components/MainView/MostPopular.vue";
import NavBar from "@/components/MainView/NavBar.vue";
import NewsLetter from "@/components/MainView/NewsLetter.vue";
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
