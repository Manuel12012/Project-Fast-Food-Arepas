<template>
  <section class="mb-(--spacing-xl) pt-24">
    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-(--spacing-md) mb-(--spacing-lg)"
    >
      <div>
        <h1
          class="[font-family:var(--font-display-lg)] font-black text-[length:var(--text-display-lg-mobile)] md:text-[length:var(--text-display-lg)] text-on-surface mb-(--spacing-xs)"
        >
          Q'Bocao
        </h1>

        <p
          class="text-on-surface-variant [font-family:var(--font-body-lg)] text-[length:var(--text-body-lg)]"
        >
          Fast. Fresh. Latino. Sabor auténtico en cada mordida.
        </p>
      </div>
    </div>

    <!-- Chips / Filter Row -->
    <div class="flex overflow-x-auto pb-4 gap-(--spacing-sm) hide-scrollbar">
      <button
        class="active-chip px-(--spacing-md) py-(--spacing-sm) rounded-full [font-family:var(--font-label-md)] whitespace-nowrap transition-all shadow-sm"
      >
        All Items
      </button>

      <button
        class="bg-surface-container text-on-surface px-(--spacing-md) py-(--spacing-sm) rounded-full [font-family:var(--font-label-md)] whitespace-nowrap hover:bg-surface-container-high transition-all"
      >
        Burgers
      </button>

      <button
        class="bg-surface-container text-on-surface px-(--spacing-md) py-(--spacing-sm) rounded-full [font-family:var(--font-label-md)] whitespace-nowrap hover:bg-surface-container-high transition-all"
      >
        Sides
      </button>

      <button
        class="bg-surface-container text-on-surface px-(--spacing-md) py-(--spacing-sm) rounded-full [font-family:var(--font-label-md)] whitespace-nowrap hover:bg-surface-container-high transition-all"
      >
        Beverages
      </button>

      <button
        class="bg-surface-container text-on-surface px-(--spacing-md) py-(--spacing-sm) rounded-full [font-family:var(--font-label-md)] whitespace-nowrap hover:bg-surface-container-high transition-all"
      >
        Deals
      </button>

      <button
        class="bg-surface-container text-on-surface px-(--spacing-md) py-(--spacing-sm) rounded-full [font-family:var(--font-label-md)] whitespace-nowrap hover:bg-surface-container-high transition-all flex items-center gap-(--spacing-xs)"
      >
        <span class="material-symbols-outlined text-[18px]"> filter_list </span>

        Filters
      </button>
    </div>
  </section>
</template>
