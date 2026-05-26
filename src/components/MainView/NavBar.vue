<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dim transition-colors duration-200"
  >
    <div
      class="flex justify-between items-center w-full px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-(--spacing-base) max-w-7xl mx-auto"
    >
      <a class="flex items-center gap-2" href="/">
        <img
          alt="Q'Bocao Logo"
          class="h-10 md:h-14 w-auto object-contain aspect-video"
          loading="lazy"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-dzToZgSfwVHe8xvINgXj5N-TyV6Dbn2JwBnl6bOBUDcSAh_S6Tb8VGvRdCRQk79W6E6Na3vOcKx2wC76sOzeh4M8OevFtERBfYKaGOiXvcgUm_P_LibyJHFFXQy5W046gunVO9fyDB1kgRABYVJioooASQXiV06aDIxA-yol1d4UpKwfLjdvJ-hIuzkObk4AA6M7-AOuHrqg6YsBZKqgEPpqx28OGwYr1QWPXerxm61ok9Ycjohn6NLve4fmKW_ToFoJklLXwJk"
        />
      </a>
      <div class="hidden md:flex items-center gap-(--spacing-lg)">
        <div class="relative" @mouseenter="showMegaMenu = true">
          <button class="text-primary font-bold border-b-2 border-primary py-1">Notre Carte</button>
          <Transition name="fade">
            <div
              @mouseleave="showMegaMenu = false"
              v-if="showMegaMenu"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-237.5 bg-white/85 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,.18)] border border-white/20 overflow-hidden"
            >
              <div class="grid grid-cols-12">
                <!-- LEFT SIDE -->

                <div class="col-span-3 bg-zinc-50 dark:bg-zinc-800 p-6">
                  <h3 class="font-bold mb-5">Categories</h3>

                  <button
                    v-for="category in categories"
                    :key="category.name"
                    @mouseenter="activeCategory = category"
                    class="w-full text-left p-3 rounded-xl mb-2 transition"
                    :class="[
                      activeCategory.name === category.name
                        ? 'bg-primary text-white shadow-lg'
                        : 'hover:bg-primary/10',
                    ]"
                  >
                    {{ category.name }}
                  </button>
                </div>

                <!-- RIGHT SIDE -->

                <div class="col-span-9 p-8">
                  <h2 class="text-2xl font-bold mb-6">
                    {{ activeCategory.name }}
                  </h2>

                  <div class="grid grid-cols-2 gap-5">
                    <div
                      v-for="product in activeCategory.products"
                      :key="product.name"
                      class="group bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <img
                        :src="product.image"
                        loading="lazy"
                        class="h-36 w-full object-cover aspect-video group-hover:scale-105 transition duration-500"
                      />

                      <div class="p-4">
                        <h4 class="font-bold">
                          {{ product.name }}
                        </h4>

                        <p class="text-sm text-gray-500 mt-2">
                          {{ product.desc }}
                        </p>

                        <div class="mt-4 font-bold text-primary">
                          {{ product.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <a
          class="text-on-surface dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 [font-family:var(--font-body-md)]"
          href="#"
          >Ofertas</a
        >
        <a
          class="text-on-surface dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 [font-family:var(--font-body-md)]"
          href="/products"
          >Seguimiento del pedido</a
        >
      </div>
      <div class="flex items-center gap-(--spacing-md)">
        <div class="hidden lg:flex items-center bg-surface-container rounded-full px-md py-xs">
          <span class="material-symbols-outlined text-outline">search</span>
          <input
            class="appearance-none bg-transparent border-none outline-none focus:ring-0 ml-2 text-(length:--text-body-md) placeholder:text-primary"
            placeholder="Search flavors..."
            type="text"
          />
        </div>
        <button
          class="relative p-2 text-on-surface active:scale-95 transition-transform duration-100"
        >
          <span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          <span
            class="absolute top-0 right-0 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
            >3</span
          >
        </button>
        <button class="md:hidden p-2">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showMegaMenu = ref(false);

const categories = ref([
  {
    name: "Arepas",
    products: [
      {
        name: "Reina Pepiada",
        image: "/images/reina.jpg",
        desc: "Poulet + avocat + coriandre",
        price: "10€",
      },
      {
        name: "La Pelúa",
        image: "/images/pelua.jpg",
        desc: "Viande + fromage",
        price: "10€",
      },
    ],
  },
  {
    name: "Empanadas",
    products: [],
  },
]);

const activeCategory = ref(categories.value[0]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
