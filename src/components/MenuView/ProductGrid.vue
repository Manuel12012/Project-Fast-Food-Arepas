<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl">
    <!-- Item 1: Burger -->
    <div
      class="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div class="h-64 overflow-hidden bg-surface-container-low relative">
        <img
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="A gourmet smash burger with molten cheddar cheese dripping over two charred beef patties on a toasted brioche bun. The lighting is high-key and bright, highlighting the fresh green lettuce and ruby red tomatoes against a clean white background. Minimalist culinary photography style with vibrant reds and pristine whites to match a modern light-mode brand identity."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWCPBINw_snrHD2WWAEjBqg1JnJWbMCx85R1YlYoM0qTVPpmfI0tDu2PZRgq-gaUUts-63XnPDgZXNrD9v46ylMkwtGQWYG0tA0RB-NGEfYXKBJXlO5D4hEnDY9CP-rlQ-s5VI75H_3vfKhkOv8XQMMjLZV8EctyPNRrTEkhWYbvQHDJI5bRGFDIJrSCxCKXmEnormWzKD0ZB-zRZTif0BeDGd7S2xv3bsmgxlAg-o-8ajQpQknr5roZh-FU5GT2A3t-spLovMkW0"
        />
        <span
          class="absolute top-4 left-4 bg-tertiary text-on-tertiary font-label-sm px-3 py-1 rounded-full uppercase tracking-wider"
          >Popular</span
        >
      </div>
      <div class="p-md flex flex-col h-full">
        <div class="flex justify-between items-start mb-xs">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Bocao Double</h3>
          <span class="text-primary font-bold text-headline-sm">$14.50</span>
        </div>
        <p class="text-on-surface-variant font-body-md mb-lg line-clamp-2">
          Two wagyu patties, secret nitro-sauce, and aged sharp cheddar on a charcoal bun.
        </p>
        <div class="mt-auto flex justify-between items-center">
          <div class="flex gap-xs">
            <span
              class="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded"
              >SPICY</span
            >
            <span
              class="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded"
              >LATINO FLAVOR</span
            >
          </div>
          <button
            class="add-btn w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Item 2: Fries -->
    <div
      class="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div class="h-64 overflow-hidden bg-surface-container-low relative">
        <img
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="Golden crispy truffle fries served in a minimalist white ceramic bowl. The fries are dusted with parmesan snow and fresh parsley. Bright, energetic lighting emphasizes the crunchy texture against a soft gray-white gradient background. The aesthetic is clean, premium, and appetizing, aligned with high-contrast minimalist food styling."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRy5L692haDGzecJZ2P3AZFFn-K1su7m41GF0yBSdv--Q7YIbrSARBT3cgGs8cKierlTpmo4FUcgM5sirfvuVTRmiWWfqCp9C7oO5OMVHoQ3fY6_NB4FEU5s7fi_2XTf5tkbejx9P1NOO_arqkrk4m7rS_95_-eExPg4FanPfUfu3PzNmAmW5hAEaqyCjnjlKfDmToOSAy3VPqnroeyIhtlSvvauvDZ-6dSxpAfoyRP_jQruauba_9ihhyjYYA_dZrf8EYNc-zwYs"
        />
      </div>
      <div class="p-md flex flex-col h-full">
        <div class="flex justify-between items-start mb-xs">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Truffle Friction</h3>
          <span class="text-primary font-bold text-headline-sm">$6.00</span>
        </div>
        <p class="text-on-surface-variant font-body-md mb-lg">
          Hand-cut russet potatoes tossed in white truffle oil and sea salt.
        </p>
        <div class="mt-auto flex justify-between items-center">
          <div class="flex gap-xs">
            <span
              class="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded"
              >VEGAN OPTION</span
            >
          </div>
          <button
            class="add-btn w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Item 3: Shake -->
    <div
      class="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div class="h-64 overflow-hidden bg-surface-container-low relative">
        <img
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="A thick, creamy strawberry milkshake in a tall minimalist glass with a single vibrant red straw. Fresh strawberry slices garnish the rim. The scene is bathed in bright, optimistic daylight, casting soft shadows on a white marble surface. High-contrast energy with a focus on freshness and high-speed culinary delight."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiufYd8mHTZRXhppqhMbI3AmFaZJzzlVRCFa9fI25LtEc_7R07wJvEG-hHmdemzyMRAhPiJacPW0hMJGyIH9yHNWNAIUT30miWJEzU7eNQlu0Dpluqsi6N1rXvSHN15ndRjLkPu0FEymNgHDRt5F7DyWnSpaVs2yjGvHWYAQZIRhcQYoh5DFCCmQrAYfcBaRBR0qYdD-6vHneVLOMm6sAsu0uLB6afba7UFxe91j81H2CtNaKoqvgSZv1WyeJOAkI0WKZqGZDj2q4"
        />
      </div>
      <div class="p-md flex flex-col h-full">
        <div class="flex justify-between items-start mb-xs">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Nitro Berry</h3>
          <span class="text-primary font-bold text-headline-sm">$7.25</span>
        </div>
        <p class="text-on-surface-variant font-body-md mb-lg">
          Whipped nitrogen-chilled local berries with organic vanilla bean cream.
        </p>
        <div class="mt-auto flex justify-between items-center">
          <div class="flex gap-xs">
            <span
              class="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded"
              >DAIRY FREE</span
            >
          </div>
          <button
            class="add-btn w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Item 4: Wings -->
    <div
      class="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div class="h-64 overflow-hidden bg-surface-container-low relative">
        <img
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="Spicy buffalo chicken wings glazed in a glistening red sauce, served with crisp celery sticks and a side of white dipping sauce. The composition is modern and asymmetric, shot on a matte white surface with vibrant lighting. The mood is energetic and appetizing, emphasizing the heat and speed of the meal."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvJqCtYiIjFqu8QUvBn7aJ6gZfj5Qoux9oZPbwSUQw49JzrCY_bi-b_uU691-G67t015UtKErITMTHZfZhllHxHHuIMdcWZl-ntdNWYoLJRdUvDxPjeP5b7oDppz7kN8RM23wodt3VhFVDrTq8Lmm9S0yI2tAoFt_9m6unTulRA_BBHgnG0CtJdSHJ5chf-8sMiwEABEiIb-dzz84mjKel0YlbDvWBwMGGxjf_jEKqsN_zFFq0MgOLdiK0gU3ysdmDZlR50JChvbA"
        />
      </div>
      <div class="p-md flex flex-col h-full">
        <div class="flex justify-between items-start mb-xs">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Latino Wings</h3>
          <span class="text-primary font-bold text-headline-sm">$12.00</span>
        </div>
        <p class="text-on-surface-variant font-body-md mb-lg">
          8-piece crispy wings glazed in our signature high-octane buffalo sauce.
        </p>
        <div class="mt-auto flex justify-between items-center">
          <div class="flex gap-xs">
            <span
              class="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded"
              >BEST SELLER</span
            >
          </div>
          <button
            class="add-btn w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Item 5: Salad -->
    <div
      class="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div class="h-64 overflow-hidden bg-surface-container-low relative">
        <img
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="A vibrant superfood salad with kale, quinoa, avocado, and pomegranate seeds in a minimalist white bowl. Soft, ambient lighting creates a fresh and healthy atmosphere. The color palette is dominated by deep greens and bright pops of red, fitting the clean-tech culinary aesthetic of the brand. Professional food photography on a bright background."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAdqBXd6hlssPJ4n9Uja7NcvDAK1uqqqv0I9w4YR-8amIxj19y8oRxkdRkhHz9wtIKJl9Ap6uh0wC5FrqKaBEmjPwRoVPMxfJ_GoUAyzq4-EmuWuXq_gsGKu3TN5qXCdru8ccHtpUhD5e5mcrCGZr2odwermil2anSjdqxQAA0Y4jP6yLog5LFbK9YDnacgopBAPqdr8z6EgFTN6fG1hCdOZi01Mo6gegrx7k0Yuu0tbzedafYfLQ2tmQCKUsbJQpBbI6PihTG6uI"
        />
      </div>
      <div class="p-md flex flex-col h-full">
        <div class="flex justify-between items-start mb-xs">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Kinetic Bowl</h3>
          <span class="text-primary font-bold text-headline-sm">$13.25</span>
        </div>
        <p class="text-on-surface-variant font-body-md mb-lg">
          Massaged kale, roasted beets, quinoa, and a zesty lemon-tahini drizzle.
        </p>
        <div class="mt-auto flex justify-between items-center">
          <div class="flex gap-xs">
            <span
              class="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded"
              >VEGAN</span
            >
          </div>
          <button
            class="add-btn w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Item 6: Sandwich -->
    <div
      class="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div class="h-64 overflow-hidden bg-surface-container-low relative">
        <img
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="A stacked club sandwich with layers of roasted turkey, crispy bacon, and fresh avocado on toasted artisan bread. The sandwich is cut diagonally, revealing the rich textures. Shot in a minimalist studio setting with bright, clean lighting. The focus is sharp on the food, maintaining the energetic and high-quality culinary feel."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvCljXm2-hmN07nPC-Ysn_lQp_NPa4lSGlhQYmddjitkSjeraQuUi3Uk8i7OX8idzLhw_8h4is3Erx3QRdbEG95Xxblz6fSr1PAz9z79HP5x1wx2CqPluzZLFGAkFlB5G5D0_5-WqnmhBF1kOifVx1Cr6C_XRxe9zt4pNNvluUAv2KhjeznWXveKCy1ZRUuR52iH8GngwLUCSO--p6SxQCUDCd_ODY5Y2Acl8eZLmzLkY6MnQymI9OggSXH9IFz7WRR9s4WxXo3GQ"
        />
      </div>
      <div class="p-md flex flex-col h-full">
        <div class="flex justify-between items-start mb-xs">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Aero Club</h3>
          <span class="text-primary font-bold text-headline-sm">$11.75</span>
        </div>
        <p class="text-on-surface-variant font-body-md mb-lg">
          Triple-decker smoked turkey, pepper jack, and basil aioli on sourdough.
        </p>
        <div class="mt-auto flex justify-between items-center">
          <div class="flex gap-xs">
            <span
              class="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded"
              >NEW</span
            >
          </div>
          <button
            class="add-btn w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
