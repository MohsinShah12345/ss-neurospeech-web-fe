import { takeLatest, call, put } from "redux-saga/effects";
import {
  signInRequest,
  signInSuccess,
  signInFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signOutRequest,
  signOutSuccess,
  signOutFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailure,
} from "./reducer";
import {
  signIn,
  signUp,
  signOut,
  updateUser,
  getUser,
  getAllUsers,
} from "../../services/auth";
import {
  setSessionCookies,
  unSetSessionCookies,
} from "../../modules/common/utils";
import { message as antMessage } from "antd";

export function* handlesignIn({ payload }) {
  try {
    const { data } = yield call(signIn, payload); // api call
    yield put(signInSuccess(data)); // Success case to update reducer
    setSessionCookies(data.data);
  } catch (error) {
    antMessage.error("Incorrect UserName / Password", 2);
    yield put(signInFailure(error.message)); // failure case
  }
}
export function* handlesignUp({ payload }) {
  try {
    const { data } = yield call(signUp, payload); // api call
    antMessage.success("Account Created Successfully!", 2);
    yield put(signUpSuccess(data)); // Success case to update reducer
  } catch (error) {
    yield put(signUpFailure(error.message)); // failure case
  }
}

export function* handlesignOut({ payload }) {
  try {
    const { data } = yield call(signOut, payload);
    unSetSessionCookies();
    yield put(signOutSuccess(data));
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}
export function* handleUpdateUser({ payload }) {
  try {
    const { data } = yield call(updateUser, payload);
    yield put(updateUserSuccess(data));
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}
export function* handlegetUser({ payload }) {
  try {
    const { data } = yield call(getUser, payload);
    yield put(getUserSuccess(data));
  } catch (error) {
    yield put(getUserFailure(error.message));
  }
}
export function* handlegetAllUsers() {
  try {
    const { data } = yield call(getAllUsers);
    yield put(getAllUsersSuccess(data));
  } catch (error) {
    yield put(getAllUsersFailure(error.message));
  }
}
export default function* authWatcher() {
  yield takeLatest(signInRequest.type, handlesignIn);
  yield takeLatest(signUpRequest.type, handlesignUp);
  yield takeLatest(signOutRequest.type, handlesignOut);
  yield takeLatest(updateUserRequest.type, handleUpdateUser);
  yield takeLatest(getUserRequest.type, handlegetUser);
  yield takeLatest(getAllUsersRequest.type, handlegetAllUsers);
}
