import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "../contexts/store";

import Home from "../pages/Home";
import Login from "../pages/Login";

function PrivateRoute({ children, redirectTo }) {
  const { store } = useContext(AppContext);
  const { isAuthenticated } = store;

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
      <Route
        exact
        path="/home"
        element={
          <PrivateRoute redirectTo="/entrar">
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
