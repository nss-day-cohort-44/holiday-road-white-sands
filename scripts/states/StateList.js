const contentElement = document.querySelector(".stateSelected")
const eventHub = document.querySelector("#container")
const stateSelector = document.getElementById("stateSelect")

export const StateItenPop = () => {
    eventHub.addEventListener("broadcastState" , event =>{
        const state = stateSelector.options[stateSelect.selectedIndex].text
            contentElement.innerHTML += `<p>State:${state}</p>`
        
    })
    }