const contentElement = document.querySelector(".stateSelected")

export const State = (stateObj) =>{
    return`
    <p>State: ${stateObj.stateSelect.options[stateSelect.selectedIndex].text}</p>
    `
}

