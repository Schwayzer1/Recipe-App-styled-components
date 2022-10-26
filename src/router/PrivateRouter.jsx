import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ login }) => {
  return <>{login ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
