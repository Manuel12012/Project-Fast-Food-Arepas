<template>
  <NavBarAdmin />

  <div class="flex min-h-screen pt-16 bg-surface transition-colors duration-300">
    <!-- SIDEBAR -->
    <AsideAdmin class="w-64 shrink-0" />

    <!-- CONTENT -->
    <main class="flex-1 ml-64 p-6 min-w-0">
      <div class="w-full mx-auto flex flex-col gap-6">
        <!-- HEADER -->
        <div
          class="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 transition-colors"
        >
          <h1 class="text-2xl font-semibold text-on-background">Configuración Delivery</h1>

          <p class="text-sm text-on-surface-variant mt-1">
            Define zona de cobertura, radio gratuito y costos de envío
          </p>
        </div>

        <!-- GRID -->
        <div class="grid lg:grid-cols-3 gap-6">
          <!-- MAPA -->
          <div
            class="lg:col-span-2 bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden shadow-sm"
          >
            <div class="p-4 border-b border-outline-variant/40 bg-surface-container">
              <h2 class="text-lg font-semibold text-on-background">Mapa de zona de delivery</h2>
            </div>

            <div class="p-4">
              <div
                class="w-full h-[520px] rounded-xl border border-outline-variant overflow-hidden"
              >
                <div id="delivery-settings-map" class="w-full h-full" />
              </div>
            </div>
          </div>

          <!-- SETTINGS -->
          <div class="flex flex-col gap-4">
            <!-- CARD ZONA -->
            <div
              class="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5"
            >
              <h3 class="text-sm font-semibold text-on-background mb-4">Zona de Delivery</h3>

              <div class="space-y-4">
                <div class="flex items-center justify-between gap-3">
                  <label class="text-xs text-on-surface-variant"> Radio gratuito (km) </label>

                  <input
                    v-model.number="freeRadiusKm"
                    class="w-24 rounded-lg border border-outline-variant bg-surface text-on-background px-3 py-2"
                    type="number"
                    min="1"
                  />
                </div>

                <div class="flex items-center justify-between gap-3">
                  <label class="text-xs text-on-surface-variant"> Costo fuera de zona </label>

                  <input
                    v-model.number="deliveryCost"
                    class="w-24 rounded-lg border border-outline-variant bg-surface text-on-background px-3 py-2"
                    type="number"
                    min="0"
                    step="0.01"
                  />
                </div>

                <button
                  @click="saveSettings"
                  class="w-full bg-primary text-on-primary hover:bg-primary-container text-sm font-medium py-2.5 rounded-lg transition-colors"
                >
                  Guardar configuración
                </button>
              </div>
            </div>

            <!-- UBICACION -->
            <div
              class="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5"
            >
              <h3 class="text-sm font-semibold text-on-background mb-3">Ubicación tienda</h3>

              <div class="text-sm text-on-surface-variant space-y-1">
                <p>
                  Lat:
                  {{ storeLatitude }}
                </p>

                <p>
                  Lng:
                  {{ storeLongitude }}
                </p>
              </div>
            </div>

            <!-- RESUMEN -->
            <div
              class="bg-secondary-container/20 border border-secondary-container/30 rounded-xl p-5"
            >
              <p class="text-sm font-semibold text-secondary">Resumen delivery</p>

              <p class="text-xs text-on-surface-variant mt-2">
                Gratis dentro de
                {{ freeRadiusKm }}
                km
              </p>

              <p class="text-xs text-on-surface-variant">Fuera: EUR {{ deliveryCost }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // ← aquí en el componente, no solo en main.ts
import { api } from "@/services/api";

// Fix de íconos para Vite
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue";
import AsideAdmin from "@/components/admin/AsideAdmin.vue";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const storeLatitude = ref(-12.0464);
const storeLongitude = ref(-77.0428);
const freeRadiusKm = ref(15);
const deliveryCost = ref(5);

let map: L.Map;
let marker: L.Marker;
let coverageCircle: L.Circle;

function drawCircle() {
  if (coverageCircle) map.removeLayer(coverageCircle);

  coverageCircle = L.circle([storeLatitude.value, storeLongitude.value], {
    radius: freeRadiusKm.value * 1000,
    color: "#22c55e",
    fillColor: "#22c55e",
    fillOpacity: 0.15,
    weight: 2,
  }).addTo(map);
}

async function loadSettings() {
  try {
    const { data } = await api.get("/api/admin/delivery-settings");

    storeLatitude.value = data.store_latitude ? Number(data.store_latitude) : -12.0464;

    storeLongitude.value = data.store_longitude ? Number(data.store_longitude) : -77.0428;

    freeRadiusKm.value = Number(data.free_radius_km ?? 15);
    deliveryCost.value = Number(data.delivery_cost ?? 5);
  } catch (error) {
    console.error("Error al cargar configuración:", error);
    alert("No se pudo cargar la configuración del delivery");
  }
}

onMounted(async () => {
  await loadSettings();
  await nextTick(); // ← espera que el DOM esté completamente listo

  map = L.map("delivery-settings-map").setView([storeLatitude.value, storeLongitude.value], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  marker = L.marker([storeLatitude.value, storeLongitude.value]).addTo(map);

  drawCircle();

  map.on("click", (e) => {
    storeLatitude.value = e.latlng.lat;
    storeLongitude.value = e.latlng.lng;
    marker.setLatLng([storeLatitude.value, storeLongitude.value]);
    drawCircle();
  });
});

watch(freeRadiusKm, () => {
  if (!map) return;
  drawCircle();
});

async function saveSettings() {
  try {
    await api.put("/api/admin/delivery-settings", {
      store_latitude: storeLatitude.value,
      store_longitude: storeLongitude.value,
      free_radius_km: freeRadiusKm.value,
      delivery_cost: deliveryCost.value,
    });
    alert("Configuración guardada");
  } catch (error) {
    console.error("Error al guardar:", error);
    alert("No se pudo guardar la configuración");
  }
}
</script>
