

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { fetchImages } from "./js/pixabay-api";
import { gallery, renderImages } from "./js/render-functions";


export const loadScreen = document.querySelector(".loader");
function showLoadScreen() {
    loadScreen.classList.remove("is-hidden")
};
export function hideLoadScreen() {
    loadScreen.classList.add("is-hidden")
};
function showLoadMoreScreen() {
    loadScreen.style.margin = "auto auto 24px";
}


export const loadMoreBtn = document.querySelector(".load-more");
export function showLoadMoreBtn() {
    loadMoreBtn.classList.remove("visually-hidden");
};
export function hideLoadMoreBtn() {
    loadMoreBtn.classList.add("visually-hidden");
};


export let page = 1;
let currentSearch;
let limit = 15;
let totalPages;
const form = document.querySelector(".form");
export const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    hideLoadMoreBtn();
    showLoadScreen();
    gallery.innerHTML = "";
    page = 1;
    let inputValue = event.target.elements.search.value.trim();
    currentSearch = inputValue;
    if (inputValue !== "") {
        try {
            const resolve = await fetchImages(inputValue);
            renderImages(resolve.hits);
            totalPages = Math.ceil(resolve.totalHits / limit);
            hideLoadScreen();
            form.reset();
        } catch (error) {
            console.log(error);
            hideLoadScreen();
        }
    } else {
        hideLoadMoreBtn();
        iziToast.show({
            message: 'Search field is empty',
            color: 'red',
            position: 'topRight',
        });
        hideLoadScreen();
    }
});

loadMoreBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        showLoadScreen();
        page += 1;
    try {
        const resolve = await fetchImages(currentSearch);
        renderImages(resolve.hits);
        hideLoadScreen();
        scroll();
        if (page === totalPages) {
            hideLoadMoreBtn();
            iziToast.error({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results.",
                color: "blue",
            });
        }
    } catch (error) {
        console.log(error);
        hideLoadScreen();
    }
    });

function scroll() {
  const height = gallery.firstChild.getBoundingClientRect().height;

  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     hideLoadMoreBtn();
//     showLoadScreen();
//     gallery.innerHTML = "";
//     page = 1;
//     let inputValue = event.target.elements.search.value.trim();
//     currentSearch = inputValue;
//     if (inputValue !== "") {
//         fetchImages(inputValue).then((resolve) => {
//             renderImages(resolve.hits);
//             hideLoadScreen();
//             form.reset();
//         })
//             .catch((error) => {
//                 console.log(error);
//                 hideLoadScreen();
//             });
//     } else {
//         hideLoadMoreBtn();
//         iziToast.show({
//             message: 'Search field is empty',
//             color: 'red',
//             position: 'topRight',
//         });
//         hideLoadScreen();
//     }
// });
    
// loadMoreBtn.addEventListener("click", (event) => {
//     if (page > totalPages) {
//         hideLoadMoreBtn();
//         return iziToast.error({
//             position: "topRight",
//             message: "We're sorry, but you've reached the end of search results.",
//             color: "blue",
//         });
//     } else {
//     event.preventDefault();
//     showLoadScreen();
//     page += 1;
//         fetchImages(currentSearch).then((resolve) => {
//         renderImages(resolve.hits);
//             hideLoadScreen();
//             scroll();
//     })
//     .catch((error) => {
//                 console.log(error);
//                 hideLoadScreen();
//     })
//     }
// });
// loadMoreBtn.addEventListener("click", async (event) => {
//     if (page > totalPages) {
//         hideLoadMoreBtn();
//         return iziToast.error({
//             position: "topRight",
//             message: "We're sorry, but you've reached the end of search results.",
//             color: "blue",
//         });
//     } else {
//         event.preventDefault();
//         showLoadScreen();
//         page += 1;
//         try {
//             const resolve = await fetchImages(currentSearch);
//             renderImages(resolve.hits);
//             hideLoadScreen();
//             scroll();
//         } catch (error) {
//             console.log(error);
//             hideLoadScreen();
//         }
//     }
// });

