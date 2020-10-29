const contentElement = document.querySelector(".attractionSelected")
const eventHub = document.querySelector("#container")
const attractionSelector = document.getElementById("attractionSelect")

export const AttractionItenPop = () => {
    eventHub.addEventListener("attractionPreview" , event =>{
        console.log("attraction has been changed")
        const attraction = attractionSelector.options[attractionSelect.selectedIndex].text
           if (attraction !== "Select an Attraction"){
               
               contentElement.innerHTML = `<p>Attraction: ${attraction}</p>
               <div>
               <button class ="attractionDetails">Details</button>
               </div>
               `
            }else{
                contentElement.innerHTML = `<p>Attraction:</p>`
            }
        
    })
}