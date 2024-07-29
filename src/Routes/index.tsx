import { Route, Routes } from "react-router-dom";
import { StyledHomePage } from "../views/HomePage/HomePage.styles";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<StyledHomePage />} />
      </Routes>
    </>
  );
};

export default Router;
