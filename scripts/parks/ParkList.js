import { getParks, useParks } from "./ParkProvider.js"

const selectedPark = document.querySelector("#parkSelect")
const eventHub = document.querySelector("#container")
const parkSelector = document.getElementById("parkSelect")
const contentElement = document.querySelector(".parkSelected")

export const populateParkMenu = (stateCode) => {
    let parks = []
    getParks().then(() => {
        parks = useParks()
        const filteredParks = parks.filter(stateObj => {

            return stateObj.states === stateCode
        })
        // changed render function for park select to include Select a Park here, so the += is no longer required. This fixes problem with having parks not render correctly
        const parkHTML =`<select class="parkSelect" id="parkSelect">
        <option value="0">Select a Park</option> 
        ${filteredParks.map(
            park => {
            return `<option value="${park.id}">${park.fullName}</option> `
        }).join("")
    }
    </select>`
        selectedPark.innerHTML = parkHTML
    })

}

export const addParkListener = () => {
    eventHub.addEventListener("broadcastState", e => {
        populateParkMenu(e.detail.stateCode)
        })
}

eventHub.addEventListener("change",(event) =>{
    if (event.target.id === "parkSelect"){
        const customEvent = new CustomEvent("parkPreview", {
        

        })
        
        eventHub.dispatchEvent(customEvent)
    }
})

