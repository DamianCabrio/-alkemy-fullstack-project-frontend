import axios from 'axios';
import {
  useReducer,
  useContext,
  useEffect,
  useMemo,
  createContext,
} from 'react';

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

  isEditing: false,
  editTransactionId: null,

  transactionDescription: '',
  transactionAmount: 0,
  transactionType: 0,
  transactionDate: new Date().toISOString().split('T')[0],
  transactionCategory: 1,
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const client = useMemo(
    () =>
      axios.create({
        baseURL: process.env.REACT_APP_SERVER_URL + '/api/v1',
        timeout: 5000,
      }),
    []
  );

  const clearAlert = useMemo(
    () => () => {
      dispatch({
        type: CLEAR_ALERT,
      });
    },
    []
  );

  const logoutUser = useMemo(
    () => () => {
      dispatch({
        type: LOGOUT_USER,
      });
      removeUserFromLocalStorage();
    },
    []
  );

  useEffect(() => {
    client.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${state.token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { response } = error;
        if (response.status === 401 || response.status === 403) {
          logoutUser();
        }
        return Promise.reject(error);
      }
    );
  }, [
    state.token,
    client.interceptors.request,
    client.interceptors.response,
    logoutUser,
  ]);

  const displayAlert = (message, type) => {
    dispatch({
      type: DISPLAY_ALERT,
      payload: { message, type },
    });
  };

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
      const { data } = await client.post(`/users/${endpoint}`, user);
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

  const updateUser = async (currentUser) => {
    dispatch({
      type: SETUP_USER_BEGIN,
    });

    try {
      const { data } = await client.put(`/users/update`, currentUser);

      const { user, token, message } = data.result;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, message },
      });
      addUserToLocalStorage(user, token);
      clearAlert();
    } catch (error) {
      dispatch({
        type: SETUP_USER_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  };

  const updatePassword = async (newPassword) => {
    dispatch({
      type: SETUP_USER_BEGIN,
    });

    try {
      const { data } = await client.put(`/users/update-password`, {
        password: newPassword,
      });

      const { message } = data.result;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user: state.user, token: state.token, message },
      });
      addUserToLocalStorage(user, token);
      clearAlert();
      logoutUser();
    } catch (error) {
      dispatch({
        type: SETUP_USER_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  };

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
