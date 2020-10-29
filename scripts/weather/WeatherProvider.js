import { keys } from '../Settings.js'

let weather = {}

export const useWeather = () => weather

<<<<<<< HEAD
export const getWeather=(lat, lon)=>
{
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly&appid=${keys.weatherKey}`, {
        method: "GET"
    })
    .then(response=>response.json())
    .then(parsedWeather=>{
        Object.assign(weather,parsedWeather)
    })
=======
export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=37210,us&appid=${keys.weatherKey}`, {
        method: "GET"
    })
        .then(response => response.json())
        .then(parsedWeather => {
            const weatherObject = Object.assign(weather, parsedWeather)
            // console.log(weatherObject)
        })
>>>>>>> master
}