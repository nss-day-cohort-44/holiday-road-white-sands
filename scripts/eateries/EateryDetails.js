import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".eateryDetails")

export const renderEateryDetails = () => {
    eventHub.addEventListener("eateryDetailButton", event => {

        const eateryDropdown = event.detail.eateryDropdown // Change const name
        const eateryArray = useEateries()
        const selectedEatery = eateryArray.find(eateryObj => {
            return eateryObj.businessName === eateryDropdown
        })

        contentTarget.innerHTML = `
        <div class="displayedEateryDetails">
        <h4>${selectedEatery.businessName}</h4>
        <p>Description: ${selectedEatery.description}</p>
        <p>Wheelchair Accessibility: ${selectedEatery.ameneties.wheelchairAccessible}</p>
        <p>Pet Friendly: ${selectedEatery.ameneties.petFriendly}</p>
        <p>Wifi: ${selectedEatery.ameneties.wifi}</p>
        <p>Diaper Facility: ${selectedEatery.ameneties.diaperFacility}</p>
        <p>Playground: ${selectedEatery.ameneties.playground}</p>
        <p>Restrooms: ${selectedEatery.ameneties.restrooms}</p>
        <div class="closeEateryDetails">
            <button id="closeEatery">&times;</button>
        </div>
        </div>
        `
    })
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "closeEatery") {
        const customEvent = new CustomEvent ("closeEateryDetails", {
            
        })
        eventHub.dispatchEvent(customEvent)
        console.log("Dispatching closeEateryDetails")
    }
})