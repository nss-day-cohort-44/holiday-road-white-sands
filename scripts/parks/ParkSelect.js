import { getParks, useParks } from "./ParkProvider.js"
const eventHub = document.querySelector("#container")
const parkDropdown = document.querySelector("#parkSelect")

// export const ParksSelect = () =>{
//     getParks().then(()=>{
//             const parks= useParks()
//             render(parks)
//     })
// }
const contentElement = document.querySelector(".parkDropdown")
const render = parksCollection =>{

    contentElement.innerHTML = `
    <select class="parkSelect" id="nationalPark">
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


parkDropdown.addEventListener("change",(event) =>{
    console.log("What up")
    if (event.target.id === "parkSelect"){
        const customEvent = new CustomEvent("parkPreview", {
        

        })
        eventHub.dispatchEvent(customEvent)
    }
})