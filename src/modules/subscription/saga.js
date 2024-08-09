import { takeLatest, call, put } from "redux-saga/effects";
import {
  subscribeNeuroSpeechPackageRequest,
  subscribeNeuroSpeechPackageSuccess,
  subscribeNeuroSpeechPackageFailure,
} from "./reducer";
import { subscribeNeuroSpeechPackage } from "../../services/subscriptions";
import { message as antMessage } from "antd";
export function* handleSubscribePackage({ payload }) {
  try {
    console.log("Payload in watcher", payload);
    const data = yield call(subscribeNeuroSpeechPackage, payload);
    yield put(subscribeNeuroSpeechPackageSuccess(data));
    antMessage.success("Package has been Subscribed");
  } catch (error) {
    yield put(subscribeNeuroSpeechPackageFailure(error));
  }
}
export default function* subscribeWatcher() {
  yield takeLatest(
    subscribeNeuroSpeechPackageRequest.type,
    handleSubscribePackage
  );
}
