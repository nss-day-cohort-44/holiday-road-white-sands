const contentElement = document.querySelector(".eaterySelected")
const eventHub = document.querySelector("#container")
const eaterySelector = document.querySelector("#eaterySelect")

export const EateryItenPop = () => {
    eventHub.addEventListener("eateryPreview" , event => {
        // console.log("eatery has been changed", event)
        // console.log(eaterySelector)
        const eatery = eaterySelector.options[eaterySelect.selectedIndex].text
        // console.log("My eatery = " , eatery)
           if (eatery !== "Select an Eatery:"){
               contentElement.innerHTML = `<p>Eatery: ${eatery}</p>
               <div>
               <button class="eateryDetails">Details</button>
               </div>
               `
            }else{
                contentElement.innerHTML = `<p>Eatery:</p>`
            }
        
    })
}
