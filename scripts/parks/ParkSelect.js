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
const contentElement = document.querySelector(".parkDropdown")
const render = parksCollection =>{

    contentElement.innerHTML = `
    <select class="parkSelect" id="parkSelect">
        <option value="0">Select a Park</option>
        ${parksCollection.map(
            parksObj =>{
                return `
                <option value="${parksObj.id}">${parksObj.name}</option>
                `
            }
        )
    }
    </select>
   ` 
}


export const ParkPop = () => {
    eventHub.addEventListener("parkPreview" , event =>{
        console.log("park has been changed")
        const park = parkSelect.options[parkSelect.selectedIndex].text
           if (park !== "Select a Park"){
               
               parkElement.innerHTML = `
               <div>
               <h3>${park}</h3>
               <button class ="parkButton">Details</button>
               </div>
               `
            }else{
                parkElement.innerHTML = `<p>Park:</p>`
            }
        
    })
}

eventHub.addEventListener("click", event => {
    if(event.target.id === "parkDetails") {
        const customEvent = new CustomEvent ("parkDetailsButton",{

        })
        eventHub.dispatchEvent(customEvent)
        console.log("park button was pressed")
    }
})