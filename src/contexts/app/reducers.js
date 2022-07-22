import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

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
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
