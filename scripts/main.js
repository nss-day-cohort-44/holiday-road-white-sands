import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import { getWeather } from "./weather/WeatherProvider.js";

getAttractions().then(
    () => console.log(useAttractions())
)


getWeather()
