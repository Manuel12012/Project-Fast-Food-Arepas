<template>
  <section class="bg-[#F9F9F9] py-12">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- HEADER -->

      <div
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
      >

        <div>

          <h2
            class="text-2xl md:text-4xl font-semibold text-on-surface mb-2"
          >
            Buscar por categoría
          </h2>

        </div>

        <a
          href="/menu"
          class="
            flex items-center gap-2
            text-primary font-semibold
            hover:underline
            transition-all
            w-fit
          "
        >
          Ver todos

          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14"/>
            <path d="M13 5l7 7-7 7"/>
          </svg>

        </a>

      </div>

      <!-- GRID -->

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

        <div
          v-for="categoria in categorias.slice(0,4)"
          :key="categoria.id"
          class="group cursor-pointer"
        >

          <div
            class="
              aspect-square
              rounded-2xl
              overflow-hidden
              bg-white
              shadow-sm
              border border-gray-100
              flex items-center justify-center
              transition-all duration-300
              group-hover:shadow-xl
              group-hover:-translate-y-1
            "
          >

            <img
              :src="getImage(categoria.id)"
              :alt="categoria.nombre"
              class="
                w-full
                h-full
                object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />

          </div>

          <p
            class="
              mt-4
              text-center
              font-semibold
              text-sm md:text-base
            "
          >
            {{ categoria.nombre }}
          </p>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import categorias from "@/data/Categories.js";

const images = import.meta.glob(
  "../../assets/categories/*",
  {
    eager: true,
    import: "default"
  }
);

const getImage = (id) => {

  const ruta = Object.keys(images).find(
    path => path.includes(`/categories/${id}.`)
  );

  return ruta
    ? images[ruta]
    : "/placeholder-category.png";

};
</script>