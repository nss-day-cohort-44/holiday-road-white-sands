const contentElement = document.querySelector(".eaterySelected")
const eventHub = document.querySelector("#container")
const eaterySelector = document.querySelector("#eaterySelect")

export const EateryItenPop = () => {
    eventHub.addEventListener("eateryPreview" , event => {
        // console.log("eatery has been changed", event)
        // console.log(eaterySelector)
        const eatery = eaterySelector.options[eaterySelect.selectedIndex].text
        // console.log("My eatery = " , eatery)
           if (eatery !== "Select an Eatery"){
               contentElement.innerHTML = `<p>Eatery: ${eatery}</p>
               <div>
               <button id="eateryDetails">Details</button>
               </div>
               `
            }else{
                contentElement.innerHTML = `<p>Eatery:</p>`
            }
        
    })
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "eateryDetails") {
        const customEvent = new CustomEvent ("eateryDetailButton", {
        
        })
        eventHub.dispatchEvent(customEvent)
        console.log("Eatery button was pressed")
    }
})

eventHub.addEventListener("closeEateryDetails", event => {
    const contentTarget = document.querySelector(".displayedEateryDetails")
    contentTarget.style.display = "none"
})