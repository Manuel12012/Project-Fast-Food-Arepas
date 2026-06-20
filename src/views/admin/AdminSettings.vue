<template>
    <NavBarAdmin />
    <AsideAdmin />
  
    <main class="ml-64 pt-20 p-6 min-h-screen bg-gray-50">
  
      <h1 class="text-3xl font-bold mb-6">
        Configuración Delivery
      </h1>
  
      <div class="grid lg:grid-cols-3 gap-6">
  
        <!-- MAPA -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow p-4">
  
          <div
            id="delivery-settings-map"
            class="w-full h-[500px] rounded-xl border"
          />
  
        </div>
  
        <!-- CONFIGURACIÓN -->
        <div class="bg-white rounded-xl shadow p-6">
  
          <h2 class="text-xl font-semibold mb-4">
            Zona de Delivery
          </h2>
  
          <div class="space-y-4">
  
            <div>
              <label class="block mb-2 font-medium">
                Radio gratuito (km)
              </label>
  
              <input
                v-model.number="freeRadiusKm"
                type="number"
                min="1"
                class="w-full border rounded-lg p-3"
              />
            </div>
  
            <div>
              <label class="block mb-2 font-medium">
                Costo delivery fuera de zona
              </label>
  
              <input
                v-model.number="deliveryCost"
                type="number"
                min="0"
                step="0.01"
                class="w-full border rounded-lg p-3"
              />
            </div>
  
            <div class="border rounded-lg p-4 bg-gray-50">
  
              <p class="font-medium">
                Ubicación de la tienda
              </p>
  
              <p class="text-sm text-gray-600 mt-1">
                Lat: {{ storeLatitude }}
              </p>
  
              <p class="text-sm text-gray-600">
                Lng: {{ storeLongitude }}
              </p>
  
            </div>
  
            <div class="border rounded-lg p-4 bg-green-50">
  
              <p class="font-medium text-green-700">
                Delivery gratuito
              </p>
  
              <p class="text-sm mt-1">
                Dentro de {{ freeRadiusKm }} km
              </p>
  
              <p class="text-sm">
                Fuera del radio: S/ {{ deliveryCost }}
              </p>
  
            </div>
  
            <button
              @click="saveSettings"
              class="w-full bg-primary text-white py-3 rounded-lg"
            >
              Guardar configuración
            </button>
  
          </div>
  
        </div>
  
      </div>
  
    </main>
  </template>

<script setup lang="ts">
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
