import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";

getAttractions().then(
    () => console.log(useAttractions())
)
