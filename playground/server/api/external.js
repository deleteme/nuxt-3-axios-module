import axios from 'axios';

export default defineEventHandler(async () => {
  const endpoint = "https://echo.deleteme.workers.dev/api/hello";
  // Axios is less convenient than using Nuxt's $fetch
  //return $fetch(endpoint);
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    return error.message;
  }
})

