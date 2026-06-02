<template>
    <div class="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-surface-container border-b border-outline-variant">
                        <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant">Image</th>
                        <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant">Name</th>
                        <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant">Category</th>
                        <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant">Price</th>
                        <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant">Stock Status</th>
                        <th class="px-md py-md font-label-lg text-label-lg text-on-surface-variant text-right">Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-outline-variant/50">
                    <!-- Product Row 1 -->
                    <tr class="hover:bg-surface-container-low/50 transition-colors">
                        <td class="px-md py-md">
                            <div class="h-16 w-16 rounded-xl overflow-hidden shadow-sm">
                                <img class="w-full h-full object-cover"
                                    data-alt="A macro food photography shot of a traditional Venezuelan Arepa, golden-brown and steaming, filled with succulent shredded beef and vibrant yellow cheese. The lighting is warm and directional, highlighting the crispy texture of the corn meal. The background is a clean, modern kitchen surface in soft white tones, consistent with the Q'Bocao fresh Latino brand aesthetic."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn0zh7e_nWA4BqJfljXU3M1hDbyzSh-6wgpMXqgDbmC_v9FC6DQJe7xM3bMC9HBx848I45XkUGnQCxsUKVVrv3D-K-DvEoJrXBCzeoje2a56fWyJPQhMZstaR341F6idp6nXmvt8DwCi6byy2Aj_3Iev7DSHXrsnPxd0gXYsUqm26Bp8M67SArZtG0MxBBa8Na5L0odn-RdsMlwH1lg8GE8dWrq_BU3p9bF51SdJtNINlY2eb8hL9ljcrqYWtS77G2fFaGMGbcWbE" />
                            </div>
                        </td>
                        <td class="px-md py-md">
                            <p class="font-headline-md text-[18px] text-on-surface">Arepa Pabellón</p>
                            <p class="font-label-sm text-label-sm text-on-surface-variant">ID: QB-0012</p>
                        </td>
                        <td class="px-md py-md">
                            <span
                                class="bg-secondary-container text-on-secondary-container px-base py-xs rounded-full font-label-sm text-label-sm">Platos
                                Fuertes</span>
                        </td>
                        <td class="px-md py-md">
                            <p class="font-label-lg text-label-lg text-on-surface font-bold">$11.99</p>
                        </td>
                        <td class="px-md py-md">
                            <div class="flex items-center gap-xs">
                                <div class="h-2 w-2 rounded-full bg-green-500"></div>
                                <p class="font-body-md text-body-md text-on-surface-variant">45 in stock</p>
                            </div>
                        </td>
                        <td class="px-md py-md text-right">
                            <div class="flex justify-end gap-base">
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors">
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-lg text-error hover:bg-error/10 transition-colors">
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <!-- Product Row 2 -->
                    <tr class="hover:bg-surface-container-low/50 transition-colors">
                        <td class="px-md py-md">
                            <div class="h-16 w-16 rounded-xl overflow-hidden shadow-sm">
                                <img class="w-full h-full object-cover"
                                    data-alt="Close-up of golden Tequeños, Venezuelan cheese sticks, stacked on a minimalist white ceramic plate. The pastry is perfectly flaky and golden. One tequeño is slightly broken, revealing melting white cheese inside. Soft daylight fills the scene, creating a clean and appetizing high-contrast look that emphasizes food quality and freshness."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD55P7K355Ljj9Jo0TzFoF1s3kOOffvHyuuV5SsxaVFrO3lbag7MRkOHdhuCh5ys1o2GcKOswAyTm-8x9NjCZ6nv45zt-i-F9Zpwj1431zoJMQ3T_9rjdllZfDPrLBvnslQBsrVaPuOLhJQ-D-XKJli83EIv8gmXr1dJbXXrKYzC5_6a6ch6N_o_YGmUeTp7RhoF7ldHzPsmdQteWevXvDYwpC6OIpZgiXM6zCOoad3YNJQmb3-l2tPYuRyFfLh5UZvB9dLBe04xzc" />
                            </div>
                        </td>
                        <td class="px-md py-md">
                            <p class="font-headline-md text-[18px] text-on-surface">Tequeños (6 units)</p>
                            <p class="font-label-sm text-label-sm text-on-surface-variant">ID: QB-0045</p>
                        </td>
                        <td class="px-md py-md">
                            <span
                                class="bg-secondary-container text-on-secondary-container px-base py-xs rounded-full font-label-sm text-label-sm">Entradas</span>
                        </td>
                        <td class="px-md py-md">
                            <p class="font-label-lg text-label-lg text-on-surface font-bold">$8.50</p>
                        </td>
                        <td class="px-md py-md">
                            <div class="flex items-center gap-xs">
                                <div class="h-2 w-2 rounded-full bg-orange-500"></div>
                                <p class="font-body-md text-body-md text-on-surface-variant">12 in stock</p>
                            </div>
                        </td>
                        <td class="px-md py-md text-right">
                            <div class="flex justify-end gap-base">
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors">
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-lg text-error hover:bg-error/10 transition-colors">
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <!-- Product Row 3 -->
                    <tr class="hover:bg-surface-container-low/50 transition-colors">
                        <td class="px-md py-md">
                            <div class="h-16 w-16 rounded-xl overflow-hidden shadow-sm">
                                <img class="w-full h-full object-cover"
                                    data-alt="A glass of icy cold Papelón con Limón, a traditional Latin American sugar cane and lime drink. The glass has condensation droplets, and a fresh lime slice garnishes the rim. The lighting is bright and high-key, highlighting the refreshing nature of the beverage against a clean, white-marbled tabletop in a modern dining setting."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxRSpYYOQ8xyL3KGA9CYJkpRM1wptLKzDSEdk7gk67Qu128anJzj8imcJBw_f5GpmbKj7o-YquGIVyfcy8WH7n2nkDb1urUQ769A595JR94MO0AtJqZYS1Gd3e8R4vN-OvMk4ma9afELmg9tWLUblPlIzIxK6bH7X0y6sdbSXIFQSXCoM7TxOvJ_nArvQeWP0cyiAHarkXydJhH6rMBjpqA6Abzf49DFjq4ptHjJefWjndIfgfInGLa6TzQIqlxCOOHPS1TFfew08" />
                            </div>
                        </td>
                        <td class="px-md py-md">
                            <p class="font-headline-md text-[18px] text-on-surface">Papelón con Limón</p>
                            <p class="font-label-sm text-label-sm text-on-surface-variant">ID: QB-0089</p>
                        </td>
                        <td class="px-md py-md">
                            <span
                                class="bg-secondary-container text-on-secondary-container px-base py-xs rounded-full font-label-sm text-label-sm">Bebidas</span>
                        </td>
                        <td class="px-md py-md">
                            <p class="font-label-lg text-label-lg text-on-surface font-bold">$3.50</p>
                        </td>
                        <td class="px-md py-md">
                            <div class="flex items-center gap-xs">
                                <div class="h-2 w-2 rounded-full bg-green-500"></div>
                                <p class="font-body-md text-body-md text-on-surface-variant">150 in stock</p>
                            </div>
                        </td>
                        <td class="px-md py-md text-right">
                            <div class="flex justify-end gap-base">
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-lg text-secondary hover:bg-secondary/10 transition-colors">
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button
                                    class="h-10 w-10 flex items-center justify-center rounded-lg text-error hover:bg-error/10 transition-colors">
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="p-md bg-surface-container flex justify-between items-center border-t border-outline-variant">
            <p class="font-label-lg text-label-lg text-on-surface-variant">Mostrando 1-3 de 124 productos</p>
            <div class="flex gap-xs">
                <button class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors disabled:opacity-50"
                    disabled="">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <button class="px-base py-xs rounded-lg bg-primary text-white font-bold">1</button>
                <button class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors">2</button>
                <button class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors">3</button>
                <button class="px-base py-xs rounded-lg hover:bg-surface-variant transition-colors">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({

    showModal:Boolean

})

defineEmits(['close-modal'])

</script>