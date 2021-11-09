/*
 *
 * MainPage actions
 *
 */

import { DEFAULT_ACTION } from './constants';

// not used currently as uses global scope action.
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
