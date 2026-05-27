<script setup lang="ts">
import NavBar from "@/components/MainView/NavBar.vue";
import Hero from "@/components/MainView/Hero.vue";
import DeliverySpeedBaner from "@/components/MainView/DeliverySpeedBaner.vue";
import Categories from "@/components/MainView/Categories.vue";
import MostPopular from "@/components/MainView/MostPopular.vue";
import NewsLetter from "@/components/MainView/NewsLetter.vue";
import Footer from "@/components/MainView/Footer.vue";
</script>

<template>

  <div
    class="
      min-h-screen
      bg-background
      text-on-surface
      overflow-x-hidden
    "
  >

    <!-- HEADER -->

    <header>

      <NavBar />

    </header>

    <!-- MAIN CONTENT -->

    <main>

      <Hero />

      <section class="space-y-12 md:space-y-20">

        <DeliverySpeedBaner />

        <Categories />

        <MostPopular />

        <NewsLetter />

      </section>

    </main>

    <!-- FOOTER -->

    <footer>

      <Footer />

    </footer>

  </div>

</template>