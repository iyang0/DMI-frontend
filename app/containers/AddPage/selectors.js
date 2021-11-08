import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addPage state domain
 */

const selectAddPageDomain = state => state.addPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddPage
 */

const makeSelectAddPage = () =>
  createSelector(
    selectAddPageDomain,
    substate => substate,
  );

const makeSelectStr = () =>
  createSelector(
    selectAddPageDomain,
    substate => substate.str,
  );

export default makeSelectAddPage;
export { selectAddPageDomain, makeSelectStr };
