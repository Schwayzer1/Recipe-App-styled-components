import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import React, { useState } from "react";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/login/Login";

const AppRouter = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setLogin={setLogin} />} />

        <Route
          path="/"
          element={<PrivateRouter login={login} component={<Home />} />}
        />
        <Route
          path="/about"
          element={<PrivateRouter login={login} component={<About />} />}
        />
        <Route
          path="/details"
          element={<PrivateRouter login={login} component={<Details />} />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
