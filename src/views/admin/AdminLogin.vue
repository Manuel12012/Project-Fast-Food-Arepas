<script setup>
import Footer from '@/components/core/Footer.vue';
import NavBar from '@/components/core/NavBar.vue';


</script>

<template>
    <NavBar />
    <main
        class="min-h-screen pt-[80px] flex items-center justify-center bg-gradient-to-br from-surface to-surface-container-low px-margin-mobile"
        data-alt="A high-end, softly blurred food photograph featuring vibrant Latin American cuisine like golden empanadas and fresh salsa on a rustic wooden table. The lighting is warm and cinematic, creating a cozy and appetizing atmosphere. The depth of field is shallow, emphasizing textures of crispy dough and fresh herbs. The overall color palette is rich with earthy tones and bright pops of orange and red, consistent with a premium fast-food brand identity.">
        <!-- Login Container -->
        <div
            class="w-full max-w-[520px] bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0px_20px_50px_rgba(0,0,0,0.05)] border border-white/20 overflow-hidden">
            <div class="p-12 flex flex-col items-center">
                <div class="mb-10">
                    <img alt="Q'Bocao Logo" class="h-12 w-auto object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2haFq-Ub00rhJeYZYpgMxH_LG5gxArILzJ0F0qejIDCFhIaipFk72vU0KedbvN3JteagsFQYp07qQxkot1n6uVAo_TZ3Jz724Q0d69uQI4SxsMeQnhtcgOhkRzvNq0nuOlInblkJcLmlxL7MRyz-FTfx_dallq1eSJM48AsGBSx5yp0U912Hqm7Nlmx_VLeFb_hDNSQAQWK5s7JhjaFOrWoIh6wJ-zXwf32-3_2xJulWMkmwrFzkQu5SskgkziBibPVfcj3ecrY" />
                </div>
                <div class="text-center mb-10">
                    <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">¡Bienvenido de
                        nuevo!</h1>
                    <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80">Disfruta del
                        auténtico sabor latino</p>
                </div>
                <form class="w-full space-y-6">
                    <div>
                        <label class="block font-label-lg text-label-lg text-on-surface-variant mb-2" for="email">Correo
                            Electrónico</label>
                        <input
                            class="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md text-body-md placeholder:text-outline/50"
                            id="email" placeholder="tu@email.com" type="email" />
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label class="block font-label-lg text-label-lg text-on-surface-variant"
                                for="password">Contraseña</label>
                            <a class="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors"
                                href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <input
                            class="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md text-body-md placeholder:text-outline/50"
                            id="password" placeholder="••••••••" type="password" />
                    </div>
                    <button
                        class="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-headline-md text-headline-md shadow-lg shadow-primary-container/20 hover:brightness-105 active:scale-[0.99] transition-all"
                        type="submit">
                        Iniciar Sesión
                    </button>
                </form>
                <div class="w-full flex items-center gap-4 my-10">
                    <div class="flex-grow h-[1px] bg-outline-variant/50"></div>
                    <span class="font-label-sm text-label-sm text-on-surface-variant/70">o inicia sesión con</span>
                    <div class="flex-grow h-[1px] bg-outline-variant/50"></div>
                </div>
                <div class="grid grid-cols-2 gap-4 w-full mb-10">
                    <button
                        class="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-outline-variant hover:bg-surface-container-low hover:border-outline transition-all group">
                        <span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform"
                            style="font-variation-settings: 'FILL' 1; font-size: 20px;">google</span>
                        <span class="font-label-lg text-label-lg text-on-surface">Google</span>
                    </button>
                    <button
                        class="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-outline-variant hover:bg-surface-container-low hover:border-outline transition-all group">
                        <span
                            class="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform"
                            style="font-variation-settings: 'FILL' 1; font-size: 20px;">social_leaderboard</span>
                        <span class="font-label-lg text-label-lg text-on-surface">Facebook</span>
                    </button>
                </div>
                <div class="text-center">
                    <p class="font-body-md text-body-md text-on-surface-variant">
                        ¿No tienes una cuenta?
                        <a class="text-primary font-bold hover:text-primary-container transition-colors ml-1"
                            href="#">Crea una aquí</a>
                    </p>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>