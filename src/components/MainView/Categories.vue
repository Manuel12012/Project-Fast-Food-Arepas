<template>
  <section class="py-xl px-margin-mobile md:px-margin-desktop max-w-full mx-auto bg-[#F9F9F9]">
    <div class="flex items-end justify-between mb-lg">
      <div>
        <h2 class="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
          Buscar por categoria
        </h2>
        <p class="text-on-surface-variant font-body-md">
          Explore our curated selection of high-speed Latino treats.
        </p>
      </div>
      <button
        class="hidden md:flex items-center gap-2 cursor-pointer text-primary font-bold hover:underline"
      >
        Ver todas
        <span class="material-symbols-outlined"
          ><svg
            width="16px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                fill="#000000"
              ></path>
            </g></svg
        ></span>
      </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-md">
      <div
        v-for="categoria in categorias.slice(0, 4)"
        :key="categoria.id"
        class="group cursor-pointer"
      >
        <div
          class="relative overflow-hidden aspect-square rounded-xl bg-surface-container-low flex items-center justify-center transition-all duration-300 group-hover:bg-primary-fixed"
        >
          <img
            :src="getImage(categoria.nombre)"
            :alt="categoria.nombre"
            class="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <p class="mt-sm font-headline-sm text-center">
          {{ categoria.nombre }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import categorias from "@/data/Categories.js";

const images = import.meta.glob("../../assets/categories/*", {
  eager: true,
  import: "default",
});

const getImage = (nombre) => {
  const ruta = Object.keys(images).find((path) => path.includes(`/categories/${nombre}.`));

  return ruta ? images[ruta] : "";
};
</script>
