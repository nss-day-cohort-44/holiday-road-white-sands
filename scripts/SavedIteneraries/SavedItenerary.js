export const SavedItineraryComponent = (save) => {
    return `
    <div class="savedCard">
        <section id="save--${save.id}" class="savedItinerary">
            
                <p>Park: ${save.park}</p>
                <p>Attraction: ${save.attraction}</p>
                <p>Eatery: ${save.eatery}</p>
            
        </section>   
                        </div>
    `
}
