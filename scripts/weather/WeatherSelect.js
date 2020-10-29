import { getWeather, useWeather } from "./WeatherProvider"

const eventHub = document.getElementById("container")
const parkSelector = document.getElementById("parkSelect")

parkSelector.addEventListener("change", e => {
    const parkChosen = new CustomEvent("parkChosen", {
        detail: {
            park = parkSelector.options[parkSelect.selectedIndex].text,
            parkCode = parkSelector[parkSelect.selectedIndex].id
        }
    })
    eventHub.dispatchEvent(parkChosen)
})