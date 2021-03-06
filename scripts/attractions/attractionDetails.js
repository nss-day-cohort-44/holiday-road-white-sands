import { getAttractions, useAttractions } from "./AttractionProvider.js"

const contentElement = document.querySelector(".attractionDetails")
const eventHub = document.querySelector("#container")



    




export const renderAttractionsDetails= () =>{
    eventHub.addEventListener("attractionDetailsButton", event => {
        const attractionDropdown = event.detail.dropdown
        const attractionArray = useAttractions()
        const selectedAttraction = attractionArray.find( attractionObj =>{
            return attractionObj.name === attractionDropdown
        })
        contentElement.innerHTML = `
                                    <div class ="displayedAttractionDetails">
                                    <h4>${selectedAttraction.name}</h4>
                                    <p> Description: ${selectedAttraction.description}</p>
                                    <p>Souvenirs: ${selectedAttraction.ameneties.souvenirs}</p>
                                    <p>Restrooms: ${selectedAttraction.ameneties.restrooms}</p>
                                    <div class="closeAttBox">
                                    <button id="closeAtt">&times;</button>
                                    </div>
                                    </div>
        `
    })
    

}

eventHub.addEventListener("click", (event) =>{
    if (event.target.id === "closeAtt"){
        const customEvent = new CustomEvent("closeAttraction", {

        })
        eventHub.dispatchEvent(customEvent)
        
    }
})