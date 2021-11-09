import produce from 'immer';
import addPageReducer from '../reducer';
import { changeString } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      str: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addPageReducer(undefined, {})).toEqual(expectedResult);
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
  it('should handle the changeString action correctly', () => {
    const testString = 'ABC';
    const expectedResult = produce(state, draft => {
      draft.username = testString;
    });

    expect(addPageReducer(state, changeString(testString))).toEqual(
      expectedResult,
    );
  });
});
