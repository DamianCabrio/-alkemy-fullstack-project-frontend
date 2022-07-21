import { useState, useReducer, useContext, createContext } from 'react';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
