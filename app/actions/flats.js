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

export function fetchFlats(city) {
  return {
    type: types.GET_FLATS,
    promise: makeFlatRequest('get', city, '/flats/'+city),
    city
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

