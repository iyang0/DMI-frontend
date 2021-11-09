import produce from 'immer';
import mainPageReducer from '../reducer';
import { defaultAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('mainPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(mainPageReducer(undefined, {})).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */

  it('should handle the changeUsername action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(mainPageReducer(state, defaultAction())).toEqual(expectedResult);
  });
});
