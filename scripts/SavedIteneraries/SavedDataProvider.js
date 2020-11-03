// look for changes in the eatery, park, Or attraction dropdowns
const eventHub = document.querySelector("#container")
const parkSelector = document.getElementById("parkSelect")
const eaterySelector = document.getElementById("eaterySelect")
const attractionSelector = document.getElementById("attractionSelect")
const stateSelector = document.getElementById("stateSelect")




eventHub.addEventListener("change", event => {
    if (event.target.id === "eaterySelect" || event.target.id === "parkSelect" || event.target.id === "attractionSelect" || event.target.id === "stateSelect") {
        const customEvent = new CustomEvent ("saveStateChanged", {
            detail: {
                parkDropdown: parkSelector.options[parkSelect.selectedIndex].text,
                eateryDropdown: eaterySelector.options[eaterySelect.selectedIndex].text,
                attractionDropdown: attractionSelector.options[attractionSelect.selectedIndex].text,
                state: stateSelector.options[stateSelect.selectedIndex].text
            }
        })
        console.log("change event triggered")
        eventHub.dispatchEvent(customEvent)
    }
})
// check for anything to change
const apiStateChangeEvent = () =>{
    const newEvent = new CustomEvent("itineraryDataAdded")

    eventHub.dispatchEvent(newEvent)
}


let savedIten = []
// get a slice of the savedIten array
export const useSavedIten = () =>{

    return savedIten.slice()
} 

// get the saved itinerary data from the api and store it in the "savedIten" array we created
export const getSavedIten = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(
            parsedSave => {
                savedIten = parsedSave
        }
    )
}


// post whatever is passed in as an argument to the api in JSON format
export const saveTrip = save => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(save)
    })
    // then retrieve the data
    .then(getSavedIten)
    // then run the event created above to now check for anything changed in the api
    .then(apiStateChangeEvent)
}

