import { getParks, useParks } from "./parks/ParkProvider.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js"

getParks().then(
    () => console.log(useParks())
)

getEateries().then(
    () => console.log("This is a slice of the eateries array: ", useEateries())
)


console.log("hello")
