import { createContext, useEffect, useState } from "react";
import { api } from "../../service/api.service";
import jwt_decode from "jwt-decode";

const initialContext = {
  user: {},
  isAuthenticated: false,
};

export const AppContext = createContext();

export default function Store({ children }) {
  const [store, setStore] = useState(initialContext);
  const [loadingStore, setLoadingStore] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      const decodedToken = jwt_decode(token);

      debugger;
      setStore((previousState) => ({
        ...previousState,
        isAuthenticated: true,
        user: decodedToken,
      }));
    }

    setLoadingStore(false);
  }, []);

  if (loadingStore) {
    return <h1>Carregando...</h1>;
  }

  return (
    <AppContext.Provider
      value={{
        store,
        setStore: (ev) => {
          setStore(ev);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
