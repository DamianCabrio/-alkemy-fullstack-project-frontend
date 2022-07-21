import { DISPLAY_ALERT } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertMessage: action.payload.message,
        alertType: action.payload.type,
      };
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
