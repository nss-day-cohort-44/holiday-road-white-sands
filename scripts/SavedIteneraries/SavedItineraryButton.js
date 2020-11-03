import { saveTrip } from './SavedDataProvider.js'
const contentTarget = document.querySelector(".save")

const eventHub = document.querySelector("#container")


// if the save button clicks, then (see line 19)
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        // getting the text currently selected in the parkdrop down bar
        const parkSelector = document.getElementById("parkSelect")
        const parkDropDown = parkSelector.options[parkSelect.selectedIndex].text
        // same for eatery
        const eaterySelector = document.getElementById("eaterySelect") 
        const eateryDropdown = eaterySelector.options[eaterySelect.selectedIndex].text
        // same for attraction
        const attractionSelector = document.getElementById("attractionSelect")
        const attractionDropdown = attractionSelector.options[attractionSelect.selectedIndex].text
        // add whats selected in the text to the api in this format
        const newSavedItinerary = {
            park: parkDropDown,
            eatery: eateryDropdown,
            attraction: attractionDropdown
        }
        // run save function to get the currently selected itinerary to the api
        saveTrip(newSavedItinerary)
    }
})


// listen for changes in the eatery, park, or attraction dropdowns
eventHub.addEventListener("saveStateChanged", event => {

    // if the drop downs have something selected other than the zero value, then replace the disabled button with this working one
    if (event.detail.parkDropdown !== "Select a Park" && event.detail.eateryDropdown !== "Select an Eatery" && event.detail.attractionDropdown !== "Select an Attraction" && event.detail.state !== "Select a State") {

        contentTarget.innerHTML = `<button id="saveButton">Save Itinerary</button>`

    } else{
        contentTarget.innerHTML = `<button disabled id="saveButton">Save Itinerary</button>`
    }
})
// ^^ else statement added on line 47 to set button back to disabled if one of the 3 required choices is reset to 0 value^^


