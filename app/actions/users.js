import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';

import * as types from 'constants';

polyfill();

function makeUserRequest(method, data, api = '/login') {
  return request({
    url: api,
    method,
    data,
    withCredentials: true
  });
}

export function makeUserEditRequest(method, data, api = '/dashboard') {
  return request[method](api, data);
}

function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message, user) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    info: user,
    message
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message
  };
}

function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message
  };
}

function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

function beginFetch() {
  return { type: types.BEGIN_USER_FETCH };
}

function fetchUserSuccess(info) {
  return {
    type: types.USER_FETCH_SUCCESS,
    info
  };
}


function fetchUserError(message) {
  return {
    type: types.USER_FETCH_ERROR ,
    message
  };
}

function signUpSuccess(message, user) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    info: user,
    message
  };
}

function beginUserEdit(data) {
  return { type: types.EDIT_USER
  };
}

function userEditSuccess(message) {
  return { type: types.EDIT_USER_SUCCESS,
  message };
}

function userEditError(message) {
  return { type: types.EDIT_USER_ERROR,
  message };
}

function beginLogout() {
  return { type: types.LOGOUT_USER};
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

export function toggleLoginMode() {
  return { type: types.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return dispatch => {
    dispatch(beginLogin());

    return makeUserRequest('post', data, '/login')
      .then(response => {
        if (response.status === 200) {
          dispatch(loginSuccess(response.data.message, response.data.user));
          dispatch(push('/'));
        } else {
          dispatch(loginError('Oops! Something went wrong!'));
        }
      })
      .catch(err => {
        dispatch(loginError(err.data.message));
      });
  };
}

export function fetchUser(data) {
  return dispatch => {
     return makeUserRequest('get', data, '/user')
      .then(response => {
        if (response.status == 200) {
          dispatch(fetchUserSuccess(response.data))
        } else {
          dispatch(fetchUserError(response.data.message))
        }
      })
  };
}

export function onEntryChange(data) {
  return dispatch => {
    return makeUserEditRequest('post', data)
      .then(response => {
          if (response.status === 200) {
            dispatch(userEditSuccess(response.data.message))
            alert('Your profile has been updated!');
          } else {
            dispatch(userEditError(response.data.message))
          }
      });
    }
}

export function signUp(data) {
  return dispatch => {
    dispatch(beginSignUp());
    return makeUserRequest('post', data, '/signup')
      .then(response => {
        if (response.status === 200) {
          dispatch(signUpSuccess(response.data.message, response.data.user));
          dispatch(push('/'));
        } else {
          dispatch(signUpError('Oops! Something went wrong'));
        }
      })
      .catch(err => {
        dispatch(signUpError(err.data.message));
      });
  };
}

export function logOut(data) {
  return dispatch => {
    dispatch(beginLogout());
    return makeUserRequest('post', data, '/logout')
      .then(response => {
        if (response.status === 200) {
          dispatch(logoutSuccess());
        } else {
          dispatch(logoutError());
        }
      });
  };
}
