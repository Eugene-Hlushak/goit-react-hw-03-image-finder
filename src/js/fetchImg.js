import axios from 'axios';

const API_KEY = '32716636-8a2ea718c4d85502bc83e063b';

export async function getImages(search, page) {
  return await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${search}&page=${page}`
  );
}
