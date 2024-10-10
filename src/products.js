const fetchProducts = async () => {
  try {
    const response = await fetch("products.json");

    if (!response.ok) {
      throw new Error("Couldnt Get Product.json");
    }

    const data = await response.json();
    displayContent(data);
  } catch (error) {
    console.log(error.mesage);
    console.log("Here is Your error =>", error);
  }
};

const displayContent = (products) => {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.setAttribute("data-id", product.id);
    productCard.innerHTML = `<article class="relative flex flex-col overflow-hidden rounded-lg border">
            <div class="aspect-square overflow-hidden">
              <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="${product.image}" alt="" />
            </div>
            <div id="availBtn" class="absolute top-0 m-2 rounded-full bg-white">
              <p  class=" rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Available</p>
            </div>
            <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
              <div class="mb-2 flex">
                <p class="mr-3 text-2xl font-bold">${product.price}</p>
                <del class="text-xs text-red-400"> -10% </del> 
              </div>
              <h3 class="mb-2 text-sm text-gray-400">${product.name}</h3>
            </div>
            <button id="removeBtn" onclick="remove()" data-twe-ripple-init  class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
              <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-[#E65C00] group-hover:text-white">Add</div>
              <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-[#fa8025] group-hover:text-white">+</div>
            </button> 
          </article>`;

    const message = document.getElementById("availBtn");
    function remove() {
      message.classList.add("hidden");
    }

    productContainer.appendChild(productCard);
  });
};
fetchProducts();
