import { createContext, useEffect, useState } from "react";
import { api } from "../../service/api.service";

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
      setStore((previousState) => ({
        ...previousState,
        isAuthenticated: true,
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
          debugger;
          setStore(ev);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
