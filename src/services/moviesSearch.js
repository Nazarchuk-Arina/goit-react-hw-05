import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYxZTkwMTcyYzA1YWYyZmM2MmNmOWJmZTIzNDkxMyIsIm5iZiI6MTczMjI4ODEwMi4zNDc4NjIsInN1YiI6IjY3M2ZiZDI4OGI0ZTRjMmVmNmY3NzI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rgIQw1BWZ3ZhxjOV5k7yhSpxOIRbO4aDmKUIvnGLAE";

const getMoviesByKeyword = async ({ query, page = 1 }) => {
  try {
    const { data } = await axios.get("/search/movie", {
      params: {
        query,
        language: "en-US",
        page,
      },
    });
    return data.results || [];
  } catch (error) {
    throw error;
  }
};

export default getMoviesByKeyword;
