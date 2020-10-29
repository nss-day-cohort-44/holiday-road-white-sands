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
        console.log(filteredParks)
        const parkHTML = filteredParks.map(park => {
            return `
                <option value="${park.id}">${park.fullName}</option> 
            `
        })
        selectedPark.innerHTML = parkHTML
    })

}

export const addParkListener = () => {
    eventHub.addEventListener("broadcastState", e => {
        console.log(e.detail.stateCode)
        populateParkMenu(e.detail.stateCode)
        })
}

eventHub.addEventListener("change",(event) =>{
    console.log("What up")
    if (event.target.id === "parkSelect"){
        const customEvent = new CustomEvent("parkPreview", {
        

        })
        eventHub.dispatchEvent(customEvent)
    }
})