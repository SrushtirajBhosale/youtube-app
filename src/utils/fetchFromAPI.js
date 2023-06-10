import axios from 'axios';
// require("dotenv").config();

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  // url: BASE_URL,
  params: {
    maxResults: 500,
  },
  headers: {
    'X-RapidAPI-Key': 'a50625930amsh6279eceeef6658ep17b478jsn8f450e4439db',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
