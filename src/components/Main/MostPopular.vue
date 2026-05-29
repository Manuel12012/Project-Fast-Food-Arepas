<template>
  <section class="py-xl bg-surface-container-lowest">
    <div class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <div class="flex items-center justify-between mb-lg">
        <h2 class="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
          Los mas populares
        </h2>
        <div class="flex gap-2">
          <button
            class="p-2 rounded-full border border-outline hover:bg-surface-container transition-all active:scale-95"
          >
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            class="p-2 rounded-full border border-outline hover:bg-surface-container transition-all active:scale-95"
          >
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        <!-- Item 1 -->
        <div
          class="group relative bg-surface border border-surface-container-high rounded-xl p-md transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <div class="absolute top-4 right-4 z-10">
            <button
              class="bg-surface/80 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >favorite</span
              >
            </button>
          </div>
          <div
            class="aspect-square mb-sm flex items-center justify-center bg-white rounded-lg overflow-hidden"
          >
            <img
              alt="Velocity Burger"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="A close-up shot of a signature premium burger with caramelized onions and double cheese. The burger is presented on a minimalist wooden board against a high-key, clean white background. Soft shadows and bright lighting accentuate the texture of the meat and bun, embodying a modern culinary vibe."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACGfYqSOM2W6ilhtI7KYih719Qst98kl9BtwyBRbahxzVby4WeTYihsGvU1yG60mnQ_HWGE158CrH3uZusnMywqk8pkIN51JndHJFkXa9qXMXL_xZ6OcErUOvDmy1KgYAivN0w6WXXFHaQOJZqzQiNvfMK60YnUVt2QcPJRKc58V6croFSjfx9NjD-Y-VO2yaXi1lBvJT6b8NPDU9xVLtYiyuixYxR_FLkh60CVniyZ3VhmPWpoDo8bSdM8rrGrK0kHhzwPWcGICE"
            />
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-headline-sm text-on-surface">Q'Bocao Double</h4>
              <p class="text-label-sm text-on-surface-variant flex items-center gap-1">
                <span
                  class="material-symbols-outlined text-tertiary-container text-sm"
                  style="font-variation-settings: &quot;FILL&quot; 1"
                  >star</span
                >
                4.9 (1.2k+ reviews)
              </p>
            </div>
            <p class="font-headline-sm text-primary">$12.99</p>
          </div>
          <button
            class="mt-md w-full py-3 bg-secondary text-on-secondary rounded-lg font-bold hover:bg-secondary-container transition-colors active:scale-95"
          >
            Agregar al carrito
          </button>
        </div>
        <!-- Item 2 -->
        <div
          class="group relative bg-surface border border-surface-container-high rounded-xl p-md transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <div class="absolute top-4 right-4 z-10">
            <button
              class="bg-surface/80 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >favorite</span
              >
            </button>
          </div>
          <div
            class="aspect-square mb-sm flex items-center justify-center bg-white rounded-lg overflow-hidden"
          >
            <img
              alt="Nitro Pizza"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="A freshly baked pepperoni pizza with bubbling cheese and a perfectly charred crust. The shot is high-angle and minimalist, with the pizza centered in the frame on a clean, light-colored surface. Bright lighting makes the ingredients pop against the neutral background, keeping with the modern Q'Bocao aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApgU8GRtGUcDOSbdlMCaADMjQ2Se17LZ820ter_A_vB6NpQy9FE-WAx_CHWZ6GhbQ3Hsb7A9wOME3tUuPWXQgD0-gLUgaREy1S9TMBvYdfRGLGZ4nrzrHSpXWk5GMKg0UUuVgS9zwPhYIhJwCx5jtDytl5qGJ4lGGlRzEiqOVwQROgn2J68t8o0hhQOY3NRO_9eGLq40xOKk5b9G-XOaQMS3GMwrXzarv77g2mLq3bszXmI9Xr38qBasWOrlWd6xx-TAeSuCCt7ec"
            />
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-headline-sm text-on-surface">Latino Pepperoni</h4>
              <p class="text-label-sm text-on-surface-variant flex items-center gap-1">
                <span
                  class="material-symbols-outlined text-tertiary-container text-sm"
                  style="font-variation-settings: &quot;FILL&quot; 1"
                  >star</span
                >
                4.8 (800+ reviews)
              </p>
            </div>
            <p class="font-headline-sm text-primary">$15.99</p>
          </div>
          <button
            class="mt-md w-full py-3 bg-secondary text-on-secondary rounded-lg font-bold hover:bg-secondary-container transition-colors active:scale-95"
          >
            Agregar al carrito
          </button>
        </div>
        <!-- Item 3 -->
        <div
          class="group relative bg-surface border border-surface-container-high rounded-xl p-md transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <div class="absolute top-4 right-4 z-10">
            <button
              class="bg-surface/80 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >favorite</span
              >
            </button>
          </div>
          <div
            class="aspect-square mb-sm flex items-center justify-center bg-white rounded-lg overflow-hidden"
          >
            <img
              alt="Rapid Pasta"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="A professional plate of creamy pasta carbonara with fresh herbs and parmesan shavings. The lighting is soft but high-key, highlighting the texture of the sauce and pasta. The background is a clean white marble, reinforcing the premium and minimalist visual identity of the brand."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTR2gE5vrh8_LMeU2lfmT6TIskDUlaliseyTXCmG5eI9v57lFA8otIfb2woAJcwgRU8Q1a2XtZzch43ilJF-TuWHd4b91mDx66cDAwYI5B8vvKb4hWSXUEvQFeuiU5QMxnxneVkHyjtdVvn9Tr1OPWW0slALsrb9fbQDadhK9ZmRk2EuIY-grT_ACy-crm-Tnob9WZOgQxem1t170Nx_pf7ROC2s-fYTz_QspHxpUL-_3bKB56t4pFkr12Hko-A-5hAhYN5qfAc8k"
            />
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-headline-sm text-on-surface">Fresh Carbonara</h4>
              <p class="text-label-sm text-on-surface-variant flex items-center gap-1">
                <span
                  class="material-symbols-outlined text-tertiary-container text-sm"
                  style="font-variation-settings: &quot;FILL&quot; 1"
                  >star</span
                >
                4.7 (500+ reviews)
              </p>
            </div>
            <p class="font-headline-sm text-primary">$14.50</p>
          </div>
          <button
            class="mt-md w-full py-3 bg-secondary text-on-secondary rounded-lg font-bold hover:bg-secondary-container transition-colors active:scale-95"
          >
            Agregar al carrito
          </button>
        </div>
        <!-- Item 4 -->
        <div
          class="group relative bg-surface border border-surface-container-high rounded-xl p-md transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <div class="absolute top-4 right-4 z-10">
            <button
              class="bg-surface/80 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >favorite</span
              >
            </button>
          </div>
          <div
            class="aspect-square mb-sm flex items-center justify-center bg-white rounded-lg overflow-hidden"
          >
            <img
              alt="Swift Salad"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="A vibrant and colorful gourmet salad with avocado, grilled chicken, and various fresh vegetables. Shot in a bright, modern studio with high-key lighting. The presentation is clean and artistic, highlighting freshness and health within a high-contrast white and green palette with orange tomato accents."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkwp2ESkcHXnzg_Nm2-GfGuLN7-xEK6tY6_xg-26NYeBuXl2srEn5hDEKtJbkLLlQKLLODDjwUSOXLF5O_Xaf96hyennKyy1538NLkanoflTZki0EHNssYlhTOBR7chZfeKjLxA1tkGkfDBsL-ZcFl1KAN5oZs0ToFtJqSl0WU5TKM9RDQo3puphULkgIIjOr4Fp4c87kVKs7pQ0-NTzPUb83n8mVh1ttHmMwwa0mAd_R4qAwmbXRV-Ja7sCDw7Y1LhLciJauEzlQ"
            />
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-headline-sm text-on-surface">Q'Bocao Garden</h4>
              <p class="text-label-sm text-on-surface-variant flex items-center gap-1">
                <span
                  class="material-symbols-outlined text-tertiary-container text-sm"
                  style="font-variation-settings: &quot;FILL&quot; 1"
                  >star</span
                >
                4.9 (300+ reviews)
              </p>
            </div>
            <p class="font-headline-sm text-primary">$11.25</p>
          </div>
          <button
            class="mt-md w-full py-3 bg-secondary text-on-secondary rounded-lg font-bold hover:bg-secondary-container transition-colors active:scale-95"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
