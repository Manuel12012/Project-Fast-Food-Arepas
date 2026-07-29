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
    class="min-h-screen pt-[80px] flex items-center justify-center bg-linear-to-br from-surface to-surface-container px-(--spacing-margin-mobile)"
  >
    <!-- Login Container -->

    <div
      class="w-full max-w-130 bg-surface-container-lowest/90 backdrop-blur-sm rounded-3xl shadow-xl border border-outline-variant/30 overflow-hidden"
    >
      <div class="p-12 flex flex-col items-center">
        <!-- LOGO -->

        <div class="mb-10">
          <img
            alt="Q'Bocao Logo"
            class="h-12 w-auto object-contain"
            src="../../assets/icons/LogoMain.png"
            />
        </div>

        <!-- TITLE -->

        <div class="text-center mb-10">
          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
            ¡Bienvenido de nuevo!
          </h1>

          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80">
            Disfruta del auténtico sabor latino
          </p>
        </div>

        <!-- FORM -->

        <form class="w-full space-y-6" @submit.prevent="handleLogin">
          <!-- EMAIL -->

          <div>
            <label
              class="block font-label-lg text-label-lg text-on-surface-variant mb-2"
              for="email"
            >
              Correo Electrónico
            </label>

            <input
              v-model="email"
              id="email"
              type="text"
              placeholder="Usuario"
              class="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <!-- PASSWORD -->

          <div>
            <label
              class="block font-label-lg text-label-lg text-on-surface-variant mb-2"
              for="password"
            >
              Contraseña
            </label>

            <input
              v-model="password"
              id="password"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <!-- FORGOT -->

          <div class="text-right mt-2">
            <button
              type="button"
              class="text-sm text-primary underline cursor-pointer hover:opacity-80"
              @click="router.push('/forgot-password')"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <!-- BUTTON -->

          <button
            type="submit"
            class="w-full bg-primary text-on-primary py-4 rounded-xl cursor-pointer hover:opacity-90 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  </main>

  <Footer />
</template>
