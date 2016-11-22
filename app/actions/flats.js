/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';

import * as types from 'constants';

polyfill();

function makeFlatRequest(method, data, api = '/flats') {
  return request({
    url: api,
    method,
    data,
    withCredentials: true
  });
}

export function fetchFlatsPromise(data) {
  return {
    type: types.GET_FLATS,
    promise: makeFlatRequest('post', data, '/find-flats'),
    data
  };
}

function createFlatError(message) {
  return {
    type: types.CREATE_ERROR_FLAT,
    message
  };
}

function beginCreate() {
  return { type: types.CREATE_FLAT };
}

function createFlatSuccess(message) {
  return {
    type: types.CREATE_SUCCESS_FLAT,
    message
  };
}

export function createFlat(data) {
  return dispatch => {
    dispatch(beginCreate());
    return makeFlatRequest('post', data, '/add-flat')
      .then(response => {
        if (response.status === 200) {
          dispatch(createFlatSuccess(response.data.message));

          (setTimeout(() => {
            alert(response.data.message)
            dispatch(push('/'));
            }, 500));
        } else {
          dispatch(createFlatError('Oops! Something went wrong'));
        }
      })
  };
}

export function fetchFlats(data) {
  return dispatch => {
    dispatch(fetchFlatsPromise(data))
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          // dispatch(loginSuccess(response.data.message));
          // dispatch(push('/'));
        } else {
          // dispatch(loginError('Oops! Something went wrong!'));
        }
      })
      .catch(err => {
        // dispatch(loginError(err.data.message));
      });
  };
}

