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
        ${allEateries.map(
        eateryObj => {
            return `<option value="${eateryObj.id}">${eateryObj.businessName}</option>`
        }
    ).join("")
        }
    </select>
   `
}



// Dillon's Code
// This CustomEvent is being sent from the stateSelect dropdown and needs to be listened for by the EaterySelect dropdown.

// Reference stateSelect dropdown id
const stateSelector = document.getElementById("stateSelect")

stateSelector.addEventListener("change", e => {
    // stateID refers to the value (Ex: "1") of stateSelect dropdown, returned as a string
    const stateID = stateSelector.value
    // state refers to the text inside of the selected stateSelect dropdown option (Ex: "Alabama")
    const state = stateSelector.options[stateSelect.selectedIndex].text
    // stateCode refers to the id (Ex: "AL") of the selected stateSelect dropdown option
    const stateCode = `${stateSelector.options[stateSelect.selectedIndex].id}`

    // console.log(state, stateCode)
    const stateBroadcast = new CustomEvent("broadcastState", {
        detail: {
            state: state,
            stateCode: stateCode,
            idNumber: stateID

        }
    })
    eventHub.dispatchEvent(stateBroadcast)
})


// TODO:
// Add EventListener to EaterySelect dropdown that listens for "broadcastState" custom event.
export const addEateryListener = () => {
    eventHub.addEventListener("broadcastState", e => {
        // console.log(e.detail.stateCode)
        populateEateriesDropdown(e.detail.stateCode)
    })
}

// When broadcastState is heard, autopopulate EaterySelect dropdown (populateEateryMenu)
export const populateEateriesDropdown = (stateCode) => {
    let eateries = []
    getEateries().then(() => {
        eateries = useEateries()
        // console.log(eateries)
        const filteredEateries = eateries.filter(stateObj => {
            return stateObj.state === stateCode
        })
        // console.log(filteredEateries)
        const htmlToAssign = filteredEateries.map(eateryObj => {
            return `
                <select name="eateriesCollection" class="dropdown" id="eaterySelect">
                <option value="${eateryObj.id}">${eateryObj.businessName}</option> 
            `
        });
        contentTarget.innerHTML = htmlToAssign
    })

}

// Add details button functionality to Eatery in Itenerary Preview