import {saveTrip} from './SavedDataProvider.js'
const contentTarget = document.querySelector(".save")

const eventHub = document.querySelector("#container")

const render = () =>{
    const parkSelector = document.getElementById("parkSelect")
       const parkDropDown = parkSelector.options[parkSelect.selectedIndex].text
       const eaterySelector = document.getElementById("eaterySelect") // Change const name
        const eateryDropdown = eaterySelector.options[eaterySelect.selectedIndex].text
        const attractionSelector = document.getElementById("attractionSelect")
        const attractionDropdown = attractionSelector.options[attractionSelect.selectedIndex].text
    if( parkDropDown !== "Select a Park" && eateryDropdown !== "Select an Eatery" && attractionDropdown !== "Select an Attraction"){
            contentTarget.innerHTML = `<button id="save">Save Itenerary</button>`
    }
}

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "save"){
        const parkSelector = document.getElementById("parkSelect")
        const parkDropDown = parkSelector.options[parkSelect.selectedIndex].text
        const eaterySelector = document.getElementById("eaterySelect") // Change const name
         const eateryDropdown = eaterySelector.options[eaterySelect.selectedIndex].text
         const attractionSelector = document.getElementById("attractionSelect")
         const attractionDropdown = attractionSelector.options[attractionSelect.selectedIndex].text

        const newSavedItinerary = {
            park: parkDropDown,
            eatery: eateryDropdown,
            attraction: attractionDropdown
        }
        saveTrip(newSavedItinerary)
    }
})

export const SaveButton = () =>{
    render()
}