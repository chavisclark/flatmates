import {

  CREATE_OUTING,
  CREATE_SUCCESS_OUTING,
  CREATE_ERROR_OUTING

} from 'constants';

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
        showRequest: false
      });
    case CREATE_ERROR_OUTING:
      return Object.assign({}, state, {
        message: action.message
      });
    default:
      return state;
  }
}
