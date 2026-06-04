<script setup lang="ts">
import Footer from "@/components/core/Footer.vue";
import NavBar from "@/components/core/NavBar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  const success = await authStore.login(email.value, password.value);

  if (success) {
    router.push("/admin/products");
  }
};
</script>

<template>
  <NavBar />
  <main
    class="min-h-screen pt-[80px] flex items-center justify-center bg-linear-to-br from-surface to-surface-container-low px-margin-mobile">
    <!-- Login Container -->
    <div
      class="w-full max-w-130 bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0px_20px_50px_rgba(0,0,0,0.05)] border border-white/20 overflow-hidden">
      <div class="p-12 flex flex-col items-center">
        <div class="mb-10">
          <img alt="Q'Bocao Logo" class="h-12 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2haFq-Ub00rhJeYZYpgMxH_LG5gxArILzJ0F0qejIDCFhIaipFk72vU0KedbvN3JteagsFQYp07qQxkot1n6uVAo_TZ3Jz724Q0d69uQI4SxsMeQnhtcgOhkRzvNq0nuOlInblkJcLmlxL7MRyz-FTfx_dallq1eSJM48AsGBSx5yp0U912Hqm7Nlmx_VLeFb_hDNSQAQWK5s7JhjaFOrWoIh6wJ-zXwf32-3_2xJulWMkmwrFzkQu5SskgkziBibPVfcj3ecrY" />
        </div>
        <div class="text-center mb-10">
          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
            ¡Bienvenido de nuevo!
          </h1>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80">
            Disfruta del auténtico sabor latino
          </p>
        </div>
        <form class="w-full space-y-6" @submit.prevent="handleLogin">
          <div>
            <label class="block font-label-lg text-label-lg text-on-surface-variant mb-2" for="email">Correo
              Electrónico</label>
            <input v-model="email" id="email" type="text" placeholder="Usuario"
              class="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest" />
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="block font-label-lg text-label-lg text-on-surface-variant" for="password">Contraseña</label>
            </div>
            <input v-model="password" id="password" type="password" placeholder="••••••••"
              class="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest" />
          </div>
          <button type="submit" class="w-full bg-primary-container text-on-primary-container py-4 rounded-xl cursor-pointer">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  </main>
  <Footer />
</template>
