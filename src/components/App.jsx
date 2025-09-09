import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
        </Route>

      </Routes>

    </div>
  );
};
