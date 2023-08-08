import React, { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext();

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

const GlobalProvider = ({ children }) => {
  const initialState = {
    user: "",
    password: "",
    token: "",
    tokenRefresh: "",
    token_level: "",
    login: false,
    loginTela: false,
    lookupModal: true,
    valide: "",
    modal: {
      view: false,
      component: "",
    },
    alertToast: {
      show: false,
      title: "IAL Gerencial",
      msg: "",
    },
  };
  const [global, setGlobal] = useLocalStorage("globalStore", initialState);

  const saveGlobal = (todo) => {
    setGlobal({ ...global, ...todo });
  };
  const setLogout = () => {
    setGlobal(initialState);
  };
  const setLogoutTela = (todo = false) => {
    setGlobal({ ...global, loginTela: todo });
  };
  const setLookupModal = (todo = false) => {
    setGlobal({ ...global, lookupModal: todo });
  };
  const setAlertToast = (todo) => {
    setGlobal({ ...global, alertToast: todo });
  };
  const setModal = (todo) => {
    console.log(todo)
    setGlobal({ ...global, modal: todo });
  };
  return (
    <GlobalContext.Provider
      value={{
        global,
        saveGlobal,
        setLogout,
        setLogoutTela,
        setLookupModal,
        setAlertToast,
        setModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
