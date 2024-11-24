import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getTrendingMovies from "../../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
