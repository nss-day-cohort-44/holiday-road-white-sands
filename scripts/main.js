import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js"

getAttractions().then(
    () => console.log(useAttractions())
)
<<<<<<< HEAD

getEateries().then(
    () => console.log("This is a slice of the eateries array: ", useEateries())
)


console.log("hello")
=======
>>>>>>> master
