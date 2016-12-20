import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import promiseMiddleware from '../middlewares/promiseMiddleware';

export default function configureStore(initialState, history) {

  const middleware = [thunk, promiseMiddleware];
  
  if (__DEVCLIENT__) {
    middleware.push(createLogger());
  }

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

  return store;
}
