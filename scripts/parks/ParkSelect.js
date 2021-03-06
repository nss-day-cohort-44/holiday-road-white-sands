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
        const park = event.detail.park
           if (park !== "0"){
               
               parkElement.innerHTML = `
               <h3>Park: ${event.detail.parkName}</h3>
               <div class="centerDetails">
               <button id="parkButton">Details</button>
               </div>
               `
            }else{
                parkElement.innerHTML = ``
            }
        
    })
}
// ^^changed else state to reset page to default state when select a park is re-selected in dropdown bar
eventHub.addEventListener("click", event => {
    if(event.target.id === "parkButton") {
        const customEvent = new CustomEvent ("parkDetailsButton",{
            detail: {
                park: parkSelect.options[parkSelect.selectedIndex].value,
                parkName: parkSelect.options[parkSelect.selectedIndex].text
            }
        })
        eventHub.dispatchEvent(customEvent)
        console.log("park button was pressed")
    }
})

eventHub.addEventListener("closeParkDetails", event => {
    const contentElement = document.querySelector(".displayedParkDetails")
    contentElement.style.display = "none"
})


