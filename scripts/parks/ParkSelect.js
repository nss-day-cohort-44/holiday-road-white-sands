import { getParks, useParks } from "./ParkProvider.js"
const eventHub = document.querySelector(".parkDropdown")

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
                return `<option value="${parksObj.id}">${parksObj.name}</option>`
            }
        )
    }
    </select>
   ` 
}

