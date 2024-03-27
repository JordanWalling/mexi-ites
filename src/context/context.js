import { createContext, useContext, useState } from "react";

const appContext = createContext();

function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <appContext.Provider value={{ cart, setCart }}>
      {children}
    </appContext.Provider>
  );
}

export { appContext, AppProvider };
