import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export const App = () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
            {/* <Route path='/movies/:movieId/cast' element={<MovieDetails />} />
            <Route path='/movies/:movieId/reviews' element={<MovieDetails />} /> */}
          {/* </Route> */}



        </Route>

      </Routes>

    </div>
  );
};
