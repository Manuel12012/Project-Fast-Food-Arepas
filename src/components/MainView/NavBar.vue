<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dim transition-colors duration-200"
  >
    <div
      class="flex justify-between items-center w-full px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-(--spacing-base) max-w-7xl mx-auto"
    >
      <a class="flex items-center gap-2" href="/">
        <img
          alt="Q'Bocao Logo"
          class="h-10 md:h-14 w-auto object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-dzToZgSfwVHe8xvINgXj5N-TyV6Dbn2JwBnl6bOBUDcSAh_S6Tb8VGvRdCRQk79W6E6Na3vOcKx2wC76sOzeh4M8OevFtERBfYKaGOiXvcgUm_P_LibyJHFFXQy5W046gunVO9fyDB1kgRABYVJioooASQXiV06aDIxA-yol1d4UpKwfLjdvJ-hIuzkObk4AA6M7-AOuHrqg6YsBZKqgEPpqx28OGwYr1QWPXerxm61ok9Ycjohn6NLve4fmKW_ToFoJklLXwJk"
        />
      </a>
      <div class="hidden md:flex items-center gap-(--spacing-lg)">
        <a
          class="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary py-1 [font-family:var(--font-body-md)] transition-colors duration-200"
          href="/menu"
          >Menú</a
        >
        <a
          class="text-on-surface dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 [font-family:var(--font-body-md)]"
          href="#"
          >Ofertas</a
        >
        <a
          class="text-on-surface dark:text-on-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 [font-family:var(--font-body-md)]"
          href="/products"
          >Seguimiento del pedido</a
        >
      </div>
      <div class="flex items-center gap-(--spacing-md)">
        <div class="hidden lg:flex items-center bg-surface-container rounded-full px-md py-xs">
          <span class="material-symbols-outlined text-outline">search</span>
          <input
            class="appearance-none bg-transparent border-none outline-none focus:ring-0 ml-2 text-[length:var(--text-body-md)] placeholder:text-primary"
            placeholder="Search flavors..."
            type="text"
          />
        </div>
        <button
          class="relative p-2 text-on-surface active:scale-95 transition-transform duration-100"
        >
          <span class="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          <span
            class="absolute top-0 right-0 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
            >3</span
          >
        </button>
        <button class="md:hidden p-2">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  </nav>
</template>
