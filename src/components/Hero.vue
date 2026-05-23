<template>
  <section
    class="relative min-h-217.5 flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-surface-bright"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center w-full">
      <div class="z-10 text-center lg:text-left">
        <span
          class="inline-block py-1 px-4 bg-tertiary-fixed text-on-tertiary-container rounded-full font-label-md mb-md"
        >
          #1 FASTEST LATINO DELIVERY
        </span>
        <h1
          class="font-display-lg text-display-lg-mobile md:text-[64px] md:leading-[1.1] text-on-surface mb-md"
        >
          Fast Food, <br /><span class="text-primary">Faster Service.</span>
        </h1>
        <p class="text-body-lg text-on-surface-variant max-w-lg mb-lg mx-auto lg:mx-0">
          Q'Bocao redefines urban Latino dining. Authentic flavors met with high-speed logistics.
          Your cravings, delivered in record time.
        </p>
        <div class="flex flex-col sm:flex-row gap-md justify-center lg:justify-start">
          <button
            class="bg-primary text-on-primary font-bold px-xl py-4 rounded-full text-lg shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95"
          >
            Order Now
          </button>
          <button
            class="flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold px-xl py-4 rounded-full text-lg hover:bg-secondary-fixed transition-all active:scale-95"
          >
            <span class="material-symbols-outlined">play_circle</span>
            See How We Work
          </button>
        </div>
      </div>
      <div class="relative order-first lg:order-last">
        <div class="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-125"></div>
        <img
          alt="Gourmet Burger"
          class="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
          data-alt="A high-end, gourmet burger with melting cheese, crisp lettuce, and artisanal buns, shot in a professional studio setting with high-key lighting. The burger is the central focus against a clean white and minimalist background with vibrant orange splashes in the composition. The lighting is bright and modern, emphasizing the freshness of the ingredients and the premium aesthetic of the Q'Bocao brand."
          src="../assets/img/mainImage.png"
        />
      </div>
    </div>
  </section>
</template>
