const contentElement = document.querySelector(".stateSelected")
const eventHub = document.querySelector("#container")
const stateSelector = document.getElementById("stateSelect")

export const StateItenPop = () => {
    eventHub.addEventListener("broadcastState" , event =>{
        const state = stateSelector.options[stateSelect.selectedIndex].text
        if (state !== "Select a State"){

            contentElement.innerHTML = `<p>State: <h3>${state}</h3></p>`
        }else{
            contentElement.innerHTML = ``
        }
        
    })
    }
    // ^^changed else state to reset page to default state when select a state is re-selected in dropdown bar