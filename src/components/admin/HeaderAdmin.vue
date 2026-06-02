<template>
    <div class="flex justify-between items-end mb-xl">
        <div>
            <h1 class="font-display-lg text-display-lg text-on-surface tracking-tight mb-xs">Inventory Control</h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant">Manage your authentic Latino flavors and stock
                levels.</p>
        </div>
        <div class="flex gap-md">
            <button
                class="bg-surface-container-highest px-md py-sm rounded-lg flex items-center gap-xs font-label-lg text-label-lg text-on-surface hover:shadow-sm transition-all border border-outline-variant">
                <span class="material-symbols-outlined">filter_list</span>
                Filtros
            </button>
            <button
                class="bg-primary-container text-white px-xl py-sm rounded-lg flex items-center gap-xs font-headline-md text-headline-md shadow-lg hover:shadow-primary-container/40 transition-all hover:-translate-y-0.5 active:scale-95"
                @click="$emit('open-modal')"> <span class="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;">add_circle</span>
                Nuevo Producto
            </button>
        </div>
    </div>
</template>

<script setup>

defineEmits(['open-modal'])

</script>