import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getTrendingMovies from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      {error && <ErrorMessage />}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
