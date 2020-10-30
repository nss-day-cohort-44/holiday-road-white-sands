import {useParks} from "./ParkProvider.js"

const eventHub = document.querySelector("#container")
const contentElement = document.querySelector(".parkDetails")

export const renderParkDetails = () => {
    eventHub.addEventListener("parkDetailsButton", event => {
        const parkArray = useParks()
        const stateSelector = document.getElementById("stateSelect")
        const stateCode = stateSelector.options[stateSelector.selectedIndex].getElementById
        const selectedPark = parkArray.find(parkObj => {
            return parkObj.state === stateCode
        })

        contentElement.innerHTML = `
        <div class="displayedParkDetails">
       
        <p> ${selectedPark.description}</p>
        <h6>Activities:<h6>
        <p> ${selectedPark.activities}</p>
       


        `


    })
}