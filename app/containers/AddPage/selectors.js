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

export default makeSelectAddPage;
export { selectAddPageDomain };
