/*
 *
 * AddPage reducer
 *
 */
import produce from 'immer';
import { CHANGE_STR } from './constants';

export const initialState = {
  str: '',
};

/* eslint-disable default-case, no-param-reassign */
const addPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STR:
        draft.str = action.str;
        break;
    }
  });

export default addPageReducer;
