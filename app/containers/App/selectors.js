import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.list,
  );

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectLoading,
  makeSelectError,
  makeSelectList,
};
