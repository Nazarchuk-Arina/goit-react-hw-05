import "/main.css";
import "modern-normalize";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";
import { Route, Routes } from "react-router-dom";
const Header = lazy(() => import("./Header/Header"));
const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MoviesDetails = lazy(() =>
  import("../pages/MoviesDetails/MoviesDetails")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
