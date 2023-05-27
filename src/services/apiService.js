import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = '4783198657ea1b88591b21ed0e8ddd4b';

async function apiService(pathname, search) {
  const response = await axios.get(
    `${BASE_URL}${pathname}?api_key=${KEY_API}&${search}`
  );
  return response.data;
}

export { apiService };

