import { useReducer, useContext, createContext } from 'react';

import reducer from './reducers';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
