/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () =>{
    const saveStateChangedEvent = new CustomEvent("saveStateChanged")

    eventHub.dispatchEvent(saveStateChangedEvent)
}

let savedIten = []
export const useSavedIten = () =>{

    return savedIten.itineraries.slice()
} 


export const getSavedIten = () => {
    return fetch('http://localhost:8088/db')
        .then(response => response.json())
        .then(
            parsedSave => {
                savedIten = parsedSave
        }
    )
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const saveTrip = save => {
    return fetch('http://localhost:8088/db', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(save)
    })
    .then(getSavedIten)
    .then(dispatchStateChangeEvent)
}