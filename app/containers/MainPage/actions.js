/*
 *
 * MainPage actions
 *
 */

import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_ERROR } from './constants';

export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

export function loadListSuccess(list) {
  return {
    type: LOAD_LIST_SUCCESS,
    list,
  };
}

export function loadListError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}
