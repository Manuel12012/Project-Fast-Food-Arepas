<template>
  <footer class="bg-surface-container-low border-t border-outline-variant/20">

    <div class="max-w-7xl mx-auto px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-16">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        <!-- BRAND -->
        <div>

          <img src="../../assets/icons/LogoMain.png" alt="Q'Bocao" class="h-10 w-auto mb-5" />

          <p class="text-sm text-on-surface-variant leading-relaxed mb-6">
            © 2026 Q'BOCAO — cocina latina rápida y auténtica.
            Sabor real, entregado antes de que el hambre desaparezca.
          </p>


        </div>

        <!-- EXPLORE -->
        <nav>
          <h4 class="font-semibold text-on-surface mb-5">Explorar</h4>

          <ul class="space-y-3 text-sm">

            <li>
              <a class="text-on-surface-variant hover:text-primary transition" href="/menu">
                Menú
              </a>
            </li>

            <li>
              <a class="text-on-surface-variant hover:text-primary transition" href="/menu?deals=true">
                Ofertas
              </a>
            </li>

            <li>
              <a class="text-on-surface-variant hover:text-primary transition" href="/track">
                Seguimiento de pedido
              </a>
            </li>

          </ul>
        </nav>

        <!-- COMPANY -->
        <nav>
          <h4 class="font-semibold text-on-surface mb-5">Empresa</h4>

          <ul class="space-y-3 text-sm">

            <li>
              <a class="text-on-surface-variant hover:text-primary transition" href="/contact">
                Contacto
              </a>
            </li>

            <li>
              <a class="text-on-surface-variant hover:text-primary transition" href="/privacy">
                Política de privacidad
              </a>
            </li>

          </ul>
        </nav>
      </div>

      <!-- BOTTOM BAR -->
      <div
        class="mt-12 pt-6 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between gap-4 text-xs text-on-surface-variant">

        <p>© 2026 Q'BOCAO. Todos los derechos reservados.</p>

      </div>

    </div>

  </footer>
</template>