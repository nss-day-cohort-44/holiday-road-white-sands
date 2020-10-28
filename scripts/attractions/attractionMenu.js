const { useAttractions } = require("./AttractionProvider")

const state = document.getElementById("stateSelect")
const attractionsSelect = document.getElementById("bizzarariesSelect")
const eventHub = document.querySelector(".container")

const populateAttractionMenu = (stateCode) => {
    const bizzararies = useAttractions().filter(stateObj => {
        return stateObj.state = stateCode
    })

    const htmlToAssign = bizzaries.forEach(attraction => {
        return `
            
        `
    });
}