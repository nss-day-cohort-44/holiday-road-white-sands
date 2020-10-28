import { getAttractions, useAttractions } from "./AttractionProvider.js"

const state = document.getElementById("stateSelect")
const attractionsSelect = document.getElementById("bizzarariesSelect")
const eventHub = document.querySelector(".container")

const populateAttractionMenu = (stateCode) => {
    const bizzararies = getAttractions().then(
        useAttractions().filter(stateObj => {
        return stateObj.state = stateCode
    }))

    const htmlToAssign = bizzaries.forEach(attraction => {
        return `
            <option value="${attraction.id}">${attraction.name}> 
        `
    });

    attractionsSelect.innerHTML = htmlToAssign
}