import "./index.css";
import 'swiper/css/bundle';
import Swiper from "swiper/bundle"
import { Ripple, Collapse, Dropdown, Input, initTWE } from "tw-elements";
import { fetchSoups, fetchRice, fetchProtiens } from "./products";

const soupId = document.getElementById("cards-soup")
const riceId = document.getElementById("cards-rice")
const protienId = document.getElementById("cards-protiens")

// Initialize TW Elements
initTWE({ Ripple, Collapse, Dropdown, Input });

//   Initialize the swiper with the cards

const initSwiper = async () => {
    const soups = await fetchSoups();
    soups.forEach(soup => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="flex-none w-64 snap-center">
				<div class="bg-white border-1 border border-gray-200 rounded-lg overflow-hidden mb-4">
					<img src="${soup.image}" alt="Product Image" class="w-full h-40 object-cover">
					<div class="p-4">
						<h3 class="text-lg leading-6 font-bold text-gray-900" >${soup.name}</h3>
						<p class="text-gray-600 mt-2 text-sm" >${soup.name}</p>
						<div class="flex justify-between items-center mt-4">
							<span class="text-2xl font-medium text-gray-700" > NGN:${soup.price}</span>
							<a href="${soup.link}" target="_blank"
								class="text-white main-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><svg
									xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
								</svg></a>
						</div>
					</div>
				</div>
			</div>
        `
        soupId.append(card);
    }); 
};
const initRice = async () => {
    const Rice = await fetchRice();
    Rice.forEach(rice => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="flex-none w-64 snap-center">
				<div class="bg-white border-1 border border-gray-200 rounded-lg overflow-hidden mb-4">
					<img src="${rice.image}" alt="Product Image" class="w-full h-40 object-cover">
					<div class="p-4">
						<h3 class="text-lg leading-6 font-bold text-gray-900" >${rice.name}</h3>
						<p class="text-gray-600 mt-2 text-sm" >${rice.name}</p>
						<div class="flex justify-between items-center mt-4">
							<span class="text-2xl font-extrabold text-gray-900" >$${rice.price}</span>
							<a href="${rice.link}" target="_blank"
								class="text-white main-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><svg
									xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
								</svg></a>
						</div>
					</div>
				</div>
			</div>
        `
        riceId.append(card);
    });
}
const initProtien = async () => {
    const proteins = await fetchProtiens();
    proteins.forEach(protien => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="flex-none w-64 snap-center">
				<div class="bg-white border-1 border border-gray-200 rounded-lg overflow-hidden mb-4">
					<img src="${protien.image}" alt="Product Image" class="w-full h-40 object-cover">
					<div class="p-4">
						<h3 class="text-lg leading-6 font-bold text-gray-900" >${protien.name}</h3>
						<p class="text-gray-600 mt-2 text-sm" >${protien.name}</p>
						<div class="flex justify-between items-center mt-4">
							<span class="text-2xl font-extrabold text-gray-900" >$${protien.price}</span>
							<a href="${protien.link}" target="_blank"
								class="text-white main-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><svg
									xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
								</svg></a>
						</div>
					</div>
				</div>
			</div>
        `
        protienId.append(card);
    });
}
initSwiper();
initRice();
initProtien();

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });