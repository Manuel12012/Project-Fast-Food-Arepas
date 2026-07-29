<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20"
  >
    <div
      class="max-w-7xl mx-auto flex items-center justify-between px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-3"
    >
      <!-- LOGO -->
      <a href="/" class="flex items-center gap-2 shrink-0">
        <img src="../../assets/icons/LogoMain.png" alt="Q'Bocao" class="h-10 md:h-12 w-auto" />
      </a>

      <!-- DESKTOP NAV -->
      <div class="hidden md:flex items-center gap-8">
        <a href="/menu" class="text-on-surface hover:text-primary transition-colors font-medium">
          Notre Carte
        </a>

        <a href="/ofertas" class="text-on-surface hover:text-primary transition-colors font-medium">
          Ofertas
        </a>

        <!-- <a href="/products" class="text-on-surface hover:text-primary transition-colors font-medium">
          Seguimiento del pedido
        </a> -->
      </div>

      <!-- ACTIONS -->
      <div class="flex items-center gap-3">
        <!-- SEARCH (desktop) -->
        <div ref="searchContainer" class="relative hidden lg:flex">
          <div class="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full">
            <!-- lupa -->
            <svg
              class="w-5 h-5 text-on-surface-variant"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" stroke-width="2" />
              <path d="M20 20l-3.5-3.5" stroke-width="2" />
            </svg>
            <input
              v-model="search"
              type="text"
              placeholder="Buscar productos..."
              class="bg-transparent outline-none text-sm placeholder:text-on-surface-variant w-56 focus:w-72 transition-all duration-300"
            />
          </div>

          <!-- Aquí irá el dropdown -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="search && filteredProducts.length"
              class="absolute top-14 left-0 w-[420px] rounded-2xl bg-surface border border-outline-variant/30 shadow-2xl backdrop-blur-xl overflow-hidden z-50"
            >
              <div
                class="px-4 py-2 text-xs uppercase tracking-wider bg-surface-container flex justify-between"
              >
                <span> Resultados </span>

                <span>
                  {{ filteredProducts.length }}
                </span>
              </div>
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                @click="goToProduct(product.id)"
                class="group flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-surface-container hover:scale-[1.01] active:scale-[0.99]"
              >
                <img
                  :src="`http://127.0.0.1:8000/storage/${product.image}`"
                  class="w-14 h-14 rounded-xl object-cover border border-outline-variant/20 flex-shrink-0"
                />

                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-on-surface truncate">
                    {{ product.nombre }}
                  </h4>

                  <p class="text-sm text-on-surface-variant truncate">
                    {{ product.descripcion }}
                  </p>
                </div>

                <span class="text-primary font-bold text-base"> S/. {{ product.precio }} </span>
                <svg
                  class="w-5 h-5 opacity-0 group-hover:opacity-100 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Transition>

          <div
            v-if="search && !filteredProducts.length"
            class="absolute top-14 left-0 w-80 bg-white rounded-xl shadow-xl p-4 text-center text-gray-500 z-50"
          >
            No se encontraron productos.
          </div>
        </div>

        <!-- CART -->
        <RouterLink
          to="/cart"
          class="relative p-2 rounded-full hover:bg-surface-container transition"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 6h15l-1 7H7z" />
            <path d="M6 6L5 3H2" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          <span
            v-if="totalItems > 0"
            class="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold"
          >
            {{ totalItems }}
          </span>
        </RouterLink>

        <RouterLink
          to="/admin/login"
          class="text-on-surface hover:text-primary transition-colors font-medium"
        >
          Admin
        </RouterLink>

        <!-- MOBILE MENU BUTTON -->
        <button
          @click="showMobileMenu = !showMobileMenu"
          class="md:hidden p-2 rounded-full hover:bg-surface-container transition"
        >
          <svg
            v-if="!showMobileMenu"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>

          <svg
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <Transition name="fade">
      <div
        v-if="showMobileMenu"
        class="md:hidden absolute inset-x-0 top-full bg-surface border-t border-outline-variant shadow-lg"
      >
        <div class="px-6 py-6 flex flex-col gap-4">
          <a
            href="#carte"
            class="font-medium text-on-surface hover:text-primary"
            @click="showMobileMenu = false"
          >
            Notre Carte
          </a>

          <a
            href="#ofertas"
            class="font-medium text-on-surface hover:text-primary"
            @click="showMobileMenu = false"
          >
            Ofertas
          </a>

          <a
            href="/products"
            class="font-medium text-on-surface hover:text-primary"
            @click="showMobileMenu = false"
          >
            Seguimiento del pedido
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useCartStore } from "@/stores/carthStore";
import { useProductStore } from "@/stores/productStore";
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const showMobileMenu = ref(false);
const searchContainer = ref<HTMLElement | null>(null);
const search = ref("");
const cartStore = useCartStore();
const router = useRouter();

const totalItems = computed(() => {
  return cartStore.cart.reduce((acc, item) => acc + item.cantidad, 0);
});

const filteredProducts = computed(() => {
  if (!search.value.trim()) return [];

  return productStore.products
    .filter((product) => product.nombre.toLowerCase().includes(search.value.toLowerCase()))
    .slice(0, 5);
});

const goToProduct = async (id: number) => {
  search.value = "";
  (document.activeElement as HTMLElement)?.blur();

  await router.push({
    name: "product",
    params: { id },
  });
};

const handleClickOutside = (event: MouseEvent) => {
  if (!searchContainer.value) return;

  const target = event.target as Node;

  if (!searchContainer.value.contains(target)) {
    search.value = "";
  }
};
watch(
  () => productStore.products,
  (products) => {
    console.log("Productos:", products);
  },
  { immediate: true },
);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
