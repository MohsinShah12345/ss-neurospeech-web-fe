import { takeLatest, call, put } from "redux-saga/effects";
import {
  createVoiceOverRequest,
  createVoiceOverSuccess,
  createVoiceOverFailure,
} from "./reducer";
import { createVoiceOverApi } from "../../services/voiceOvers";
import { message as antMessage } from "antd";

export function* handleCreateVoiceOver({ payload }) {
  try {
    const { data } = yield call(createVoiceOverApi, payload); // api call
    yield put(createVoiceOverSuccess(data));
    antMessage.success("Voice Over Generated Successfully", 2);
  } catch (error) {
    antMessage.error("Failed to create Voice", 2);
    yield put(createVoiceOverFailure(error.message)); // failure case
  }
}
export default function* voiceOverWatcher() {
  yield takeLatest(createVoiceOverRequest.type, handleCreateVoiceOver);
}
