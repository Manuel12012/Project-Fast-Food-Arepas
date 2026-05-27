<template>
  <section class="bg-primary py-10">

    <div
      class="
        max-w-7xl
        mx-auto
        px-(--spacing-margin-mobile)
        md:px-(--spacing-margin-desktop)
      "
    >

      <div
        class="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          text-on-primary
        "
      >

        <!-- ITEM 1 -->

        <div
          class="
            flex
            flex-col
            sm:flex-row
            items-center
            text-center
            sm:text-left
            gap-4
          "
        >

          <div
            class="
              w-14 h-14 md:w-16 md:h-16
              rounded-full
              bg-on-primary/15
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <!-- ICON -->

            <svg
              fill="#FFED94"
              width="30"
              height="30"
              viewBox="0 0 220 260"
            >
              <path
                d="M123,43V28h16V2H81v26h16v15C43.696,49.44,2,95.241,2,150.253C2,209.665,50.335,258,109.747,258s107.747-48.335,107.747-107.747C217.494,95.241,176.304,49.44,123,43z"
              />
            </svg>

          </div>

          <div>
            <h3 class="font-bold text-lg">
              Menos de 30 minutos
            </h3>

            <p class="opacity-80 text-sm md:text-base">
              Livraison rapide et fraîche.
            </p>
          </div>

        </div>

        <!-- ITEM 2 -->

        <div
          class="
            flex
            flex-col
            sm:flex-row
            items-center
            text-center
            sm:text-left
            gap-4
          "
        >

          <div
            class="
              w-14 h-14 md:w-16 md:h-16
              rounded-full
              bg-on-primary/15
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="30"
              height="30"
            >
              <path
                fill="#FFED94"
                d="M72,21.9C69.3,19 66.3,17 62.7,17H37.3C33.7,17 30.7,19 28,21.9..."
              />
            </svg>

          </div>

          <div>
            <h3 class="font-bold text-lg">
              Retrait
            </h3>

            <p class="opacity-80 text-sm md:text-base">
              Commandez et récupérez rapidement.
            </p>
          </div>

        </div>

        <!-- ITEM 3 -->

        <div
          class="
            flex
            flex-col
            sm:flex-row
            items-center
            text-center
            sm:text-left
            gap-4
          "
        >

          <div
            class="
              w-14 h-14 md:w-16 md:h-16
              rounded-full
              bg-on-primary/15
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <svg
              fill="#FFED94"
              width="30"
              height="30"
              viewBox="0 -18.83 122.88 122.88"
            >
              <path
                d="M28.84,12.93l4.75,0.09L23.08,47.67..."
              />
            </svg>

          </div>

          <div>
            <h3 class="font-bold text-lg">
              À domicile
            </h3>

            <p class="opacity-80 text-sm md:text-base">
              Livraison directement chez vous.
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>