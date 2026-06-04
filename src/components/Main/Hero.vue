<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-[#FFFFF] ">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-(--spacing-xl) items-center w-full">
      <div class="z-10 text-center lg:text-left max-w-2xl">
        <span
          class="inline-block py-1 px-4 bg-tertiary-fixed text-on-tertiary-container rounded-full font-label-md mb-md">
          #1 FASTEST LATINO DELIVERY
        </span>
        <h1 class="font-black text-6xl md:text-8xl leading-none text-on-surface mb-6">
          Traiteur à domicile <br />
          <div class="font-black text-6xl sm:text-md">
            <span class="text-yellow-500">Fast</span>
            <span class="text-blue-500"> Fresh</span>
            <span class="text-red-500"> Latino</span>
          </div>
        </h1>
        <p class="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-10 mx-auto lg:mx-0 leading-relaxed">
          Q'Bocao redefine la gastronomía latina urbana. Sabores auténticos con una logística
          ultrarrápida. Tus antojos, entregados en tiempo récord.
        </p>
        <div class="flex flex-col sm:flex-row gap-md justify-center lg:justify-start">
          <RouterLink to="/menu">
            <button
              class="bg-primary text-on-primary font-bold px-xl py-4 rounded-full text-lg shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95">
              Ordena ahora
            </button>
          </RouterLink>

          <button
            class="flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold px-xl py-4 rounded-full text-lg hover:bg-secondary-fixed transition-all active:scale-95">
            <svg fill="#005EA3" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M256,0C114.51,0,0,114.497,0,256c0,141.49,114.495,256,256,256c141.491,0,256-114.497,256-256 C512,114.509,397.503,0,256,0z M256,478.609c-122.746,0-222.609-99.862-222.609-222.609S133.252,33.391,256,33.391 S478.609,133.254,478.609,256S378.746,478.609,256,478.609z">
                    </path>
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M358.185,241.544l-155.778-90.01c-11.128-6.426-25.048,1.63-25.048,14.456V346.01c0,12.922,14.01,20.833,25.048,14.456 l155.778-90.01C369.301,264.032,369.287,247.96,358.185,241.544z M210.75,317.081V194.919L316.461,256L210.75,317.081z">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            Mirame como trabajo
          </button>
        </div>
      </div>
      <div class="relative order-first lg:order-last">
        <div class="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-125"></div>
        <img alt="Gourmet Burger"
          class="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
          data-alt="A high-end, gourmet burger with melting cheese, crisp lettuce, and artisanal buns, shot in a professional studio setting with high-key lighting. The burger is the central focus against a clean white and minimalist background with vibrant orange splashes in the composition. The lighting is bright and modern, emphasizing the freshness of the ingredients and the premium aesthetic of the Q'Bocao brand."
          src="../../assets/img/withoutBg.png" />
      </div>
    </div>
  </section>
</template>
