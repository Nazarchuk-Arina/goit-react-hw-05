import { Link, Outlet } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import s from "./MovieDetailsPage.module.css";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const MoviesDetails = () => {
  return (
    <div className={s.inner}>
      <MovieDetails />
      <ul className={s.cont}>
        <li className={s.item}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={s.item}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
