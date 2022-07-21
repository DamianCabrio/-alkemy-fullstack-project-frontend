import { useReducer, useContext, createContext } from 'react';

import reducer from './reducers';

import { CLEAR_ALERT, DISPLAY_ALERT } from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (message, type) => {
    dispatch({
      type: DISPLAY_ALERT,
      payload: { message, type },
    });
  };

  const clearAlert = () => {
    dispatch({
      type: CLEAR_ALERT,
    });
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
