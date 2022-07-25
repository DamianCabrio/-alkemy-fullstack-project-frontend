import { initialState, transactionInitialState, searchTransactionsInitialState } from './appContext';

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_FAILURE,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  FETCH_CATEGORY_OPTIONS_SUCCESS,
  FETCH_TRANSACTION_TYPES_SUCCESS,
  HANDLE_TRANSACTION_INPUT,
  CLEAR_TRANSACTION_FORM_VALUES,
  CREATE_TRANSACTION_SUCCESS,
  FETCH_TRANSACTIONS_SUCCESS,
  SET_EDIT_TRANSACTION,
  FETCH_TRANSACTION_STATS_SUCCESS,
  CLEAR_FILTERS,
} from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        isLoading: false,
        alertMessage: action.payload.message,
        alertType: action.payload.type,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertMessage: '',
        alertType: '',
      };
    case SETUP_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        showAlert: true,
        alertMessage: action.payload.message,
        alertType: 'success',
      };
    case SETUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: action.payload.message,
        alertType: 'danger',
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
        isLoading: false,
      };
    case FETCH_CATEGORY_OPTIONS_SUCCESS:
      return {
        ...state,
        categoryOptions: action.payload,
        isLoading: false,
      };
    case FETCH_TRANSACTION_TYPES_SUCCESS:
      return {
        ...state,
        transactionTypes: action.payload,
        isLoading: false,
      };
    case HANDLE_TRANSACTION_INPUT:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case CLEAR_TRANSACTION_FORM_VALUES:
      return {
        ...state,
        isEditing: false,
        editTransactionId: null,
        ...transactionInitialState,
      };
    case CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        ...transactionInitialState,
        alertMessage: action.payload.message,
        alertType: 'success',
      };
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: action.payload.transactions,
        totalTransactions: action.payload.total,
        numOfPages: action.payload.numOfPages,
      };
    case SET_EDIT_TRANSACTION:
      const transaction = state.transactions.find(
        (trans) => trans.id === action.payload
      );
      return {
        ...state,
        isEditing: true,
        editTransactionId: action.payload,
        transactionDescription: transaction.description,
        transactionAmount: transaction.amount,
        transactionType: transaction.type,
        transactionDate: transaction.date.split('T')[0],
        transactionCategory: transaction.category_id,
      };
    case FETCH_TRANSACTION_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactionStats: action.payload,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        ...searchTransactionsInitialState,
        isLoading: false,
      };
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
