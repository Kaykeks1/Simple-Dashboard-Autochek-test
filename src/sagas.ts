import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_PERMITS, REQUEST_PERMIT } from "./constants";
import { receivePermits, receivePermit } from "./actions";
import { fetchPermitsRequest, getPermitRequest } from "./api";

type WhatYouYield = object
type WhatYouReturn = void
type WhatYouAccept = object

function* fetchPermits(): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    // do api call
    const data = yield call(fetchPermitsRequest);
    yield put(receivePermits(data));
  } catch (e) {
    console.log(e);
  }
}

function* getPermit(action: {id: number, type: string}): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    // do api call
    const data = yield call(getPermitRequest, action.id);
    yield put(receivePermit(data));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchPermitsSaga() {
  yield takeLatest(REQUEST_PERMITS, fetchPermits);
}

export function* getPermitSaga() {
  yield takeLatest(REQUEST_PERMIT, getPermit);
}