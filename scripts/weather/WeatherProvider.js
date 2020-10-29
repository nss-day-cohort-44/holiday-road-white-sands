import { keys } from '../Settings.js'

let weather = {}

//export const useWeather = () => weather.()

export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=37210,us&appid=${keys.weatherKey}`, {
        method: "GET"
    })
        .then(response => response.json())
        .then(parsedWeather => {
            const weatherObject = Object.assign(weather, parsedWeather)
            // console.log(weatherObject)
        })
}