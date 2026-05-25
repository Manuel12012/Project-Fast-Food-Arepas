<template>
  <main class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl mt-24">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-xl items-start">
      <!-- Left: Hero Image -->
      <div class="md:col-span-7 space-y-md">
        <div
          class="relative group overflow-hidden rounded-xl bg-surface-container aspect-[4/3] flex items-center justify-center"
        >
          <img
            alt="Classic Smash Burger"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="A professional studio shot of a classic smash burger featuring two thin, crispy-edged beef patties, melted golden cheddar cheese oozing between layers, fresh green lettuce, and vibrant red tomato slices on a toasted brioche bun. The lighting is high-key and bright, highlighting the glistening juices of the meat against a clean white background. The aesthetic is modern and high-end culinary photography, focusing on texture and freshness with vibrant red and warm yellow tones."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ45K6ar0dD8UuXxDo1WjGhhni0LO5eofs-g2v5xn2OfwNHGngIwV1-sEwK0DOkeLAeJ6Xt9frPnvWc1P7c-3OMzZ2rS5TtRLcDP1zCNBA0TmT7STOLKBM-hJirJtp2d42SkpbyIlIaaOR0nuwlUH014ZyJ-oPn9IswqX004Ye7SEKEJc2axmSEn-tJUu4S9sE4pTusLI7F7iHg4zIiAgw2nH4Vpa8pCVzBluUkxIznuT4NMtZgvpAnXyUndrD-oXd1M5GtDlALeA"
          />
          <div
            class="absolute top-md left-md bg-secondary-container text-on-secondary-container px-md py-base rounded-full font-label-md shadow-sm"
          >
            Best Seller
          </div>
        </div>
        <div class="grid grid-cols-3 gap-md">
          <div class="rounded-lg overflow-hidden h-32 bg-surface-container">
            <img
              class="w-full h-full object-cover"
              data-alt="Macro close-up of a juicy beef patty being smashed on a hot griddle, showing the caramelized crispy edges and steam rising."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhuK3i7vkLhhn3Ir_amMgc6_vaKoKNjE3RGjuZR7lPCbrME2IWF33rljY8P3he5KCuRMbxvGzmHFFDTUp5d7rNnaoqwwnFOqRdeZpR_Q92Re74kxgbV06m0het4YOEcbMneRWdBMSXNKZxkxpsXaiPAjMXkFW5d9dcgW_9GSsnMa6KHmyZd4DI1rc3U9t2opHehLfukus85Wf1Qo_szw7wFWwRUBozHIHk-ZP76QinmRRD_Jx8nuK6GV_e3GmICfvWtBf2DSExqcs"
            />
          </div>
          <div class="rounded-lg overflow-hidden h-32 bg-surface-container">
            <img
              class="w-full h-full object-cover"
              data-alt="A side view of a burger showing the perfectly melted cheese and fresh vegetable layers."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcbVaiLhzekFV-zY_2EMVmGVb8bpDALKqRKoiXb4VII23MChgZ2xRX0yvgLnEOjjkFeIyu22T08nKdm7rAn0YvfaeJ94jWeOVp73i8UkN4MSNJlWLfMMKbdnz-cQU-xmU3618VKLL6xrWwRdjjsyJUHWAyqezX-vqW0cPOD2MKbd5wBuF5NxNn_w_33awcwwkqhSWjLkJ4r8yKDb9uXLryIqTVMkNBBK1O5H2eoUnn7jSbdxwFsOHrwf1nP65e38I_p5X5TPs02qc"
            />
          </div>
          <div
            class="rounded-lg overflow-hidden h-32 bg-surface-container flex items-center justify-center border-2 border-dashed border-outline-variant"
          >
            <span class="material-symbols-outlined text-outline" data-icon="videocam"
              >videocam</span
            >
          </div>
        </div>
      </div>
      <!-- Right: Product Details -->
      <div class="md:col-span-5 sticky top-24">
        <div class="space-y-md">
          <div class="flex flex-col gap-xs">
            <div class="flex items-center gap-base text-secondary-container">
              <span
                class="material-symbols-outlined fill"
                data-icon="star"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >star</span
              >
              <span class="font-label-md text-on-surface">4.9 (2.4k reviews)</span>
            </div>
            <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Classic Smash Burger
            </h1>
            <p class="font-body-lg text-on-surface-variant leading-relaxed">
              Two hand-smashed 100% Angus beef patties, caramelized on a high-heat chrome griddle,
              topped with double melty American cheese, secret Q'Bocao sauce, and vine-ripened
              pickles on a butter-toasted potato roll.
            </p>
          </div>
          <div class="text-display-lg text-primary font-extrabold">$12.99</div>
          <hr class="border-surface-variant" />
          <!-- Customization -->
          <div class="space-y-md">
            <h3 class="font-headline-sm text-on-surface">Customize Your Burger</h3>
            <div class="space-y-sm">
              <label
                class="flex items-center justify-between p-md bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors border border-transparent active:border-primary"
              >
                <div class="flex items-center gap-md">
                  <input
                    class="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary"
                    type="checkbox"
                  />
                  <span class="font-body-md font-medium">Extra Cheese</span>
                </div>
                <span class="font-label-md text-on-surface-variant">+$1.50</span>
              </label>
              <label
                class="flex items-center justify-between p-md bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors border border-transparent active:border-primary"
              >
                <div class="flex items-center gap-md">
                  <input
                    class="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary"
                    type="checkbox"
                  />
                  <span class="font-body-md font-medium">Add Bacon</span>
                </div>
                <span class="font-label-md text-on-surface-variant">+$2.00</span>
              </label>
              <label
                class="flex items-center justify-between p-md bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors border border-transparent active:border-primary"
              >
                <div class="flex items-center gap-md">
                  <input
                    class="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary"
                    type="checkbox"
                  />
                  <span class="font-body-md font-medium">No Onions</span>
                </div>
                <span class="font-label-md text-on-surface-variant text-primary font-bold"
                  >Free</span
                >
              </label>
            </div>
          </div>
          <!-- Quantity and Add to Cart -->
          <div class="flex gap-md pt-md">
            <div class="flex items-center bg-surface-container-high rounded-full px-sm">
              <button
                class="w-10 h-10 flex items-center justify-center text-primary font-bold hover:scale-110 active:scale-95 transition-all"
                onclick="
                  this.nextElementSibling.innerText = Math.max(
                    1,
                    parseInt(this.nextElementSibling.innerText) - 1,
                  )
                "
              >
                -
              </button>
              <span class="w-8 text-center font-bold font-body-lg">1</span>
              <button
                class="w-10 h-10 flex items-center justify-center text-primary font-bold hover:scale-110 active:scale-95 transition-all"
                onclick="
                  this.previousElementSibling.innerText =
                    parseInt(this.previousElementSibling.innerText) + 1
                "
              >
                +
              </button>
            </div>
            <button
              class="flex-1 bg-primary text-on-primary py-md px-xl rounded-full font-headline-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20"
            >
              Add to Cart
            </button>
          </div>
          <!-- Nutritional/Info Accordion -->
          <div class="pt-lg">
            <details class="group border-b border-surface-variant pb-base cursor-pointer">
              <summary class="flex justify-between items-center font-headline-sm list-none py-sm">
                <span>Nutrition &amp; Ingredients</span>
                <span
                  class="material-symbols-outlined transition-transform group-open:rotate-180"
                  data-icon="expand_more"
                  >expand_more</span
                >
              </summary>
              <div class="py-md text-on-surface-variant space-y-sm">
                <div class="grid grid-cols-4 gap-sm text-center">
                  <div
                    class="bg-surface-container rounded-lg p-sm border-t-2 border-secondary-container"
                  >
                    <div class="text-[10px] uppercase font-bold tracking-tighter">Calories</div>
                    <div class="font-bold">780</div>
                  </div>
                  <div
                    class="bg-surface-container rounded-lg p-sm border-t-2 border-secondary-container"
                  >
                    <div class="text-[10px] uppercase font-bold tracking-tighter">Fat</div>
                    <div class="font-bold">45g</div>
                  </div>
                  <div
                    class="bg-surface-container rounded-lg p-sm border-t-2 border-secondary-container"
                  >
                    <div class="text-[10px] uppercase font-bold tracking-tighter">Protein</div>
                    <div class="font-bold">38g</div>
                  </div>
                  <div
                    class="bg-surface-container rounded-lg p-sm border-t-2 border-secondary-container"
                  >
                    <div class="text-[10px] uppercase font-bold tracking-tighter">Carbs</div>
                    <div class="font-bold">42g</div>
                  </div>
                </div>
                <p class="text-label-sm italic">
                  Contains: Wheat, Milk, Egg, Soy. Prepared in a facility that also processes
                  peanuts.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
