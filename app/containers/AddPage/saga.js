import { call, put, takeLatest, select } from 'redux-saga/effects';
import { ADD_ITEM } from 'containers/App/constants';
import { addItemSuccess, addItemError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectStr } from './selectors';

// Individual exports for testing
export function* addItemSaga() {
  const string = yield select(makeSelectStr());
  const requestURL = `http://localhost:3001/strings`;

  try {
    // Call request helper (see 'utils/request' - from example project)
    const list = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string }),
    });

    yield put(addItemSuccess(list));
  } catch (err) {
    yield put(addItemError(err));
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
  yield takeLatest(ADD_ITEM, addItemSaga);
}
