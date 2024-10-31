const fetchProducts = async () => {
  try {
    const response = await fetch("products.json");

    if (!response.ok) {
      throw new Error("http error!=>", response.status);
    }

    const data = await response.json();
    console.log(data);
    displayContent(data);
  } catch (error) {
    console.log(error.message);
  }
};

const displayContent = (products) => {
  try {
    const productContainer = document.getElementById("product-container");

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.setAttribute("data-id", product.id);

      productCard.innerHTML = `
      <article class="scaleUp relative flex bg-white/25 dark:bg-black/25 flex-col overflow-hidden rounded-lg shadow-lg border dark:border-gray-700">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="${product.image}" alt=""  loading="lazy" />
              </div>
              <div id="availBtn" class="absolute top-0 m-2 rounded-full bg-white">
                <p  class=" rounded-full bg-emerald-500 p-1 text-sm font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Available</p>
              </div>
              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-2xl text-gray-800 dark:text-[#d3d3d3c7] font-bold">${product.price}</p>
                  <del class="text-xs text-red-400"> -10% </del> 
                </div>
                <h3 class="mb-2 text-lg md:text-3xl font-bold text-gray-700 dark:text-[#D3D3D3]">${product.name}</h3>
              </div>
              <a href="https://wa.me/08064647273?text=Hello%20Aunty%20Ozy%2C%20can%20I%20get%20
">
              <button data-twe-ripple-init  class="group shadow-md mx-auto mb-5 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
             
                <div class="flex w-full text-black items-center justify-center bg-gray-200 text-md font-semibold uppercase transition group-hover:bg-[#E65C00] group-hover:text-white">Add</div>
                <div class="flex items-center justify-center bg-gray-300 px-5 transition group-hover:bg-[#fa8025] group-hover:text-white">+</div>
              </button>
              </a>
               
            </article>`;

      productContainer.appendChild(productCard);
    });
  } catch (error) {
    console.log("check here", error.message);
  }
};
fetchProducts();
