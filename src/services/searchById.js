import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYxZTkwMTcyYzA1YWYyZmM2MmNmOWJmZTIzNDkxMyIsIm5iZiI6MTczMjI4ODEwMi4zNDc4NjIsInN1YiI6IjY3M2ZiZDI4OGI0ZTRjMmVmNmY3NzI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rgIQw1BWZ3ZhxjOV5k7yhSpxOIRbO4aDmKUIvnGLAE";

const searchMovieById = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}?&language=en-US`);
    return data || [];
  } catch (error) {
    throw error;
  }
};

export default searchMovieById;
