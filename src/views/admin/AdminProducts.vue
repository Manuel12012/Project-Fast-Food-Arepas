<script setup>

import { ref } from 'vue'

import AsideAdmin from '@/components/admin/AsideAdmin.vue'
import DashboardAdmin from '@/components/admin/DashboardAdmin.vue'
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import ModalAdmin from '@/components/admin/ModalAdmin.vue'
import NavBarAdmin from '@/components/admin/NavBarAdmin.vue'
import TableAdmin from '@/components/admin/TableAdmin.vue'

const isModalOpen = ref(false)

</script>

<template>

<NavBarAdmin />

<div class="flex pt-16 min-h-screen">

    <AsideAdmin />

    <main class="ml-64 flex-1 p-margin-desktop">

        <HeaderAdmin
            @open-modal="isModalOpen = true"
        />

        <DashboardAdmin />

        <TableAdmin />

        <ModalAdmin
            :isModalOpen="isModalOpen"
            @close-modal="isModalOpen = false"
        />

    </main>

</div>

</template>