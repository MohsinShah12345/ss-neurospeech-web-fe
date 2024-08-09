import { takeLatest, call, put } from "redux-saga/effects";
import {
  createProjectRequest,
  createProjectSuccess,
  createProjectFailure,
  getProjectRequest,
  getProjectSuccess,
  getProjectFailure,
  getSingleProjectRequest,
  getSingleProjectSuccess,
  getSingleProjectFailure,
} from "./reducer";
import {
  createProjectApi,
  getProjectsApi,
  getSingleProjectsApi,
} from "../../services/project";
import { message as antMessage } from "antd";

export function* handleProjectCreation({ payload }) {
  try {
    const { data } = yield call(createProjectApi, payload);
    yield put(createProjectSuccess(data));
    antMessage.success("Project Added!", 2);
  } catch (error) {
    antMessage.error("Failed to add Project", 2);
    yield put(createProjectFailure(error));
  }
}
export function* handleGetProjects() {
  try {
    const { projects } = yield call(getProjectsApi);
    yield put(getProjectSuccess(projects));
  } catch (error) {
    yield put(getProjectFailure(error));
  }
}
export function* handleGetSingleProject({ payload }) {
  try {
    const { data } = yield call(getSingleProjectsApi, payload);
    yield put(getSingleProjectSuccess(data));
  } catch (error) {
    yield put(getSingleProjectFailure(error));
  }
}
export default function* projectWatcher() {
  yield takeLatest(createProjectRequest.type, handleProjectCreation);
  yield takeLatest(getProjectRequest.type, handleGetProjects);
  yield takeLatest(getSingleProjectRequest.type, handleGetSingleProject);
}
