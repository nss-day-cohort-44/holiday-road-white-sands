
const eventHub = document.getElementById("container")
const parkSelector = document.getElementById("parkSelect")

parkSelector.addEventListener("change", e => {
    const parkChosen = new CustomEvent("parkChosen", {
        detail: {
            parkName: parkSelector.options[parkSelect.selectedIndex].text,
            parkCode: parkSelector[parkSelect.selectedIndex].value
        }
    })
    eventHub.dispatchEvent(parkChosen)
})

eventHub.addEventListener("parkChosen", e => {
    const parkArray = useParks()

    const selectedPark = parkArray.find(park => park.parkCode === e.detail.parkCode)

    const parkLat = selectedPark.latitude

    const parkLon = selectedPark.longitude

    weatherMaker(parkLat, parkLon)

})

export const weatherMaker = (lat, lon) => {
    getWeather(lat, lon).then( () => {
        const parkWeatherObj = useWeather()


        const fiveDayWeather = parkWeatherObj.daily.slice(0, 5)
        console.log(fiveDayWeather)
    })
    
}