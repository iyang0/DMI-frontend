import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_LIST } from 'containers/App/constants';
import { loadListSuccess, loadListError } from 'containers/App/actions';
import request from 'utils/request';

// Individual exports for testing
export function* getList() {
  const requestURL = `http://localhost:3001/strings`;
  console.log('in saga');
  try {
    // Call request helper (see 'utils/request' - from example project)
    const list = yield call(request, requestURL);
    console.log('Saga list', list);
    yield put(loadListSuccess(list));
  } catch (err) {
    yield put(loadListError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* listData() {
  // Watches for LOAD_LIST actions and calls getList when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_LIST, getList);
}
