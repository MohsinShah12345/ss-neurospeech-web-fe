import { createAction, createSlice } from "@reduxjs/toolkit";
import asyncActions from "./asyncActions";
const initialState = {
  post: {},
  posts: [],
  loading: false,
  error: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    ...asyncActions,
  },
});
export const {
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
} = postSlice.actions;
export const selectPost = (state) => {
  return state.post;
};
export default postSlice.reducer;
