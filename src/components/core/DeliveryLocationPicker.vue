<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import L from "leaflet"


const emit = defineEmits<{
    (
        e: "location-selected",
        payload: {
            address: string
            latitude: number
            longitude: number
        }
    ): void
}>()

const query = ref("")
const suggestions = ref<any[]>([])
const radiusKm = ref(5)
let coverageCircle: L.Circle | null = null
const selectedAddress = ref("")
const latitude = ref<number | null>(null)
const longitude = ref<number | null>(null)

let map: L.Map
let marker: L.Marker | null = null

let timeout: number

const searchAddress = () => {
    clearTimeout(timeout)

    timeout = window.setTimeout(async () => {

        if (query.value.length < 3) {
            suggestions.value = []
            return
        }

        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query.value)}&countrycodes=pe&limit=5`
        )

        suggestions.value = await response.json()

    }, 500)
}

function drawCoverageCircle(
    lat: number,
    lng: number
) {

    if (coverageCircle) {
        map.removeLayer(coverageCircle)
    }

    coverageCircle = L.circle(
        [lat, lng],
        {
            radius: radiusKm.value * 1000,
            color: "#EF6C22",
            fillColor: "#EF6C22",
            fillOpacity: 0.15,
            weight: 2
        }
    ).addTo(map)
}
watch(radiusKm, () => {

    if (
        latitude.value === null ||
        longitude.value === null
    ) {
        return
    }

    drawCoverageCircle(
        latitude.value,
        longitude.value
    )
})
const selectSuggestion = (place: any) => {
    selectedAddress.value = place.display_name

    latitude.value = Number(place.lat)
    longitude.value = Number(place.lon)

    suggestions.value = []

    map.setView(
        [latitude.value, longitude.value],
        17
    )

    if (marker) {
        map.removeLayer(marker)
    }

    marker = L.marker([
        latitude.value,
        longitude.value
    ]).addTo(map)

    drawCoverageCircle(
        latitude.value,
        longitude.value
    )
    emit("location-selected", {
        address: selectedAddress.value,
        latitude: latitude.value,
        longitude: longitude.value
    })
}

onMounted(() => {

    map = L.map("delivery-map").setView(
        [-12.046374, -77.042793],
        13
    )

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "&copy; OpenStreetMap contributors"
        }
    ).addTo(map)

    map.on("click", async (e) => {


        const lat = e.latlng.lat
        const lng = e.latlng.lng

        console.log("Lat:", lat)
        console.log("Lng:", lng)


        latitude.value = lat
        longitude.value = lng

        if (marker) {
            map.removeLayer(marker)
        }

        marker = L.marker([lat, lng]).addTo(map)

        drawCoverageCircle(lat, lng)
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query.value)}&countrycodes=pe&limit=5`
            )

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`)
            }

            suggestions.value = await response.json()

        } catch (error) {
            console.error(error)
            suggestions.value = []
        }

        console.log("Dirección:", selectedAddress.value)

        emit("location-selected", {
            address: selectedAddress.value,
            latitude: lat,
            longitude: lng
        })
        console.log("Emit ejecutado")
    })

})
</script>

<template>
    <div class="space-y-4">
        <div>
            <label class="block mb-2 font-medium">
                Dirección de entrega
            </label>

            <input v-model="query" @input="searchAddress" type="text" placeholder="Busca tu dirección..."
                class="w-full border rounded-lg p-3" />

            <div v-if="suggestions.length" class="bg-white border rounded-lg mt-1 shadow">
                <button v-for="place in suggestions" :key="place.place_id" @click="selectSuggestion(place)"
                    class="w-full text-left px-4 py-2 hover:bg-gray-100">
                    {{ place.display_name }}
                </button>
            </div>
        </div>

        <div id="delivery-map" class="w-full h-96 rounded-xl border" />

        <div v-if="selectedAddress" class="bg-gray-50 p-3 rounded-lg">
            <p class="font-medium">
                Dirección seleccionada
            </p>

            <p class="text-sm text-gray-600">
                {{ selectedAddress }}
            </p>
        </div>

    </div>
</template>