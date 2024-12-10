import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import getMoviesByKeyword from "../../services/moviesSearch";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("name") || "";

  const handleSearch = (newQuery) => {
    setSearchParams({ name: newQuery });
  };

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMoviesByKeyword({ query });
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {!query && <p>Let’s begin search</p>}
      {loading && <Loader />}
      {!loading && query && movies.length === 0 && <p>Movies not found.</p>}
      {error && <ErrorMessage />}
      {query && !loading && movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
