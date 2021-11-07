/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
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
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LIST:
        console.log('in reducer', action);
        draft.loading = true;
        draft.error = false;
        draft.list = false;
        break;

      case LOAD_LIST_SUCCESS:
        console.log('in reducer', action);
        draft.list = action.list;
        draft.loading = false;
        draft.error = false;
        break;

      case LOAD_LIST_ERROR:
        console.log('in reducer', action);
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
