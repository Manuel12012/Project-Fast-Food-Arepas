<template>
  <main
    class="min-h-screen flex items-center justify-center bg-background px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop)"
  >
    <section
      class="w-full max-w-2xl rounded-3xl bg-surface-container-lowest border border-outline-variant shadow-xl p-8 md:p-10"
    >
      <!-- HEADER -->
      <div class="text-center mb-10">
        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-container text-on-primary-container"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3l7 3v5c0 5.25-3.5 8.75-7 10-3.5-1.25-7-4.75-7-10V6l7-3z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 11V9.75a2.25 2.25 0 114.5 0V11"
            />
            <rect x="8.5" y="11" width="7" height="5" rx="1" />
          </svg>
        </div>

        <h1 class="font-headline-md text-headline-md font-bold text-on-surface">
          Crear nueva contraseña
        </h1>

        <p class="mt-3 text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Elige una contraseña segura para proteger tu cuenta.
        </p>
      </div>

      <!-- FORMULARIO -->
      <form @submit.prevent="resetPassword" class="space-y-6">
        <div>
          <label class="block mb-2 text-label-md font-medium text-on-surface">
            Nueva contraseña
          </label>

          <input
            v-model="password"
            type="password"
            autocomplete="new-password"
            placeholder="••••••••"
            class="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
          />
        </div>

        <div>
          <label class="block mb-2 text-label-md font-medium text-on-surface">
            Confirmar contraseña
          </label>

          <input
            v-model="password_confirmation"
            type="password"
            autocomplete="new-password"
            placeholder="••••••••"
            class="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-primary text-on-primary py-3 font-semibold transition-all hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Cambiar contraseña
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { authApi, getCsrfCookie } from "@/services/api";

const route = useRoute();
const router = useRouter();

const email = route.query.email;
const token = route.query.token;

const password = ref("");
const password_confirmation = ref("");

const resetPassword = async () => {
  try {
    await getCsrfCookie(); // pide la cookie XSRF-TOKEN antes de la petición

    const response = await authApi.post("/api/reset-password", {
      email,
      token,
      password: password.value,
      password_confirmation: password_confirmation.value,
    });

    alert("Contraseña actualizada correctamente");

    // redirigir al login
    router.push("/");
  } catch (error) {
    console.log(error.response?.data);
    alert("Error al cambiar contraseña");
  }
};
</script>
