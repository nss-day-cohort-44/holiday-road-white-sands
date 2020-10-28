import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
<<<<<<< HEAD
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
=======
import { getWeather } from "./weather/WeatherProvider.js";
>>>>>>> db8d4de5cb21a5c7eea108fa6b6789fdc11223c3

getAttractions().then(
    () => console.log(useAttractions())
)

<<<<<<< HEAD
getEateries().then(
    () => console.log("This is a slice of the eateries array: ", useEateries())
)


console.log("hello")
=======

getWeather()
>>>>>>> db8d4de5cb21a5c7eea108fa6b6789fdc11223c3
