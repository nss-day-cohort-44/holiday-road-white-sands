import { keys } from '../Settings.js'

let parks = []

export const useParks = () => parks.slice()

export const getParks=()=>
{
    return fetch(`https://developer.nps.gov/api/v1/parks?limit=497&start=0&sort=&api_key=${keys.npsKey}`, {
        method: "GET"
    })
    .then(response=>response.json())
    .then(parsedParks=>{
        parks=parsedParks.data
    })
}