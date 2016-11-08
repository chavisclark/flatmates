// TODO: (If neccesary) Implement react-router-redux here to use syncHistoryWithStore

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createRoutes from 'routes';
import configStore from 'store/configStore';
import preRenderMiddleware from 'middlewares/preRenderMiddleware';

const initialState = window.__INITIAL_STATE__;
const store = configStore(initialState, browserHistory);
const history = browserHistory;
const routes = createRoutes(store);

function onUpdate() {
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }

  const { components, params } = this.state;

  preRenderMiddleware(store.dispatch, components, params);
}

render(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>, document.getElementById('app')
);
