import {
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_ERROR,
  ADD_ITEM,
} from '../constants';

import { loadList, loadListSuccess, loadListError, addItem } from '../actions';

describe('App Actions', () => {
  describe('loadList', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_LIST,
      };

      expect(loadList()).toEqual(expectedResult);
    });
  });

  describe('listLoaded', () => {
    it('should return the correct type and the passed array', () => {
      const testList = ['Test'];
      const expectedResult = {
        type: LOAD_LIST_SUCCESS,
        list: testList,
      };

      expect(loadListSuccess(testList)).toEqual(expectedResult);
    });
  });

  describe('listLoadingError', () => {
    it('should return the correct type and the error', () => {
      const testErr = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_LIST_ERROR,
        error: testErr,
      };

      expect(loadListError(testErr)).toEqual(expectedResult);
    });
  });

  describe('addItem', () => {
    it('should return the correct type', () => {
      const testStr = 'test';
      const expectedResult = {
        type: ADD_ITEM,
        str: testStr,
      };

      expect(addItem(testStr)).toEqual(expectedResult);
    });
  });
});
