import { HomePage } from "pages/HomePage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Outlet></Outlet>

    </div>
  );
};
