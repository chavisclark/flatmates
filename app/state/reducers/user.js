import {
  TOGGLE_LOGIN_MODE,
  MANUAL_LOGIN_USER,
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_ERROR,
  LOGIN_SUCCESS_USER,
  LOGIN_ERROR_USER,
  SIGNUP_USER,
  SIGNUP_SUCCESS_USER,
  SIGNUP_ERROR_USER,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_SUCCESS_USER,
  LOGOUT_ERROR_USER 
} from '../types';

export default function user(state = {
  isLogin: true,
  message: '',
  isWaiting: false,
  authenticated: false,
  info: {},
  }, action = {}) {
  switch (action.type) {
    case TOGGLE_LOGIN_MODE:
      return Object.assign({}, state, {
        isLogin: !state.isLogin,
        message: '',
        info: {}
      });
    case MANUAL_LOGIN_USER:
      return Object.assign({}, state, {
        isWaiting: true,
        message: '',
        info: {}
      });
    case USER_FETCH:
      return Object.assign({}, state, {
        isWaiting: true,
        message: '',
        info: {}
      });
    case USER_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isWaiting: false,
        message: '',
        info: action.info
      });
    case USER_FETCH_ERROR:
      return Object.assign({}, state, {
        isWaiting: false,
        message: '',
        info: {},
        message: action.message
      });
    case LOGIN_SUCCESS_USER:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: true,
        message: '',
        info: action.user
      });
    case LOGIN_ERROR_USER:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false,
        message: action.message,
        info: {}
      });
    case SIGNUP_USER:
      return Object.assign({}, state, {
        isWaiting: true,
        message: '',
        info: {},
      });
    case SIGNUP_SUCCESS_USER:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: true,
        info: action.user
      });
    case SIGNUP_ERROR_USER:
    console.log(actoin)
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false,
        message: action.message,
        info: {}
      });
    case EDIT_USER:
      return Object.assign({}, state, {
        isWaiting: true,
        message: '',
        info: {}
      });
    case EDIT_USER_SUCCESS:
      return Object.assign({}, state, {
        isWaiting: false,
        message: action.message,
        authenticated: true,
        info: {}
      });
    case EDIT_USER_ERROR:
      return Object.assign({}, state, {
        isWaiting: false,
        message: action.message,
        authenticated: true,
        isLogin: false,
        info: {}
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        isWaiting: true,
        message: '',
        info: {}
      });
    case LOGOUT_SUCCESS_USER:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false,
        info: {}
      });
    case LOGOUT_ERROR_USER:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: true,
        isLogin: true,
        info: {}
      });
    default:
      return state;
  }
}
