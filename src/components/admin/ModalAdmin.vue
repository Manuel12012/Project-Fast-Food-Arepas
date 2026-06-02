<template>
    <div v-if="isModalOpen" class="fixed inset-0 z-60 flex items-center justify-center">
        <div class="absolute inset-0 bg-on-surface/40 backdrop-blur-sm" @click="$emit('close-modal')"></div>
        <div class="
relative
bg-surface
p-8
rounded-2xl
shadow-xl
w-[700px]
max-w-[95vw]
border border-outline-variant/50
animate-in fade-in zoom-in duration-300
">
            <div class="flex justify-between items-center mb-md">
                <h2 class="font-headline-lg text-headline-lg text-on-surface">Nuevo Producto</h2>
                <button
                    class="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-all"
                    @click="$emit('close-modal')">close</button>
            </div>
            <form class="space-y-md">
                <div>
                    <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs">Nombre del
                        Producto</label>
                    <input
                        class="w-full bg-surface-container-low border border-outline rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md"
                        placeholder="Ej: Empanada de Pollo" type="text" />
                </div>
                <div class="grid grid-cols-2 gap-md">
                    <div>
                        <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs">Categoría</label>
                        <select
                            class="w-full bg-surface-container-low border border-outline rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md">
                            <option>Platos Fuertes</option>
                            <option>Entradas</option>
                            <option>Bebidas</option>
                            <option>Postres</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs">Precio
                            ($)</label>
                        <input
                            class="w-full bg-surface-container-low border border-outline rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md"
                            placeholder="0.00" step="0.01" type="number" />
                    </div>
                </div>
                <div>
                    <label class="block font-label-lg text-label-lg text-on-surface-variant mb-xs">Imagen del
                        Producto</label>
                    <div
                        class="border-2 border-dashed border-outline rounded-xl p-xl text-center hover:border-primary transition-colors cursor-pointer group">
                        <span
                            class="material-symbols-outlined text-[48px] text-outline group-hover:text-primary transition-colors mb-base">add_photo_alternate</span>
                        <p class="font-label-lg text-label-lg text-on-surface-variant">Sube una imagen o arrástrala aquí
                        </p>
                        <p class="font-label-sm text-label-sm text-outline-variant mt-xs">PNG, JPG hasta 5MB</p>
                    </div>
                </div>
                <div class="pt-md flex gap-md">
                    <button
                        class="flex-1 px-md py-sm border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-variant transition-all"
                        @click="$emit('close-modal')" type="button">Cancelar</button>
                    <button
                        class="flex-1 px-md py-sm bg-primary-container text-white font-bold rounded-lg hover:bg-primary shadow-md hover:shadow-primary-container/40 transition-all"
                        type="submit">Guardar Producto</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

defineProps({

    isModalOpen: Boolean

})

defineEmits(['close-modal'])

</script>