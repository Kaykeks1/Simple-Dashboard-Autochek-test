import { all } from 'redux-saga/effects';

import { fetchPermitsSaga, getPermitSaga } from './sagas';

export default function* rootSaga() {
  yield all([
    fetchPermitsSaga(),
    getPermitSaga()
  ]);
}