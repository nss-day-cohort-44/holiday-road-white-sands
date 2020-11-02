import { useSavedIten, getSavedIten } from './SavedDataProvider.js'
import { SavedItineraryComponent } from './SavedItenerary.js'


const eventHub = document.querySelector("#container")
// a function to pass in the data retrieved from the api into the render function we formatted below
export const SavedItineraryList = () =>{
    getSavedIten()
    .then(() =>{
        const allSaves = useSavedIten()
        render(allSaves)
    })
}

// a render function that takes each object in an array and loops it thru the function that creates the HTML on SavedItenerary.js
const render = (itinArray) =>{
    
    const contentElement = document.querySelector("#savedIteneraries")
     let savedHTMLRep = ""
     for (const saveObject of itinArray){
         savedHTMLRep += SavedItineraryComponent(saveObject)
        }
        contentElement.innerHTML =`
        ${savedHTMLRep}`
    }
    
    // when something is added/re-render the saved itinerary section
    eventHub.addEventListener("itineraryDataAdded", () => SavedItineraryList())
