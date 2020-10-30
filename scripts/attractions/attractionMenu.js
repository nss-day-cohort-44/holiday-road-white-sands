import { getAttractions, useAttractions } from "./AttractionProvider.js"
// makes attractions dependent on state in dropdown menu
// const attractionsSelect = document.querySelector("#attractionSelect")
// const eventHub = document.querySelector("#container")

// export const populateAttractionMenu = (stateCode) => {
//     let attractions = []
//     getAttractions().then(() => {
//         attractions = useAttractions()
//         // console.log(attractions)
//         const filteredAttractions = attractions.filter(stateObj => {
//             return stateObj.state === stateCode
//         })
//         // console.log(filteredAttractions)
//         const htmlToAssign = filteredAttractions.map(attraction => {
//             return `
            
//             <option value="0">Select an Attraction</option> 
//             <option value="${attraction.id}">${attraction.name}</option> 
//             `
//         });
//         attractionsSelect.innerHTML = htmlToAssign
//     })

// }

// export const addAttractionListener = () => {
//     eventHub.addEventListener("broadcastState", e => {
//         // console.log(e.detail.stateCode)
//         populateAttractionMenu(e.detail.stateCode)
//         })
// }

// making all attractions pop up in dropdown menu
const eventHub = document.querySelector("#container")
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
        const customEvent = new CustomEvent("attractionPreview", {

        })
        eventHub.dispatchEvent(customEvent)
    }
})