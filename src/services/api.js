import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=CYU9zJmCfjDkQMyQvN4_nWCb1zdRsEWiJs1H7UKCcVM&query=${query}&page=${page}&orientation=landscape`
  );
  return response.data;
};
