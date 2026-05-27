<template>

  <footer
    class="
      bg-[#E2E2E2]
      mt-20
      border-t
      border-outline-variant/20
    "
  >

    <div
      class="
        max-w-7xl
        mx-auto
        px-(--spacing-margin-mobile)
        md:px-(--spacing-margin-desktop)
        py-16
      "
    >

      <div
        class="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
        "
      >

        <!-- BRAND -->

        <div>

          <img
            src="../../assets/icons/LogoMain.png"
            alt="Q'Bocao Logo"
            class="h-10 w-auto object-contain mb-5"
          />

          <p
            class="
              text-sm
              leading-relaxed
              text-on-surface-variant
              mb-6
            "
          >
            © 2026 Q'BOCAO.

            High-speed Latino culinary excellence.
            Authentic flavors delivered before
            your cravings fade.
          </p>

          <div class="flex gap-4">

            <a
              href="#"
              class="
                text-on-surface-variant
                hover:text-primary
                transition-colors
              "
            >
              <span class="material-symbols-outlined">
                social_leaderboard
              </span>
            </a>

            <a
              href="#"
              class="
                text-on-surface-variant
                hover:text-primary
                transition-colors
              "
            >
              <span class="material-symbols-outlined">
                chat_bubble
              </span>
            </a>

            <a
              href="#"
              class="
                text-on-surface-variant
                hover:text-primary
                transition-colors
              "
            >
              <span class="material-symbols-outlined">
                share
              </span>
            </a>

          </div>

        </div>

        <!-- EXPLORE -->

        <nav>

          <h4
            class="
              font-semibold
              text-on-surface
              mb-5
            "
          >
            Explore
          </h4>

          <ul class="space-y-3">

            <li>
              <a
                href="#"
                class="
                  text-on-surface-variant
                  hover:text-primary
                  transition-colors
                "
              >
                Menu
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  text-on-surface-variant
                  hover:text-primary
                  transition-colors
                "
              >
                Deals
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  text-on-surface-variant
                  hover:text-primary
                  transition-colors
                "
              >
                Track Order
              </a>
            </li>

          </ul>

        </nav>

        <!-- COMPANY -->

        <nav>

          <h4
            class="
              font-semibold
              text-on-surface
              mb-5
            "
          >
            Company
          </h4>

          <ul class="space-y-3">

            <li>
              <a
                href="#"
                class="
                  text-on-surface-variant
                  hover:text-primary
                  transition-colors
                "
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  text-on-surface-variant
                  hover:text-primary
                  transition-colors
                "
              >
                Privacy Policy
              </a>
            </li>

          </ul>

        </nav>

        <!-- APP DOWNLOAD -->

        <div>

          <h4
            class="
              font-semibold
              text-on-surface
              mb-5
            "
          >
            Download our App
          </h4>

          <p
            class="
              text-sm
              text-on-surface-variant
              mb-6
            "
          >
            Experience the fastest Latino ordering process on mobile.
          </p>

          <div class="flex flex-col gap-3">

            <button
              class="
                flex
                items-center
                gap-3
                bg-on-surface
                text-on-primary
                px-5
                py-3
                rounded-xl
                font-medium
                w-fit
                transition-all
                hover:scale-[1.03]
                active:scale-95
              "
            >
              <span class="material-symbols-outlined">
                ios
              </span>

              App Store
            </button>

            <button
              class="
                flex
                items-center
                gap-3
                bg-on-surface
                text-on-primary
                px-5
                py-3
                rounded-xl
                font-medium
                w-fit
                transition-all
                hover:scale-[1.03]
                active:scale-95
              "
            >
              <span class="material-symbols-outlined">
                play_arrow
              </span>

              Google Play
            </button>

          </div>

        </div>

      </div>

    </div>

  </footer>

</template>