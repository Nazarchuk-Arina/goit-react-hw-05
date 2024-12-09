import { useEffect, useState } from "react";
import s from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import getCast from "../../services/cast";

const MovieCast = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(movieId);
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2 className={s.title}>Cast</h2>
      {error ? (
        <p className="error">Error. Reload page.</p>
      ) : (
        movies.length > 0 && (
          <ul className={s.list}>
            {movies.map((movie) => (
              <li key={movie.id} className={s.elem}>
                <div>
                  <img
                    className={s.img}
                    src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`}
                    alt={movie.name}
                    width="100"
                  />
                </div>
                <p className={s.name}>{movie.name}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default MovieCast;
