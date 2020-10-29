import { getParks, useParks } from "./ParkProvider.js"

const parkSelect = document.querySelector("#parkSelect")
const eventHub = document.querySelector("#container")

export const populateParkMenu = (stateCode) => {
    let parks = []
    getParks().then(() => {
        parks = useParks()
        const filteredParks = parks.filter(stateObj => {
            return stateObj.states === stateCode
        })
        const parkHTML = filteredParks.map(park => {
            return `
                <option value="${park.parkCode}">${park.fullName}</option> 
            `
        })
        parkSelect.innerHTML = parkHTML
    })

}

export const addParkListener = () => {
    eventHub.addEventListener("broadcastState", e => {
        populateParkMenu(e.detail.stateCode)
        })
}