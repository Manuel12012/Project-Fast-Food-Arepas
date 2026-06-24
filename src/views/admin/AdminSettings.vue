<template>
  <NavBarAdmin />

  <div class="flex min-h-screen pt-16 bg-gray-50">

    <!-- SIDEBAR -->
    <AsideAdmin class="w-64 shrink-0" />

    <!-- CONTENT -->
    <main class="flex-1 ml-64 p-6 min-w-0">

      <div class="max-w-7xl mx-auto flex flex-col gap-6">

        <!-- HEADER (igual estilo órdenes) -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <h1 class="text-2xl font-semibold text-gray-900">
            Configuración Delivery
          </h1>
          <p class="text-sm text-gray-500 mt-1">
            Define zona de cobertura, radio gratuito y costos de envío
          </p>
        </div>

        <!-- GRID -->
        <div class="grid lg:grid-cols-3 gap-6">

          <!-- MAPA (card principal) -->
          <div class="lg:col-span-2 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

            <div class="p-4 border-b border-gray-100 bg-gray-50">
              <h2 class="text-lg font-semibold text-gray-900">
                Mapa de zona de delivery
              </h2>
            </div>

            <div class="p-4">
              <div class="w-full h-[520px] rounded-xl border overflow-hidden">
                <div id="delivery-settings-map" class="w-full h-full" />
              </div>
            </div>

          </div>

          <!-- SETTINGS (igual estilo sidebar cards órdenes) -->
          <div class="flex flex-col gap-4">

            <!-- CARD 1 -->
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="text-sm font-semibold text-gray-900 mb-4">
                Zona de Delivery
              </h3>

              <div class="space-y-4">

                <div>
                  <label class="text-xs text-gray-500">Radio gratuito (km)</label>
                  <input v-model.number="freeRadiusKm" class="input" type="number" min="1" />
                </div>

                <div>
                  <label class="text-xs text-gray-500">Costo fuera de zona</label>
                  <input v-model.number="deliveryCost" class="input" type="number" min="0" step="0.01" />
                </div>

                <button
                  @click="saveSettings"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                >
                  Guardar configuración
                </button>

              </div>
            </div>

            <!-- CARD 2 -->
            <div class="bg-white border border-gray-200 rounded-xl p-5">

              <h3 class="text-sm font-semibold text-gray-900 mb-3">
                Ubicación tienda
              </h3>

              <div class="text-sm text-gray-600 space-y-1">
                <p>Lat: {{ storeLatitude }}</p>
                <p>Lng: {{ storeLongitude }}</p>
              </div>

            </div>

            <!-- CARD 3 -->
            <div class="bg-green-50 border border-green-200 rounded-xl p-5">

              <p class="text-sm font-semibold text-green-700">
                Resumen delivery
              </p>

              <p class="text-xs text-green-600 mt-2">
                Gratis dentro de {{ freeRadiusKm }} km
              </p>

              <p class="text-xs text-green-600">
                Fuera: S/ {{ deliveryCost }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  </div>
</template><script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue"
import L from "leaflet"
import "leaflet/dist/leaflet.css"          // ← aquí en el componente, no solo en main.ts
import api from "@/services/api"

// Fix de íconos para Vite
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue"
import AsideAdmin from "@/components/admin/AsideAdmin.vue"

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
})

const storeLatitude = ref(0)
const storeLongitude = ref(0)
const freeRadiusKm = ref(15)
const deliveryCost = ref(5)

let map: L.Map
let marker: L.Marker
let coverageCircle: L.Circle

function drawCircle() {
    if (coverageCircle) map.removeLayer(coverageCircle)

    coverageCircle = L.circle(
        [storeLatitude.value, storeLongitude.value],
        {
            radius: freeRadiusKm.value * 1000,
            color: "#22c55e",
            fillColor: "#22c55e",
            fillOpacity: 0.15,
            weight: 2
        }
    ).addTo(map)
}

async function loadSettings() {
    try {
        const { data } = await api.get("/api/admin/delivery-settings")
        storeLatitude.value = Number(data.store_latitude)
        storeLongitude.value = Number(data.store_longitude)
        freeRadiusKm.value = Number(data.free_radius_km)
        deliveryCost.value = Number(data.delivery_cost)
    } catch (error) {
        console.error("Error al cargar configuración:", error)
        alert("No se pudo cargar la configuración del delivery")
    }
}

onMounted(async () => {
    await loadSettings()
    await nextTick()  // ← espera que el DOM esté completamente listo

    map = L.map("delivery-settings-map").setView(
        [storeLatitude.value, storeLongitude.value],
        13
    )

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map)

    marker = L.marker([storeLatitude.value, storeLongitude.value]).addTo(map)

    drawCircle()

    map.on("click", (e) => {
        storeLatitude.value = e.latlng.lat
        storeLongitude.value = e.latlng.lng
        marker.setLatLng([storeLatitude.value, storeLongitude.value])
        drawCircle()
    })
})

watch(freeRadiusKm, () => {
    if (!map) return
    drawCircle()
})

async function saveSettings() {
    try {
        await api.put("/api/admin/delivery-settings", {
            store_latitude: storeLatitude.value,
            store_longitude: storeLongitude.value,
            free_radius_km: freeRadiusKm.value,
            delivery_cost: deliveryCost.value
        })
        alert("Configuración guardada")
    } catch (error) {
        console.error("Error al guardar:", error)
        alert("No se pudo guardar la configuración")
    }
}
</script>
