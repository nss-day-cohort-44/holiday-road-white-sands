import { useParks } from "../parks/ParkProvider.js"
import { getWeather, useWeather } from "./WeatherProvider.js"

const eventHub = document.getElementById("container")
const parkSelector = document.getElementById("parkSelect")

export const parkSelectorActivate = () => {
    parkSelector.addEventListener("change", e => {
        const parkChosen = new CustomEvent("parkChosen", {
            detail: {
                parkName: parkSelector.options[parkSelect.selectedIndex].text,
                parkId: parkSelector[parkSelect.selectedIndex].value
            }
        })
        
        eventHub.dispatchEvent(parkChosen)
    })
}

eventHub.addEventListener("parkChosen", e => {
    const parkArray = useParks()
    console.log(parkArray)
    const selectedPark = parkArray.find(park => park.id === e.detail.parkId)

    const parkLat = selectedPark.latitude

    const parkLon = selectedPark.longitude

    weatherMaker(parkLat, parkLon)

})

export const weatherMaker = (lat, lon) => {
    getWeather(lat, lon).then(() => {
        const parkWeatherObj = useWeather()
        const htmlTarget = document.querySelector(".weatherBox")
        const h4Nashville = document.querySelector(".h4Nashville")
        const fiveDayWeather = parkWeatherObj.daily.slice(0, 5)
        console.log(fiveDayWeather)
        const parkSelector = document.getElementById("parkSelect")
        const parkDropDown = parkSelector.options[parkSelect.selectedIndex].text
        const weatherHTML = fiveDayWeather.map(day => {
            const datept1 = day.dt * 1000
            const humanDate = new Date(datept1)
            const condensedDate = humanDate.toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric"
            })
            const high = day.temp.max
            const low = day.temp.min
            const precip = day.weather[0].description
            const iconAddress = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
            return `
                <div class="weatherDay">
                    <img src="${iconAddress}">
                    <p class="date">${condensedDate}</p>
                    <p class="highTemp">High: ${high}</p>
                    <p class="lowTemp">Low: ${low}</p>
                    <p class="rainCondition">Forecast: ${precip}</p>
                </div>
            `
        }).join("")

        htmlTarget.innerHTML = weatherHTML
        h4Nashville.innerHTML = `<h4>${parkDropDown} Forecast</h4>`
    })

}

export const defaultWeather = () => {
    getWeather(36.174465, -86.767960).then(() => {
        const htmlTarget = document.querySelector(".weatherBox")
        const nashWeather = useWeather()
        const h4Target = document.querySelector(".h4Nashville")
        const fiveDayWeather = nashWeather.daily.slice(0, 5)

        const weatherHTML = fiveDayWeather.map(day => {
            const datept1 = day.dt * 1000
            const humanDate = new Date(datept1)
            const condensedDate = humanDate.toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric"
            })
            const high = day.temp.max
            const low = day.temp.min
            const precip = day.weather[0].description
            const iconAddress = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
            return `
                <div class="weatherDay">
                    <img src="${iconAddress}">
                    <p class="date">${condensedDate}</p>
                    <p class="highTemp">High: ${high}</p>
                    <p class="lowTemp">Low: ${low}</p>
                    <p class="rainCondition">Forecast: ${precip}</p>
                </div>
            `
        }).join("")
        h4Target.innerHTML = `<h4>Nashville Forecast</h4>`
        htmlTarget.innerHTML += weatherHTML
    })
}