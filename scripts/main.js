import { StateSelect } from './states/StateSelect.js'
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { getWeather } from "./weather/WeatherProvider.js";
// import { ParksSelect } from "./parks/ParkSelect.js";
import { StateItenPop } from './states/StateList.js';
import { addAttractionListener} from "./attractions/attractionMenu.js"
import { addEateryListener, EaterySelect, populateEateriesDropdown } from './eateries/EaterySelect.js';
import { addParkListener } from './parks/ParkList.js';
import { AttractionItenPop } from './attractions/attractionList.js';


getEateries().then(
    () => console.log("This is a slice of the eateries array: ", useEateries())
)

console.log("hello")
StateSelect()
getWeather()
StateSelect()
// ParksSelect()
StateSelect()
addAttractionListener()
EaterySelect()
addEateryListener()
populateEateriesDropdown()
StateItenPop()
addAttractionListener()
addParkListener()
AttractionItenPop()
