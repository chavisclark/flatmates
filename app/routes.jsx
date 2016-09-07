import React from 'react'
import { Route } from 'react-router'
import App from 'containers/App'
import Home from 'components/Home'

export default (store) => {

  return (
    <Route component={App}>
      <Route path="/" component={Home} />
    </Route>
  );
};
