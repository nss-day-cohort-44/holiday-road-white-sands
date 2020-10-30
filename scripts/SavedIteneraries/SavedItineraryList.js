import { useSavedIten, getSavedIten } from './SavedDataProvider.js'
import { SavedItineraryComponent } from './SavedItenerary.js'

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
//  */
const eventHub = document.querySelector("#container")

export const SavedItineraryList = () =>{
    getSavedIten()
    .then(() =>{
        const allSaves = useSavedIten()
        render(allSaves)
    })
}


const render = (itinArray) =>{
    
    const contentElement = document.querySelector(".savedIteneraries")
     let savedHTMLRep = ""
     for (const saveObject of itinArray){
         savedHTMLRep += SavedItineraryComponent(saveObject)
        }
        contentElement.innerHTML =`
        ${savedHTMLRep}`
    }

    eventHub.addEventListener("saveStateChanged", () =>SavedItineraryList())