import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';

import * as types from '../types';

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

function showUserOutings(outings) {
  return { 
    type: types.SHOW_USER_OUTINGS,
    outings 
  };
}

function showUserOutingsError() {
  return { 
    type: types.SHOW_USER_OUTINGS_ERROR,
    message 
  };
}

export function showNewRequest(){
  return dispatch => {
    dispatch(beginCreate());
  }
}

export function createOuting(data, n) {
  return dispatch => {
    dispatch(beginCreate());
    //Fix empty server response bug
    data.expire = n;
    return makeOutingRequest('post', data, '/add-outing')
      .then(response => {
        if (response.status === 200) {
          dispatch(reset('RequestBox'));
          dispatch(createOutingSuccess(response.data.message));

          (setTimeout(() => {
            alert(response.data.message)
            dispatch(push('/'));
            }, 200));
        } else {
          dispatch(createOutingError('Oops! Something went wrong'));
        }
      })
  };
}

export function findUserOutings() {
  return dispatch => {
    return makeOutingRequest('get', null, '/find-outings')
      .then(response => {
        if (response.status === 200) {
          dispatch(showUserOutings(response.data.outings))
        } else {
          dispatch(showUserOutingsError(response.data.message))
        }
      })
  }
}