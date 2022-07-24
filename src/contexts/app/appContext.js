import { useReducer, useContext, useMemo, createContext } from 'react';
import axios from '../../helpers/axiosInstance';

import reducer from './reducers';

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_FAILURE,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  sidebarOpen: false,
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

  const clearAlert = useMemo(
    () => () => {
      dispatch({
        type: CLEAR_ALERT,
      });
    },
    []
  );

  const addUserToLocalStorage = (user, token) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const setupUser = async (user, endpoint, message) => {
    dispatch({
      type: SETUP_USER_BEGIN,
    });

    try {
      const { data } = await axios.post(`/api/v1/users/${endpoint}`, user);
      const { user: newUser, token } = data.result;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user: newUser, token, message },
      });
      addUserToLocalStorage(newUser, token);
    } catch (error) {
      dispatch({
        type: SETUP_USER_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  };

  const toggleSidebar = () => {
    dispatch({
      type: TOGGLE_SIDEBAR,
    });
  };

  const logoutUser = () => {
    dispatch({
      type: LOGOUT_USER,
    });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    console.log(currentUser);
  };

  const updatePassword = async (newPassword) => {
    console.log(newPassword);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        updatePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext, initialState };
