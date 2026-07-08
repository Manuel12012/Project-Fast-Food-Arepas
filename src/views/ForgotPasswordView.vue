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
<div class="flex items-center justify-center min-h-screen"> <div class="w-full max-w-2xl p-6 bg-white rounded-xl shadow">      <!-- Encabezado -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
          🔒
        </div>

        <h1 class="text-3xl font-bold text-gray-800">
          ¿Olvidaste tu contraseña?
        </h1>

        <p class="mt-2 text-gray-500">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>
      </div>

      <!-- Formulario -->
      <div class="space-y-5">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700">
            Correo electrónico
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="ejemplo@correo.com"
            class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <button
          @click="sendReset"
          :disabled="loading"
          class="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ loading ? "Enviando..." : "Enviar enlace de recuperación" }}
        </button>

        <transition name="fade">
          <p
            v-if="message"
            class="rounded-xl bg-gray-100 p-3 text-center text-sm text-gray-700"
          >
            {{ message }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>