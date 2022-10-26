import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const PrivateRouter = ({ login, component }) => {
  return (
    <>
      {login ? (
        <>
          {" "}
          <Navbar /> {component}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRouter;
