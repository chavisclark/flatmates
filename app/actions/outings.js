import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';

import * as types from 'constants';

polyfill();

function makeOutingRequest(method, data, api) {
  return request({
    url: api,
    method,
    data,
    withCredentials: true
  });
}

function createOutingError(message) {
  return {
    type: types.CREATE_ERROR_OUTING,
    message
  };
}

function beginCreate() {
  return { type: types.CREATE_OUTING };
}

function createOutingSuccess(message) {
  return {
    type: types.CREATE_SUCCESS_OUTING,
    message
  };
}

export function createOuting(data) {
  return dispatch => {
    dispatch(beginCreate());
    return makeOutingRequest('post', data, '/add-outing')
      .then(response => {
        if (response.status === 200) {
          dispatch(createOutingSuccess(response.data.message));

          (setTimeout(() => {
            alert(response.data.message)
            dispatch(push('/'));
            }, 500));
        } else {
          dispatch(createOutingError('Oops! Something went wrong'));
        }
      })
  };
}
