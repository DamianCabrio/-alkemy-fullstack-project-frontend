import { useReducer, useContext, createContext } from 'react';
import axios from '../../helpers/axiosInstance';

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
    dispatch({
      type: REGISTER_USER_BEGIN,
    });

    try {
      const response = await axios.post('/api/v1/users/register', user);
      const { user: newUser, token } = response.data.result;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user: newUser, token },
      });
    }catch (error) {
      dispatch({
        type: REGISTER_USER_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
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
