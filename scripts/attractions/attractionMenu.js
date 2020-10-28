import { getAttractions, useAttractions } from "./AttractionProvider.js"

const state = document.getElementById("stateSelect")
const attractionsSelect = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".container")

const populateAttractionMenu = (stateCode) => {
    const bizzararies = getAttractions().then(
        useAttractions().filter(stateObj => {
        return stateObj.state = stateCode
    }))

    const htmlToAssign = bizzararies.map(attraction => {
        return `
            <option value="${attraction.id}">${attraction.name}> 
        `
    });

    attractionsSelect.innerHTML = `<select name="attractionSelect" id="attractionSelect"> ` + htmlToAssign + `</select>`
}

eventHub.addEventListener("broadcastState", e => {
    populateAttractionMenu(e.detail.stateCode)
    }
)



