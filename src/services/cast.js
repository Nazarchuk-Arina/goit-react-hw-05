import axios from "axios";

const getCast = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYxZTkwMTcyYzA1YWYyZmM2MmNmOWJmZTIzNDkxMyIsIm5iZiI6MTczMjI4ODEwMi4zNDc4NjIsInN1YiI6IjY3M2ZiZDI4OGI0ZTRjMmVmNmY3NzI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rgIQw1BWZ3ZhxjOV5k7yhSpxOIRbO4aDmKUIvnGLAE",
    },
  };

  try {
    const { data } = await axios(options);
    console.log("API Response:", data);
    return data.cast || [];
  } catch (error) {
    console.error("Error fetching cast:", error.message);
    throw error;
  }
};

export default getCast;
