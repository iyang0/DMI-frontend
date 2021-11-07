/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_ERROR } from './constants';

export const initialState = {
  list: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LIST:
        draft.loading = true;
        draft.error = false;
        draft.list = [];
        break;

      case LOAD_LIST_SUCCESS:
        draft.list = action.list;
        draft.loading = false;
        draft.error = false;
        break;

      case LOAD_LIST_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default mainPageReducer;
