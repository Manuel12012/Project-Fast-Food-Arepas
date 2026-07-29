<script setup lang="ts">
import { ref } from "vue";
import { authApi, getCsrfCookie } from "@/services/api";

const email = ref("");
const loading = ref(false);
const message = ref("");

const sendReset = async () => {
  loading.value = true;
  try {
    await getCsrfCookie(); // obtiene/renueva la cookie XSRF-TOKEN
    await authApi.post("/api/forgot-password", { email: email.value });
    message.value = "Si el correo existe, recibirás un enlace.";
  } catch (error) {
    message.value = "Error al enviar el correo.";
  } finally {
    loading.value = false;
  }
};
</script>

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
          class="w-18 h-18 mx-auto mb-5 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container text-3xl"
        >
          🔒
        </div>

        <h1
          class="font-headline-md text-headline-md text-on-surface font-bold"
        >
          ¿Olvidaste tu contraseña?
        </h1>

        <p
          class="mt-3 text-body-md text-on-surface-variant max-w-2xl mx-auto"
        >
          Ingresa tu correo electrónico y te enviaremos un enlace para
          restablecer tu contraseña.
        </p>
      </div>

      <!-- FORM -->
      <div class="space-y-6">
        <div>
          <label
            class="block mb-2 text-label-md font-medium text-on-surface"
          >
            Correo electrónico
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="ejemplo@correo.com"
            class="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
          />
        </div>

        <button
          @click="sendReset"
          :disabled="loading"
          class="w-full rounded-xl bg-primary text-on-primary py-3 font-semibold transition-all hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ loading ? "Enviando..." : "Enviar enlace de recuperación" }}
        </button>

        <transition name="fade">
          <div
            v-if="message"
            class="rounded-xl border border-outline-variant bg-surface-container p-4"
          >
            <p class="text-center text-body-md text-on-surface">
              {{ message }}
            </p>
          </div>
        </transition>
      </div>
    </section>
  </main>
</template>