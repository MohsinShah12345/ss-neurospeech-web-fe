import { takeLatest, call, put } from "redux-saga/effects";
import {
  getPostRequest,
  getPostSuccess,
  getPostFailure,
  getManyPostsRequest,
  getManyPostsSuccess,
  getManyPostsFailure,
  addPostRequest,
  addPostSuccess,
  addPostFailure,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
  deleteManyPostRequest,
  deleteManyPostSuccess,
  deleteManyPostFailure,
} from "./reducer";

import posts from "../../services/posts";
export function* handleGetSinglePost({ payload }) {
  try {
    const { data } = yield call(posts.getPost, payload);
    yield put(getPostSuccess(data));
  } catch (error) {
    yield put(getPostFailure(error.message));
  }
}
export function* handleGetManyPosts({ payload }) {
  try {
    const { data } = yield call(posts.getMany, payload);
    yield put(getManyPostsSuccess(data));
  } catch (error) {
    yield put(getManyPostsFailure(error.message));
  }
}
export function* handleAddPost({ payload }) {
  try {
    const { data } = yield call(posts.addPost, payload);
    yield put(addPostSuccess(data));
  } catch (error) {
    yield put(addPostFailure(error.message));
  }
}
export function* handleUpdatePost({ payload }) {
  try {
    const { data } = yield call(posts.updatePost, payload);
    yield put(updatePostSuccess(data));
  } catch (error) {
    yield put(updatePostFailure(error.message));
  }
}
export function* handleDeletePost({ payload }) {
  try {
    const { data } = yield call(posts.deletePost, payload);
    yield put(deletePostSuccess(data));
  } catch (error) {
    yield put(deletePostFailure(error.message));
  }
}
export function* handleDeleteManyPost({ payload }) {
  try {
    const { data } = yield call(posts.deleteMany, payload);
    yield put(deleteManyPostSuccess(data));
  } catch (error) {
    yield put(deleteManyPostFailure(error.message));
  }
}
export default function* postWatcher() {
  yield takeLatest(getPostRequest.type, handleGetSinglePost);
  yield takeLatest(getManyPostsRequest.type, handleGetManyPosts);
  yield takeLatest(addPostRequest.type, handleAddPost);
  yield takeLatest(updatePostRequest.type, handleUpdatePost);
  yield takeLatest(deleteManyPostRequest.type, handleDeleteManyPost);
  yield takeLatest(deletePostRequest.type, handleDeletePost);
}
