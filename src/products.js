// This file contains functions to fetch and filter products from a JSON file.                                                                                                                                                                                                                                              


export const fetchSoups = async () => {
  try {
    const res = await fetch("products.json")
    if(!res.ok){
      throw new Error("invalid response from the json")
    }
    const products = await res.json()
    console.log(products, "this is the products")
    const soupProducts = products.filter(
      (product) => {
      const prod = product.category === "soups"
        return prod
      } 
    );
    console.log("this is soup🍲🍲",soupProducts)
    return soupProducts
  } catch (error) {
    console.log("check here", error.message);
    return []
  }
}

export const fetchRice = async () => {
  try {
    const res = await fetch("products.json")
    if(!res.ok){
      throw new Error("invalid response from the json")
    }
    const products = await res.json()
    const riceProducts = products.filter(
      (product) => {
        const prod = product.category === "rice"
        return prod
      }
    );
    console.log("this is rice🧊", riceProducts);
    return riceProducts
  } catch (error) {
    console.log("check here", error.message);
  }
}


export const fetchProtiens = async () => {
  try {
    const res = await fetch("products.json")
    if(!res.ok){
      throw new Error("invalid response from the json")
    }
    const products = await res.json()
    const proteinProducts = products.filter(
      (product) => {
        const prod = product.category === "protiens"
        return prod
      }
    );
    console.log('this is Protien🍗', proteinProducts);
    return proteinProducts
  } catch (error) {
    console.log("check here", error.message);
  }
}

