import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const data = require("../data.json");

  return (
    <AppContext.Provider value={{ data }}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
