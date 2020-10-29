import { keys } from '../Settings.js'

let weather = {}

export const useWeather = () => weather

export const getWeather=(zip)=>
{
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&appid=${keys.weatherKey}`, {
        method: "GET"
    })
    .then(response=>response.json())
    .then(parsedWeather=>{
        const weatherObject = Object.assign(weather,parsedWeather)
        console.log(weatherObject)
    })
}