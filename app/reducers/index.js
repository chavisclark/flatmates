import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import user from './user';
import outing from './outing';
import flat from './flat';
import stay from './stay';

const rootReducer = combineReducers({
  user,
  flat,
  outing, 
  stay,
  form: formReducer
});

export default rootReducer;
