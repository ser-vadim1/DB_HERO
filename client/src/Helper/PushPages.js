export const PushPages = ( totalCards, CardsPerPage) =>{
   let pages = []
   for (let i = 1; i <= Math.ceil(totalCards/CardsPerPage); i++) {
      pages.push(i)
      
   }
   return pages
}
