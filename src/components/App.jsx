// import HomePage from "pages/HomePage/HomePage";

// import MoviesPage from "pages/MoviesPage/MoviesPage";
import { Route, Routes } from "react-router-dom";
// import { Navigation } from "./Navigation/Navigation";
import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
const Navigation = lazy(() => import('./Navigation/Navigation'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))



export const App = () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>



        </Route>

      </Routes>

    </div>
  );
};
