import React, { useState, createContext, useEffect } from "react";
import DashBoard from "../pages/dashboard/Dashboard";
import * as Pages from "../pages/pages";

export const CorpoContext = createContext();
const CorpoProvider = ({ children }) => {
  const initialState = {
    component: <Pages.Relatorio />,
    // component: <Pages.Dashboard />,
  };
  const [corpo, setCorpo] = useState(initialState);

  const saveCorpo = (todo) => {
    setCorpo({ ...corpo, ...todo });
  };
  return (
    <CorpoContext.Provider value={{ corpo, saveCorpo }}>
      {children}
    </CorpoContext.Provider>
  );
};

export default CorpoProvider;
