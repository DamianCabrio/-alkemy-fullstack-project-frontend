import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_FAILURE,
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
    case SETUP_USER_BEGIN:
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
    case SETUP_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: action.payload.message,
        alertType: 'danger',
      };
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
