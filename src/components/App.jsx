import { HomePage } from "pages/HomePage";
import { MoviesPage } from "pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";

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
