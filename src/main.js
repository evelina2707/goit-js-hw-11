import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      message: "Введи запит для пошуку",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: "Помилка при запиті. Спробуйте пізніше.",
      position: "topRight",
    });
    console.error(error);
  } finally {
    hideLoader();
  }
}