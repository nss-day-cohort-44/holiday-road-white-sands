import { StateSelect } from './states/StateSelect.js'
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { getParks, useParks } from "./parks/ParkProvider.js";
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { getWeather, useWeather } from "./weather/WeatherProvider.js";
// import { ParksSelect } from "./parks/ParkSelect.js";
import { StateItenPop } from './states/StateList.js';
import { attractionSelect} from "./attractions/attractionMenu.js"
import { addEateryListener, EaterySelect, populateEateriesDropdown } from './eateries/EaterySelect.js';
import {  addParkListener, populateParkMenu } from './parks/ParkList.js';
import { AttractionItenPop } from './attractions/attractionList.js';
import {renderAttractionsDetails} from './attractions/attractionDetails.js'

// getEateries().then(
//     () => console.log("This is a slice of the eateries array: ", useEateries())
// )
import {ParkPop} from "./parks/ParkSelect.js"
import { defaultWeather, parkSelectorActivate } from './weather/WeatherSelect.js';

getEateries()
import { EateryItenPop } from './eateries/EateryPreview.js';
import { renderParkDetails } from './parks/ParksDetail.js';
import { renderEateryDetails } from './eateries/EateryDetails.js';
import { SavedItineraryList } from './SavedIteneraries/SavedItineraryList.js';
import './SavedIteneraries/SavedItineraryButton.js'


// getEateries().then(
//     () => console.log("This is a slice of the eateries array: ", useEateries())
// )

// console.log("hello")
StateSelect()
StateSelect()
// ParksSelect()
StateSelect()
// addAttractionListener()
EaterySelect()
// addEateryListener()
// populateEateriesDropdown()
StateItenPop()
// addAttractionListener()
addParkListener()
AttractionItenPop()
renderAttractionsDetails()
EateryItenPop()
ParkPop()
parkSelectorActivate()
defaultWeather()
renderEateryDetails()
attractionSelect()
renderParkDetails()
// renderEateryDetails()
populateParkMenu()

SavedItineraryList()