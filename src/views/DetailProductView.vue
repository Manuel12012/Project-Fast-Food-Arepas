<script setup lang="ts">
import { useRoute } from 'vue-router';

import Main from '@/components/DetailProduct/Main.vue';
import Reccomendation from '@/components/DetailProduct/Reccomendation.vue';
import Footer from '@/components/MainView/Footer.vue';
import NavBar from '@/components/MainView/NavBar.vue';

const route = useRoute();

const id = route.params.id;

console.log(id);
</script>

<template>
    <div>
        <NavBar />
        <Main />
        <Reccomendation />
        <Footer />
    </div>
</template>