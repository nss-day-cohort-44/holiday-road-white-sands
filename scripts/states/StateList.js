const contentElement = document.querySelector(".stateSelected")
const eventHub = document.querySelector("#container")
const stateSelector = document.getElementById("stateSelect")

export const StateItenPop = () => {
    eventHub.addEventListener("broadcastState" , event =>{
        const state = stateSelector.options[stateSelect.selectedIndex].text
        if (state !== "Select a State"){

            contentElement.innerHTML = `<p>State: ${state}</p>`
        }else{
            contentElement.innerHTML = `<p>State:</p>`
        }
        
    })
    }