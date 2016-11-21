import { START_SEARCH } from 'constants';

export default function stay(state = {
  city: ''
}, action = {}) {
  switch (action.type) {
    case START_SEARCH:
      return Object.assign({}, state, {
        city: action.city
      });
    default:
      return state;
  }
}