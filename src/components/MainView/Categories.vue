<template>
  <section class="py-xl px-margin-mobile md:px-margin-desktop max-w-full mx-auto bg-[#F9F9F9]">
    <div class="flex items-end justify-between mb-lg">
      <div>
        <h2 class="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
          Buscar por categoria
        </h2>
        <p class="text-on-surface-variant [font-family:var(--font-body-md)]">
          Descubre nuestra cuidada selección de delicias latinas de alta velocidad.
        </p>
      </div>
      <button class="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
        View All <span class="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-md">
      <!-- Category 1 -->
      <div class="group cursor-pointer">
        <div
          class="relative overflow-hidden aspect-square rounded-xl bg-surface-container-low flex items-center justify-center transition-all duration-300 group-hover:bg-primary-fixed"
        >
          <img
            alt="Burgers"
            class="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
            data-alt="A professional top-down shot of a classic cheese burger on a minimalist white plate. The lighting is crisp and even, highlighting the vibrant colors. The overall aesthetic is clean and modern, following a high-contrast palette of white and vibrant orange accents."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJD8_kr0Xo3Y4tmo_Fy2Ls6xhjgpzIFxwz9q0SzfjSRHUvVwZfhR89SW0_4UD4KEHtnOlGKGvga7ZBkfOonS5LeMg3bjcW-2mMLont7S22TF9lOzozRKs-zfKMaO_qJJmufgvagpo5xfw5mbnOwpZkd2tXDjU5-iYsTvSihxpzZYxSH8l46JwFEkpaoWM3OkE9nTm2B5DLuvIGhFg6LBDgY5Zq1MoI1k2-w4cRbYmdvju1Zn9Yxj0u26EeWDuAUJrbImXGLTSUmg"
          />
        </div>
        <p class="mt-sm font-headline-sm text-center">Burgers</p>
      </div>
      <!-- Category 2 -->
      <div class="group cursor-pointer">
        <div
          class="relative overflow-hidden aspect-square rounded-xl bg-surface-container-low flex items-center justify-center transition-all duration-300 group-hover:bg-secondary-fixed"
        >
          <img
            alt="Pizzas"
            class="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
            data-alt="A slice of pepperoni pizza with long cheese pull, presented on a minimalist high-key surface. The scene is illuminated by soft, bright light that creates a clean and appetizing appearance. The color palette emphasizes the golden crust and vibrant orange tones against a pristine background."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAaqa7EhkVHTanKGrGbZWij0OGS6fypCwXpDd3GgB0t6_ZiwEoGWO-H26V13Fzfw4Gd4P8svyox3CRKFRzmg1LJCuBjEKJ8k4f1Hys9C_tN8dgBpW2mihrsKqBmlzScgASZWpBMjk2mJffrgVXRHK6oNIH02TUxYbOZ-INFZZASasczxuqFpfaYc7MmW484gOMLBEcBMfJT_cFytFN4pQRH_-2k5Q3z6S1SVPL37SYKfFY-Q1KcF28CXmfQ53l-rOu_mvNtdqP1jw"
          />
        </div>
        <p class="mt-sm font-headline-sm text-center">Pizzas</p>
      </div>
      <!-- Category 3 -->
      <div class="group cursor-pointer">
        <div
          class="relative overflow-hidden aspect-square rounded-xl bg-surface-container-low flex items-center justify-center transition-all duration-300 group-hover:bg-tertiary-fixed"
        >
          <img
            alt="Drinks"
            class="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
            data-alt="A refreshing, cold drink with condensation on the glass and fresh mint leaves. The setting is a minimalist, bright cafe environment with natural high-key lighting. The image focuses on clarity and freshness, utilizing a palette of cool whites and subtle orange accents."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyeEqEAY8iB7HX-jCnt3gbT_sipoUumbo2S2cjDeuRrbigXAErkcUjA_FT0mZoiqThCTilXr_UL46IgagXO2x0GP4HcDHGulst-d9dlHTAjGlBGwl3bN-t4kvesS1bIStyZJGiAAfxoy_F-exSP9Jrx2L97ehbAb2Al0RTHR-ljCqoP5HRzQdQ-59tX0-q9mlNGTyxvUHceDW1DQjRT6b5wIRs55_-0XwBJxnfWebihXVwifnGub09k2Rg4SI84zXLXSF_pt42DGI"
          />
        </div>
        <p class="mt-sm font-headline-sm text-center">Drinks</p>
      </div>
      <!-- Category 4 -->
      <div class="group cursor-pointer">
        <div
          class="relative overflow-hidden aspect-square rounded-xl bg-surface-container-low flex items-center justify-center transition-all duration-300 group-hover:bg-primary-fixed-dim"
        >
          <img
            alt="Desserts"
            class="w-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
            data-alt="A gourmet glazed doughnut with chocolate drizzle on a minimalist white pedestal. The lighting is soft and diffused, creating a premium look. The composition is clean, keeping the focus entirely on the dessert with a modern, high-contrast aesthetic that fits the Q'Bocao brand identity."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp4tYtuRvicb7Z7mxFd80Uh8ZL0iBMLR7GoCNfTdobiq7PV6FfLLJjzoPU06uHXHKjL-BuIihuufN1D8HMBw_1dNMUxuVqfOeEkwiPed2W_DGFbQ62X3jjHgnhmNQL_cOWmd1zX2rMj0yPkX-69QwKMqNxonmRX16wDGGG5psNGef5mIsr6Pe7guak_8PxlMDzw60BZGOBFL8C25jw5iy85O74D5XsCpT79gbHlU3wk6qBGgjL_WP-4q8iwMfOSEy7qmdX1cZZ3co"
          />
        </div>
        <p class="mt-sm font-headline-sm text-center">Desserts</p>
      </div>
    </div>
  </section>
</template>
