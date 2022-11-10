import { createContext, useState, useEffect } from "react";
import api from "../api";

export const Context = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      setLoading(false);
    }
  }, []);

  async function handleLogin() {
    const {
      data: { token },
    } = await api.post(`/users/auth`, {
      email: "peixinhoyago@gmail.com",
      password: "@!Slushsad=1",
    });

    debugger;
    localStorage.setItem("token", JSON.stringify(token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);
    alert("logado");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    setAuthenticated(false);
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}
