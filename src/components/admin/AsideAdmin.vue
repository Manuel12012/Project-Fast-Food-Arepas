<template>
    <aside
        class="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-surface dark:bg-surface-dim flex flex-col gap-base p-base border-r border-outline-variant shadow-sm z-40">
        <div class="py-md px-md">
            <div class="flex items-center gap-xs">
                <span class="font-headline-lg text-headline-lg font-black text-primary">Q'Bocao</span>
            </div>
            <p class="font-label-lg text-label-lg text-on-surface-variant/70">Management Portal</p>
        </div>
        <nav class="flex-1 space-y-xs">
            <!-- Products Tab (Active) -->
            <a class="flex items-center gap-base px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-bold transition-all cursor-pointer active:scale-95"
                href="#">
                <span class="material-symbols-outlined">inventory_2</span>
                <span class="font-label-lg text-label-lg">Products</span>
            </a>
            <a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all cursor-pointer active:scale-95"
                href="#">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span class="font-label-lg text-label-lg">Orders</span>
            </a>
            <a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all cursor-pointer active:scale-95"
                href="#">
                <span class="material-symbols-outlined">group</span>
                <span class="font-label-lg text-label-lg">Customers</span>
            </a>
            <a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all cursor-pointer active:scale-95"
                href="#">
                <span class="material-symbols-outlined">settings</span>
                <span class="font-label-lg text-label-lg">Settings</span>
            </a>
        </nav>
        <div class="pt-md border-t border-outline-variant flex-col">
            <button
            class="bg-primary-container text-white px-xl py-sm rounded-lg flex items-center gap-xs shadow-lg hover:shadow-primary-container/40 transition-all hover:-translate-y-0.5 active:scale-95"            @click="handleLogout">
                Cerrar Sesion
            </button>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const handleLogout = async () => {
    await auth.logout()
    router.push('/admin/login')
}

</script>