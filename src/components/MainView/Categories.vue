<template>
  <section class="py-20 bg-surface">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- HEADER -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">

        <div>
          <h2 class="text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight">
            Buscar por categoría
          </h2>

          <p class="text-sm sm:text-base text-on-surface-variant mt-1">
            Encuentra rápidamente lo que te apetece
          </p>
        </div>

        <a
          href="/menu"
          class="group flex items-center gap-2 text-primary font-semibold transition"
        >
          Ver todas

          <span
            class="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>

      </div>

      <!-- GRID -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

        <div
          v-for="categoria in categorias.slice(0,4)"
          :key="categoria.id"
          class="group cursor-pointer"
        >

          <!-- CARD -->
          <div
            class="
              relative
              aspect-square
              rounded-3xl
              overflow-hidden
              bg-neutral-50
              border border-outline-variant/40
              shadow-sm

              transition-all duration-300
              group-hover:-translate-y-2
              group-hover:shadow-xl
            "
          >

            <!-- IMAGE -->
            <img
              :src="getImage(categoria.id)"
              :alt="categoria.nombre"
              class="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
              loading="lazy"
            />

            <!-- OVERLAY -->
            <div
              class="
                absolute inset-0
                bg-gradient-to-t
                from-black/60 via-black/10 to-transparent
                opacity-70
                group-hover:opacity-50
                transition
              "
            ></div>

            <!-- LABEL -->
            <div
              class="
                absolute bottom-4 left-4 right-4
              "
            >
              <p class="text-white font-semibold text-base sm:text-lg leading-tight">
                {{ categoria.nombre }}
              </p>
            </div>

          </div>

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