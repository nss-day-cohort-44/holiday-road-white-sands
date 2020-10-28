import { getEateries, useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".eateryDropdown")

// Main Component
export const EaterySelect = () => {
    getEateries().then(() => {
        const allEateries = useEateries()
        render(allEateries)
    })
}

// Render Eatery Dropdown to DOM with values from /eateries endpoint
const render = allEateries => {
    contentTarget.innerHTML = `
    <select name="eateriesCollection" class="dropdown" id="eaterySelect">
        <option value="0"> Select an eatery: </option>
        ${officersCollection.map(
        eateryObj => {
            console.log(eateryObj)
            return `<option value="${eateryObj.id}">${eateryObj.businessName}</option>`
        }
    ).join("")
        }
    </select>
   `
}