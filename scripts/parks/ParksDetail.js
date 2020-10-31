import {useParks} from "./ParkProvider.js"

const eventHub = document.querySelector("#container")
const contentElement = document.querySelector(".parkDetails")

export const renderParkDetails = () => {
    eventHub.addEventListener("parkDetailsButton", event => {
        const parkArray = useParks()
       const parkSelector = document.getElementById("parkSelect")
       const parkDropDown = parkSelector.options[parkSelect.selectedIndex].text
        const selectedPark = parkArray.find(parkObj => {
            return parkObj.fullName === parkDropDown
        })

        contentElement.innerHTML = `
        <div class="displayedParkDetails">
       
        <p>Description: ${selectedPark.description}</p>
        <div class="closeParkDetails">
        <button id="closePark">&times;</button>
        </div>
        </div>
        
        `
        // contentElement.style.backgroundImage = 'url(`${selectedPark.images[1].url}`)'

    })
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "closePark"){
        const customEvent = new CustomEvent("closeParkDetails", {

        })
        eventHub.dispatchEvent(customEvent)
        console.log("Park button heard")
    }
})
