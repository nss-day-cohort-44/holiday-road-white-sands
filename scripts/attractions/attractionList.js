const contentElement = document.querySelector(".attractionSelected")
const eventHub = document.querySelector("#container")
const attractionSelector = document.getElementById("attractionSelect")

export const AttractionItenPop = () => {
    eventHub.addEventListener("attractionPreview" , event =>{
        // console.log("attraction has been changed")
        const attraction = event.detail.attraction
           if (attraction !== "Select an Attraction"){
               
               contentElement.innerHTML = `<h3>Attraction: ${attraction}</h3>
               <div class="centerDetails">
               <button id ="attractionDetails">Details</button>
               </div>
               `
            }else{
                contentElement.innerHTML = ``
            }
        
    })
}
// ^^changed else state to reset page to default state when select an attraction is re-selected in dropdown bar
eventHub.addEventListener("click", (event) =>{
    if(event.target.id === "attractionDetails"){
        const customEvent = new CustomEvent("attractionDetailsButton",{
            detail: {
                dropdown: attractionSelector.options[attractionSelect.selectedIndex].text
            }
        })
        eventHub.dispatchEvent(customEvent)
    
    }
})

eventHub.addEventListener("closeAttraction", event =>{
    const contentTarget = document.querySelector(".displayedAttractionDetails")
    contentTarget.style.display = "none"
})