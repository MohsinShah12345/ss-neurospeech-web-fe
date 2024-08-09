import { takeLatest, call, put } from "redux-saga/effects";
import {
  getPackageDetailsRequest,
  getPackageDetailsSuccess,
  getPackageDetailsFailure,
  addPackageRequest,
  addPackageSuccess,
  addPackageFailure,
  updatePackageRequest,
  updatePackageSuccess,
  updatePackageFailure,
  deletePackageRequest,
  deletePackageSuccess,
  deletePackageFailure,
  getSinglePackageRequest,
  getSinglePackageSuccess,
  getSinglePackageFailure,
  getPackageSubscriptionsRequest,
  getPackageSubscriptionsSuccess,
  getPackageSubscriptionsFailure,
} from "./reducer";
import {
  getPackagesApi,
  addPackagesApi,
  updatePackageApi,
  deletePackageApi,
  getSinglePackageApi,
  getPackageSubsciptionsApi,
} from "../../services/packages";
import { message as antMessage } from "antd";

export function* handleGetPackages() {
  try {
    const { neuroSpeech } = yield call(getPackagesApi);
    yield put(getPackageDetailsSuccess(neuroSpeech));
  } catch (error) {
    yield put(getPackageDetailsFailure(error));
  }
}
export function* handleGetSinglePackage({ payload }) {
  try {
    const data = yield call(getSinglePackageApi, payload);
    yield put(getSinglePackageSuccess(data));
  } catch (error) {
    yield put(getSinglePackageFailure(error));
  }
}
export function* handleGetPackageSubscriptions({ payload }) {
  try {
    const { data } = yield call(getPackageSubsciptionsApi, payload);
    console.log("API response: ", data);
    yield put(getPackageSubscriptionsSuccess(data));
  } catch (error) {
    yield put(getPackageSubscriptionsFailure(error));
  }
}
export function* handleAddPackage({ payload }) {
  try {
    const { data } = yield call(addPackagesApi, payload);
    yield put(addPackageSuccess());
    antMessage.success(data.message, 2);
  } catch (error) {
    antMessage.error("Failed to add Package", 2);
    yield put(addPackageFailure(error));
  }
}

export function* handleUpdatePackage({ payload }) {
  try {
    const {
      data: { neuroSpeech },
    } = yield call(updatePackageApi, payload);
    yield put(updatePackageSuccess(neuroSpeech));
    antMessage.success("Package Updated!", 2);
  } catch (err) {
    antMessage.error("Failed to Update Package", 2);
    yield put(updatePackageFailure(err));
  }
}

export function* handleDeletePackage({ payload }) {
  try {
    const {
      data: { neuroSpeech },
    } = yield call(deletePackageApi, payload);
    yield put(deletePackageSuccess(neuroSpeech));
    antMessage.success("Package Deleted!", 2);
  } catch (err) {
    antMessage.error("Failed to Delete Package", 2);
    yield put(deletePackageFailure(err));
  }
}

export default function* packagesWatcher() {
  yield takeLatest(getPackageDetailsRequest.type, handleGetPackages);
  yield takeLatest(getSinglePackageRequest.type, handleGetSinglePackage);
  yield takeLatest(
    getPackageSubscriptionsRequest.type,
    handleGetPackageSubscriptions
  );
  yield takeLatest(addPackageRequest.type, handleAddPackage);
  yield takeLatest(updatePackageRequest.type, handleUpdatePackage);
  yield takeLatest(deletePackageRequest.type, handleDeletePackage);
}
