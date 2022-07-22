import { useReducer, useContext, createContext } from 'react';

import reducer from './reducers';

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
  user: null,
  token: null,
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
  };

  const registerUser = async (user) => {
    console.log(user);
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
