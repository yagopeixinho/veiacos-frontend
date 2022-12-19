import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppContext } from "../contexts/store";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Veiacos from "../pages/Veiacos";
import VeiacoDashboard from "../pages/Veiacos/VeiacoDashboard";
import VeiacosForm from "../pages/Veiacos/VeiacosForm";

function PrivateRoute({ children, redirectTo }) {
  const { store } = useContext(AppContext);
  const { isAuthenticated } = store;
  const { pathname } = useLocation();

  if (pathname === "/veiacos") {
    document.getElementById("body").style.background = "#982881";
  } else {
    document.getElementById("body").style.background = "white";
  }

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
          <PrivateRoute redirectTo="/">
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/veiacos"
        element={
          <PrivateRoute redirectTo="/">
            <Veiacos />
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/veiaco/:id"
        element={
          <PrivateRoute redirectTo="/">
            <VeiacosForm />
          </PrivateRoute>
        }
      />

      <Route
        path="/veiacos/adicionar"
        element={
          <PrivateRoute>
            <VeiacosForm />
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/veiaco/:id/dashboard"
        element={
          <PrivateRoute>
            <VeiacoDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
