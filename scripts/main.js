import { getParks, useParks } from "./parks/ParkProvider.js";

getParks().then(
    () => console.log(useParks())
)

console.log("hello")
