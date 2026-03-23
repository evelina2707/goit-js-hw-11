import axios from "axios";

const API_KEY = "55146791-665630d79c22972c7e4b14b80";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}