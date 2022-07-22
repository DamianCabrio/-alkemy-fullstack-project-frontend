import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
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
    case REGISTER_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        alertMessage: action.payload.message,
        alertType: 'danger',
      };
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
