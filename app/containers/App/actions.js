/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import {
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_ERROR,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
} from './constants';

/**
 * Load the list of strings, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

/**
 * Dispatched when the list of strings are loaded by the request saga
 *
 * @param  {array} repos The array of strings
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function loadListSuccess(list) {
  return {
    type: LOAD_LIST_SUCCESS,
    list,
  };
}

/**
 * Dispatched when loading the list fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function loadListError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}

/**
 * Add a string to the backend via the request saga,
 * this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function addItem(str) {
  return {
    type: ADD_ITEM,
    str,
  };
}

/**
 * Dispatched when the item is successfully added to
 * the list of items by the request saga
 *
 * @param  {array} repos The array of strings
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function addItemSuccess(list) {
  return {
    type: ADD_ITEM_SUCCESS,
    list,
  };
}

/**
 * Dispatched when adding the string fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function addItemError(error) {
  return {
    type: ADD_ITEM_ERROR,
    error,
  };
}
