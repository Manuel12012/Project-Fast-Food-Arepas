<script setup lang="ts">
import { useRoute } from 'vue-router';

import Main from '@/components/DetailProduct/Main.vue';
import Reccomendation from '@/components/DetailProduct/Reccomendation.vue';
import Footer from '@/components/core/Footer.vue';
import NavBar from '@/components/core/NavBar.vue';

// funcion ruta
const route = useRoute();

// captura de id que viene del url
const id = route.params.id;

console.log(id);
</script>

<template>
    <div>
        <NavBar />
        <Main />
        <!-- <Reccomendation /> -->
        <Footer />
    </div>
</template>
