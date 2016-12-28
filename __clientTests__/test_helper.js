import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../app/state/reducers';
import chaiJquery from 'chai-jquery';
import 'ignore-styles';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = { userAgent: 'node.js' };

// Assign an instance of JQuery that only looks at the testing environment
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const middleware = [thunk];
  
  const component = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state, compose(
      applyMiddleware(...middleware)))}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(component)); // Produces HTML

}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) this.val(value);

  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);


export { renderComponent, expect }