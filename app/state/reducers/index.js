import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import user from './user';
import outing from './outing';

const rootReducer = combineReducers({
  user,
  outing, 
  form: formReducer
});

export default rootReducer;
