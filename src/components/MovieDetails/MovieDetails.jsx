import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import s from "./MovieDetails.module.css";
import searchMovieById from "../../services/searchById";

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        if (movieId) {
          const data = await searchMovieById(movieId);
          setMovie(data);
        }
      } catch (error) {
        setError("Error fetching movie details. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink} className={s.back}>
        Go back
      </Link>
      {error && <p className={s.error}>{error}</p>}
      {movie && !loading && (
        <div className={s.info}>
          <div className={s.imgCont}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
          <div className={s.written}>
            <h2 className={s.title}>{movie.title}</h2>
            <p className={s.overview}>{movie.overview}</p>
            <p>
              Release Date:
              <span className={s.span}> {movie.release_date}</span>
            </p>
            <p>
              Rating: <span className={s.span}>{movie.vote_average}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
