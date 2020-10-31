import { getParks, useParks } from "./ParkProvider.js"
const eventHub = document.querySelector("#container")
const parkSelect = document.querySelector("#parkSelect")
const parkElement = document.querySelector(".parkSelected")


// export const ParksSelect = () =>{
//     getParks().then(()=>{
//             const parks= useParks()
//             render(parks)
//     })
// }
const contentElement = document.querySelector("#parkSelect")
// const render = parksCollection =>{

//     contentElement.innerHTML = `
   
//         ${parksCollection.map(
//             parksObj =>{
//                 return `
//                 <option value="0">Select a Park</option> 
//                 <option value="">${parksObj.name}</option>
//                 `
//             }
//         )
//     }
//     </select>
//    ` 
// }


export const ParkPop = () => {
    eventHub.addEventListener("parkPreview" , event =>{
        console.log("park has been changed")
        const park = parkSelect.options[parkSelect.selectedIndex].text
           if (park !== "Select a Park"){
               
               parkElement.innerHTML = `
               <div>
               <p>Park: <h3>${park}</h3></p>
               <button id="parkButton">Details</button>
               </div>
               `
            }else{
                parkElement.innerHTML = `<p>Park:</p>`
            }
        
    })
}

eventHub.addEventListener("click", event => {
    if(event.target.id === "parkButton") {
        const customEvent = new CustomEvent ("parkDetailsButton",{

        })
        eventHub.dispatchEvent(customEvent)
        console.log("park button was pressed")
    }
})

eventHub.addEventListener("closeParkDetails", event => {
    const contentElement = document.querySelector(".displayedParkDetails")
    contentElement.style.display = "none"
})


eventHub.addEventListener("change", event =>{
    if(event.target.id ==="eaterySelect" && event.target.id ==="parkSelect" && event.target.id === "attractionSelect"){
        const customEvent = new CustomEvent("enableSaveButton", {

        })
        eventHub.dispatchEvent(customEvent)
        console.log("all three changed")
    }
})