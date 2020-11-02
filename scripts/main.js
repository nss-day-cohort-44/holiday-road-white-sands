import { StateSelect } from './states/StateSelect.js'
import { getEateries } from "./eateries/EateryProvider.js"
import { StateItenPop } from './states/StateList.js';
import { attractionSelect} from "./attractions/attractionMenu.js"
import { EaterySelect } from './eateries/EaterySelect.js';
import { addParkListener, populateParkMenu } from './parks/ParkList.js';
import { AttractionItenPop } from './attractions/attractionList.js';
import {renderAttractionsDetails} from './attractions/attractionDetails.js'
import {ParkPop} from "./parks/ParkSelect.js"
import { defaultWeather, parkSelectorActivate } from './weather/WeatherSelect.js';
import { EateryItenPop } from './eateries/EateryPreview.js';
import { renderParkDetails } from './parks/ParksDetail.js';
import { renderEateryDetails } from './eateries/EateryDetails.js';
import { SavedItineraryList } from './SavedIteneraries/SavedItineraryList.js';
import './SavedIteneraries/SavedItineraryButton.js'


getEateries()
StateSelect()
StateSelect()
StateSelect()
EaterySelect()
StateItenPop()
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
populateParkMenu()
SavedItineraryList()