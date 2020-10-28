const eventHub = document.querySelector(".container")
const stateSelect = document.getElementById("stateSelect")

export const stateChanged = () => {
    stateSelect.addEventListener("change", e => {
        const stateID = stateSelect.value
        const state = stateSelect.options[stateSelect.selectedIndex].text
        const stateCode = stateSelect.options[stateSelect.selectedIndex].id
        console.log(state, stateCode)
        const stateBroadcast = new CustomEvent("broadcastState", {
            detail: {
                state: state,
                stateCode: stateCode,
                idNumber: stateID

            }
        })
        dispatchEvent(stateBroadcast)
    })
}