/*
 *
 * AddPage actions
 *
 */

import { CHANGE_STR } from './constants';

/**
 * Action for modifying the form state in the store
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function changeString(str) {
  return {
    type: CHANGE_STR,
    str,
  };
}
