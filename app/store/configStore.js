import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState, history) {

  const middleware = [];
  
  if (__DEVCLIENT__) {
    middleware.push(createLogger());
  }

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

  return store;
}
