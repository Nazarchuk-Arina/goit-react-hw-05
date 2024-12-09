import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import getReviews from "../../services/reviews";

const MovieReviews = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const data = await getReviews(movieId);
        setMovies(data);
      } catch (error) {
        setError("Failed to load reviews.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2 className={s.title}>Reviews</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        movies.length > 0 && (
          <ul className={s.list}>
            {movies.map((movie) => (
              <li key={movie.id} className={s.elem}>
                <p className={s.name}>{movie.name}</p>
              </li>
            ))}
          </ul>
        )
      )}

      {movies.length === 0 && !loading && <p>No reviews yet.</p>}
    </div>
  );
};

export default MovieReviews;
