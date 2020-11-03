import { getAttractions, useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector("#container")
const attractionSelector = document.getElementById("attractionSelect")


export const attractionSelect = () => {
    getAttractions().then(() => {
        const allAttractions = useAttractions()
        render(allAttractions)
    })
}

// Render attraction Dropdown to DOM with values from /eateries endpoint
const contentTarget = document.querySelector("#attractionSelect")
const render = allAttractions => {
    contentTarget.innerHTML += `
    
        ${allAttractions.map(
        attractionObj => {
            return `<option value="${attractionObj.id}">${attractionObj.name}</option>`
        }
    ).join("")
        }
   `
    }

eventHub.addEventListener("change",(event) =>{
    if (event.target.id === "attractionSelect"){
        console.log(attractionSelector.options)
        const customEvent = new CustomEvent("attractionPreview", {
            detail: {
                attraction: attractionSelector.options[attractionSelector.selectedIndex].text
            }

        })
        eventHub.dispatchEvent(customEvent)
    }
})