<template>
    <div
        class="min-h-screen flex items-center justify-center bg-linear-to-br from-surface p-6">
        <div class="w-full max-w-2xl rounded-3xl bg-white/90 p-10 shadow-2xl">
            <!-- Encabezado -->
            <div class="text-center mb-8">
                <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                    🔑
                </div>

                <h1 class="text-3xl font-bold text-gray-800">
                    Crear nueva contraseña
                </h1>

                <p class="mt-2 text-gray-500">
                    Elige una contraseña segura para proteger tu cuenta.
                </p>
            </div>

            <!-- Formulario -->
            <form @submit.prevent="resetPassword" class="space-y-5">
                <div>
                    <label class="mb-2 block text-sm font-medium text-gray-700">
                        Nueva contraseña
                    </label>

                    <input v-model="password" type="password" placeholder="••••••••" autocomplete="new-password"
                        class="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label class="mb-2 block text-sm font-medium text-gray-700">
                        Confirmar contraseña
                    </label>

                    <input v-model="password_confirmation" type="password" placeholder="••••••••"
                        autocomplete="new-password"
                        class="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button type="submit"
                    class="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60">
                    Cambiar contraseña
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authApi, getCsrfCookie } from '@/services/api'

const route = useRoute()
const router = useRouter();

const email = route.query.email
const token = route.query.token

const password = ref('')
const password_confirmation = ref('')

const resetPassword = async () => {
    try {
        await getCsrfCookie() // pide la cookie XSRF-TOKEN antes de la petición

        const response = await authApi.post("/api/reset-password", {
            email,
            token,
            password: password.value,
            password_confirmation: password_confirmation.value
        })

        alert('Contraseña actualizada correctamente')

        // redirigir al login
        router.push("/");
        

    } catch (error) {
        console.log(error.response?.data)
        alert('Error al cambiar contraseña')
    }
}
</script>