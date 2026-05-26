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
          src="../../assets/icons/LogoMain.png"
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
          <svg
            width="16px"
            height="32px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>ionicons-v5-f</title>
              <path
                d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                style="fill: none; stroke: #000000; stroke-miterlimit: 10; stroke-width: 32px"
              ></path>
              <line
                x1="338.29"
                y1="338.29"
                x2="448"
                y2="448"
                style="
                  fill: none;
                  stroke: #000000;
                  stroke-linecap: round;
                  stroke-miterlimit: 10;
                  stroke-width: 32px;
                "
              ></line>
            </g>
          </svg>
          <input
            class="appearance-none bg-transparent border-none outline-none focus:ring-0 ml-2 text-(length:--text-body-md) placeholder:text-primary"
            placeholder="Buscar..."
            type="text"
          />
        </div>
        <button
          class="relative p-2 text-on-surface active:scale-95 transition-transform duration-100"
        >
<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>          <span
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
      {
        name: "La Dominó",
        image: "/images/pelua.jpg",
        desc: "Haricots noirs et + fromage blanc râpé",
        price: "36€",
      },
      {
        name: "La Viuda",
        image: "/images/pelua.jpg",
        desc: "Fromage blanc, fromage jaune ou beurre",
        price: "30€",
      },
      {
        name: "La Pernil",
        image: "/images/pelua.jpg",
        desc: "Porc rôti au vin",
        price: "48€",
      },
      {
        name: "La Catira",
        image: "/images/pelua.jpg",
        desc: "Viande + fromage",
        price: "10€",
      },
      {
        name: "Lomo negro",
        image: "/images/pelua.jpg",
        desc: "Viande + fromage",
        price: "10€",
      },
      {
        name: "Pabellón Criollo",
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
