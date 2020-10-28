import { StateSelect } from './states/StateSelect.js'
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { getWeather } from "./weather/WeatherProvider.js";
import { ParksSelect } from "./parks/ParkSelect.js";
import { StateItenPop } from './states/StateList.js';


getEateries().then(
    () => console.log("This is a slice of the eateries array: ", useEateries())
)


console.log("hello")
StateSelect()
getWeather()
StateSelect()
ParksSelect()
StateSelect()
StateItenPop()