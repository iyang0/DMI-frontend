/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';

// global store actions and constants
import { LOAD_LIST } from 'containers/App/constants';
import { loadListSuccess, loadListError } from 'containers/App/actions';

import listData, { getList } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getList Saga', () => {
  let getListGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getListGenerator = getList();

    const selectDescriptor = getListGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = ['abc', 'xyz'];
    const putDescriptor = getListGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadListSuccess(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getListGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadListError(response)));
  });
});

describe('listDataSaga Saga', () => {
  const listDataSaga = listData();

  it('should start task to watch for LOAD_LIST action', () => {
    const takeLatestDescriptor = listDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_LIST, getList));
  });
});
