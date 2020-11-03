const contentElement = document.querySelector(".eaterySelected")
const eventHub = document.querySelector("#container")
const eaterySelector = document.querySelector("#eaterySelect")

export const EateryItenPop = () => {
    eventHub.addEventListener("eateryPreview" , event => {
        const eatery = event.detail.eatery
           if (eatery !== "Select an Eatery"){
               contentElement.innerHTML = `<h3>Eatery: ${eatery}</h3>
               <div class="centerDetails">
               <button id="eateryDetails">Details</button>
               </div>
               `
            }else{
                contentElement.innerHTML = ``
            }
        
    })
}
// // ^^changed else state to reset page to default state when select an eatery is re-selected in dropdown bar
eventHub.addEventListener("click", event => {
    if (event.target.id === "eateryDetails") {
        const customEvent = new CustomEvent ("eateryDetailButton", {
            detail: {
                eateryDropdown: eaterySelector.options[eaterySelect.selectedIndex].text
            }
        })
        eventHub.dispatchEvent(customEvent)
        console.log("Eatery button was pressed")
    }
})

eventHub.addEventListener("closeEateryDetails", event => {
    const contentTarget = document.querySelector(".displayedEateryDetails")
    contentTarget.style.display = "none"
})