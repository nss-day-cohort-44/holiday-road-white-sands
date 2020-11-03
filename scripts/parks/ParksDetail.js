import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector("#container")
const contentElement = document.querySelector(".parkDetails")

export const renderParkDetails = () => {
    eventHub.addEventListener("parkDetailsButton", event => {
        const parkArray = useParks()
        const parkDropDown = event.detail.park
        const selectedPark = parkArray.find(parkObj => {
            return parkObj.id === parkDropDown
        })
        console.log(selectedPark)
        contentElement.innerHTML = `
        <div class="displayedParkDetails">
       <h4>${selectedPark.fullName}</h4>
        <p>Description: ${selectedPark.description}</p>
        <div class ="parkImageBox">
        <img class ="parkImage" src="${selectedPark.images[0].url}">
        </div>
        <div class="closeParkDetails">
        <button id="closePark">&times;</button>
        </div>
        </div>
        
        `
        console.log(selectedPark.images[0].url)


    })
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "closePark") {
        const customEvent = new CustomEvent("closeParkDetails", {

        })
        eventHub.dispatchEvent(customEvent)
        console.log("Park button heard")
    }
})
