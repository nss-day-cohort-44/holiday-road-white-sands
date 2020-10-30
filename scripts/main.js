import { StateSelect } from './states/StateSelect.js'
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { getWeather, useWeather } from "./weather/WeatherProvider.js";
// import { ParksSelect } from "./parks/ParkSelect.js";
import { StateItenPop } from './states/StateList.js';
import { addAttractionListener} from "./attractions/attractionMenu.js"
import { addEateryListener, EaterySelect, populateEateriesDropdown } from './eateries/EaterySelect.js';
import { addParkListener } from './parks/ParkList.js';
import { AttractionItenPop } from './attractions/attractionList.js';
import {renderAttractionsDetails} from './attractions/attractionDetails.js'

// getEateries().then(
//     () => console.log("This is a slice of the eateries array: ", useEateries())
// )
import {ParkPop} from "./parks/ParkSelect.js"
<<<<<<< HEAD
import { defaultWeather, parkSelectorActivate } from './weather/WeatherSelect.js';
=======
import { EateryItenPop } from './eateries/EateryList.js';
>>>>>>> master

getEateries()
StateSelect()
StateSelect()
// ParksSelect()
StateSelect()
addAttractionListener()
EaterySelect()
// addEateryListener()
// populateEateriesDropdown()
StateItenPop()
addAttractionListener()
addParkListener()
AttractionItenPop()
renderAttractionsDetails()
EateryItenPop()

ParkPop()
parkSelectorActivate()
defaultWeather()