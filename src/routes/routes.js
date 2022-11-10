import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";

function PrivateRoute({ children, redirectTo }) {
  let isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/****
       * Public Routes
       ****/}
      <Route exact path="/" element={<Login />} />

      {/****
       * Private Routes
       ****/}
    </Routes>
  );
}
