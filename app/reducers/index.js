import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import user from 'reducers/user';
import flat from 'reducers/flat';
import stay from 'reducers/stay';

const rootReducer = combineReducers({
  user,
  flat, 
  stay,
  form: formReducer
});

export default rootReducer;
