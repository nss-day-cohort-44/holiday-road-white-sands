let attractions = []

export const useAttractions = () => attractions.slice()

export const getAttractions = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`, {
        method: "GET"
    })
    .then(response=>response.json())
    .then(parsedAttractions=>{
        attractions=parsedAttractions
    })
}