import {

  CREATE_OUTING,
  CREATE_SUCCESS_OUTING,
  CREATE_ERROR_OUTING,
  SHOW_USER_OUTINGS

} from '../types';

export default function outing(state = {
  outings: [],
  message: '', 
  showRequest: true 
}, action = {}) {
  switch (action.type) {
    case CREATE_OUTING:
      return Object.assign({}, state, {
        message: '',
        showRequest: true
      });
    case CREATE_SUCCESS_OUTING:
      return Object.assign({}, state, {
        message: action.message,
        current: action.current,
        showRequest: false
      });
    case SHOW_USER_OUTINGS:
      return Object.assign({}, state, {
        outings: action.outings
      });
    case CREATE_ERROR_OUTING:
      return Object.assign({}, state, {
        message: action.message
      });
    default:
      return state;
  }
}
