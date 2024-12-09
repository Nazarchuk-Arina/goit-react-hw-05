import axios from "axios";

export const getTrendingMovies = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYxZTkwMTcyYzA1YWYyZmM2MmNmOWJmZTIzNDkxMyIsIm5iZiI6MTczMjI4ODEwMi4zNDc4NjIsInN1YiI6IjY3M2ZiZDI4OGI0ZTRjMmVmNmY3NzI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rgIQw1BWZ3ZhxjOV5k7yhSpxOIRbO4aDmKUIvnGLAE",
    },
  };

  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );

  return data.results;
};

export default getTrendingMovies;
