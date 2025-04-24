import {fetchSoups} from "./products"
export const swipeCards = async() => {
    const data = await fetchSoups()
    console.log("This is my Data:" , data)
			  return {
			 cards: data || []
			  };
			}
	
