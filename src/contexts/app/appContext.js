import axios from 'axios';
import {
  useReducer,
  useContext,
  useEffect,
  useMemo,
  useCallback,
  createContext,
} from 'react';

import reducer from './reducers';

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_FAILURE,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  FETCH_CATEGORY_OPTIONS_SUCCESS,
  HANDLE_TRANSACTION_INPUT,
  CLEAR_TRANSACTION_FORM_VALUES,
  CREATE_TRANSACTION_SUCCESS,
  FETCH_TRANSACTIONS_SUCCESS,
  SET_EDIT_TRANSACTION,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const transactionInitialState = {
  transactionDescription: '',
  transactionAmount: 1,
  transactionType: 0,
  transactionDate: new Date().toISOString().split('T')[0],
  transactionCategory: 1,
};

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

  ...transactionInitialState,

  categoryOptions: [],
  transactionTypes: [
    { id: 0, name: 'Ingreso' },
    { id: 1, name: 'Egreso' },
  ],

  transactions: [],
  totalTransactions: 0,
  numOfPages: 1,
  currentPage: 1,
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

  const clearAlert = useCallback(() => {
    dispatch({
      type: CLEAR_ALERT,
    });
  }, []);

  const logoutUser = useCallback(() => {
    dispatch({
      type: LOGOUT_USER,
    });
    removeUserFromLocalStorage();
  }, []);

  useEffect(() => {
    console.log('AppProvider: useEffect');
    client.interceptors.request.use(
      (config) => {
        console.log('Token: ', state.token);
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
  }, [state.token, client, logoutUser]);

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
      type: SETUP_BEGIN,
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
        type: SETUP_FAILURE,
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
      type: SETUP_BEGIN,
    });

    try {
      const { data } = await client.put(`/users/update`, currentUser);
      const { user, token } = data.result;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, message: data.message },
      });
      addUserToLocalStorage(user, token);
    } catch (error) {
      dispatch({
        type: SETUP_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  };

  const updatePassword = async (newPassword) => {
    dispatch({
      type: SETUP_BEGIN,
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
        type: SETUP_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  };

  const fetchCategoryOptions = useCallback(async () => {
    dispatch({
      type: SETUP_BEGIN,
    });
    try {
      const { data } = await client.get('/categories');
      dispatch({
        type: FETCH_CATEGORY_OPTIONS_SUCCESS,
        payload: data.result,
      });
      clearAlert();
    } catch (error) {
      dispatch({
        type: SETUP_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  }, [client, clearAlert]);

  const handleTransactionInput = (field, value) => {
    dispatch({
      type: HANDLE_TRANSACTION_INPUT,
      payload: { field, value },
    });
  };

  const clearTransactionForm = () => {
    dispatch({
      type: CLEAR_TRANSACTION_FORM_VALUES,
    });
    clearAlert();
  };

  const createTransaction = async () => {
    dispatch({
      type: SETUP_BEGIN,
    });

    try {
      const {
        transactionDescription: description,
        transactionAmount: amount,
        transactionType: type,
        transactionDate: date,
        transactionCategory: category_id,
      } = state;
      const { data } = await client.post('/transactions/add', {
        description,
        amount,
        type,
        date,
        category_id,
      });

      const { message } = data;
      dispatch({
        type: CREATE_TRANSACTION_SUCCESS,
        payload: { message },
      });
      dispatch({
        type: CLEAR_TRANSACTION_FORM_VALUES,
      });
    } catch (error) {
      dispatch({
        type: SETUP_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  };

  const getTransactions = useCallback(async () => {
    let url = `/transactions`;
    dispatch({
      type: SETUP_BEGIN,
    });

    try {
      const { data } = await client.get(url);
      const { transactions, total, numOfPages } = data.result;
      dispatch({
        type: FETCH_TRANSACTIONS_SUCCESS,
        payload: {
          transactions,
          total,
          numOfPages,
        },
      });
      clearAlert();
    } catch (error) {
      dispatch({
        type: SETUP_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  }, [client, clearAlert]);

  const setEditTransaction = (transactionId) => {
    dispatch({
      type: SET_EDIT_TRANSACTION,
      payload: transactionId,
    });
  };

  const deleteTransaction = async (transactionId) => {
    dispatch({
      type: SETUP_BEGIN,
    });

    try {
      const { data } = await client.delete(`/transactions/${transactionId}`);
      const { message } = data;
      await getTransactions();
      dispatch({
        type: DISPLAY_ALERT,
        payload: { message, type: 'success' },
      });
    } catch (error) {
      dispatch({
        type: SETUP_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  };

  const editTransaction = async () => {
    dispatch({
      type: SETUP_BEGIN,
    });

    try {
      const {
        transactionDescription: description,
        transactionAmount: amount,
        transactionDate: date,
        transactionCategory: category_id,
      } = state;
      const { data } = await client.put(
        `/transactions/${state.editTransactionId}`,
        {
          description,
          amount,
          date,
          category_id,
        }
      );
      const { message } = data;
      dispatch({
        type: DISPLAY_ALERT,
        payload: { message, type: 'success' },
      });
      dispatch({
        type: CLEAR_TRANSACTION_FORM_VALUES,
      });
    } catch (error) {
      dispatch({
        type: SETUP_FAILURE,
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
        fetchCategoryOptions,
        handleTransactionInput,
        clearTransactionForm,
        createTransaction,
        getTransactions,
        setEditTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export {
  AppContext,
  AppProvider,
  useAppContext,
  initialState,
  transactionInitialState,
};
