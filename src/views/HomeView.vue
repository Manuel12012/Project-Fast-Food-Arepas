<script setup lang="ts">
import NavBar from "@/components/core/NavBar.vue";
import Hero from "@/components/Main/Hero.vue";
import DeliverySpeedBaner from "@/components/Main/DeliverySpeedBaner.vue";
import Categories from "@/components/Main/Categories.vue";
import MostPopular from "@/components/Main/MostPopular.vue";
import NewsLetter from "@/components/Main/NewsLetter.vue";
import Footer from "@/components/core/Footer.vue";
</script>

<template>

  <div class="
      min-h-screen
      bg-background
      text-on-surface
      overflow-x-hidden
    ">

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