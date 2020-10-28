let eateries = []

export const useEateries = () => eateries.slice()

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries", {
        method: "GET"
    })
        .then(response => response.json())
        .then(parsedEateries => {
            eateries = parsedEateries
        })
} 