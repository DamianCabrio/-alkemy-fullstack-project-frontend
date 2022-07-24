import { initialState, transactionInitialState } from './appContext';

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
} from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
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
      };
    case FETCH_CATEGORY_OPTIONS_SUCCESS:
      return {
        ...state,
        categoryOptions: action.payload,
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
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
