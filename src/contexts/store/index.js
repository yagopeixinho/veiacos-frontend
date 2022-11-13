import { createContext, useState } from "react";

const initialContext = {
  user: {},
  authenticated: false,
};

export const AppContext = createContext();

export default function Store({ children }) {
  const [store, setStore] = useState(initialContext);

  return (
    <AppContext.Provider
      value={{ user: store.user, authenticated: store.authenticated }}
    >
      {children}
    </AppContext.Provider>
  );
}
