import {

  CREATE_FLAT,
  CREATE_SUCCESS_FLAT,
  CREATE_ERROR_FLAT,
  GET_FLATS_REQUEST,
  GET_FLATS_SUCCESS

} from 'constants';

export default function flat(state = {
  flats: [],
  message: '' 
}, action = {}) {
  switch (action.type) {
    case GET_FLATS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_FLATS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        flats: action.res.data
      });
    case CREATE_FLAT:
      return Object.assign({}, state, {
        message: ''
      });
    case CREATE_SUCCESS_FLAT:
      return Object.assign({}, state, {
        message: action.message
      });
    case CREATE_ERROR_FLAT:
      return Object.assign({}, state, {
        message: action.message
      });
    default:
      return state;
  }
}
