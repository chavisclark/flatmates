import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';
import * as types from 'constants';

polyfill();

export function startSearch(city) {
  return {
    type: types.START_SEARCH,
    city
  }
}

export function searchCity(city) {
  return dispatch => {
    dispatch(startSearch(city));
  }
}