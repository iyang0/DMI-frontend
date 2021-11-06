/**
 * Gets all the strings from the backend
 */

import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';

/**
 * Strings array from backend request/response handler
 */
export function* getStrings() {
  const requestURL = `localhost:3001/strings`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}
