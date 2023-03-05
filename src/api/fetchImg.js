import axios from 'axios';

const API_KEY = '32716636-8a2ea718c4d85502bc83e063b';

export const per_page = 12;
export async function getImages(search, page) {
  return await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );
}
