import "/main.css";
import "modern-normalize";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MoviesDetails from "../pages/MoviesDetails/MoviesDetails";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:userId" element={<MoviesDetails />}>
          <Route path="cast" element={<MovieCast />} />
          {/* <Route path="reviews" element={<MovieReviews />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
