import { stateChanged } from './states/StateSelect.js'  
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { getWeather } from "./weather/WeatherProvider.js";


getAttractions().then(
    () => console.log(useAttractions())
)

getEateries().then(
    () => console.log("This is a slice of the eateries array: ", useEateries())
)

stateChanged()
console.log("hello")
getWeather()

