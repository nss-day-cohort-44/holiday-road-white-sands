import { getParks, useParks } from "./parks/ParkProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";

getParks().then(
    () => console.log(useParks())
)


getWeather()
