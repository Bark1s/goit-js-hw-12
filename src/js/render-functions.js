import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { lightbox } from "../main";
import {loadScreen} from "../main";
import { hideLoadScreen } from "../main";
import {loadMoreBtn} from "../main";
import { hideLoadMoreBtn } from "../main";
import { showLoadMoreBtn } from "../main";

export const gallery = document.querySelector(".gallery");

export function renderImages(array) {
    if (array.length < 1) {
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: 'red',
            position: 'topRight',
        });
        hideLoadMoreBtn();
        hideLoadScreen();
    } else {
        const markup = array
            .map((item) => {
                return `<li class="item-box">
                <a class="large-image" href="${item.largeImageURL}">
                <img class="preview" src="${item.webformatURL}" alt="${item.tags}" />
                </a>
                <ul class="stat-list">
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Likes
                </span>
                ${item.likes}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Views
                </span>
                ${item.views}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Comments
                </span>
                ${item.comments}</p>
                </li>
                <li class="stat-item">
                <p class="stat-value">
                <span class="stat-name">Downloads
                </span>
                ${item.downloads}</p>
                </li>
                </ul>
                </li>`;
            })
            .join("");
        gallery.insertAdjacentHTML("beforeend", markup);
        lightbox.refresh();
        showLoadMoreBtn();
    }
    hideLoadScreen();
}

