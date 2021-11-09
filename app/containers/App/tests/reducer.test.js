import produce from 'immer';

import appReducer from '../reducer';
import { loadList, loadListSuccess, loadListError, addItem } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      loading: false,
      error: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadList action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.list = false;
    });

    expect(appReducer(state, loadList())).toEqual(expectedResult);
  });

  it('should handle the loadListSuccess action correctly', () => {
    const testList = ['abc', 'xyz'];
    const expectedResult = produce(state, draft => {
      draft.list = testList;
      draft.loading = false;
      draft.error = false;
    });

    expect(appReducer(state, loadListSuccess(testList))).toEqual(
      expectedResult,
    );
  });

  it('should handle the LoadListError action correctly', () => {
    const testErr = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = testErr;
      draft.loading = false;
    });

    expect(appReducer(state, loadListError(testErr))).toEqual(expectedResult);
  });

  it('should handle the addItem action correctly', () => {
    const testString = 'abc';
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
    });

    expect(appReducer(state, addItem(testString))).toEqual(expectedResult);
  });
});
