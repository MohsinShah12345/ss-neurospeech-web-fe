import { takeLatest, call, put } from "redux-saga/effects";
import {
  getVoicesRequest,
  getVoicesSuccess,
  getVoicesFailure,
} from "./reducer";
import { fetchVoicesApi } from "../../services/voices";

export function* handleGetVoices() {
  try {
    const {
      data: { voices },
    } = yield call(fetchVoicesApi);
    yield put(getVoicesSuccess(voices));
  } catch (error) {
    yield put(getVoicesFailure(error.message));
  }
}
export default function* voicesWatcher() {
  yield takeLatest(getVoicesRequest.type, handleGetVoices);
}
