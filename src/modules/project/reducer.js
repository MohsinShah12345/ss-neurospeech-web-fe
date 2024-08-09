import { createSlice } from "@reduxjs/toolkit";
import asyncAction from "./asyncActions";
const initialState = {
  loading: false,
  project: {},
  projects: [],
  singleProject: [],
  error: false,
};

export const counterSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    ...asyncAction,
  },
});

export const {
  createProjectRequest,
  createProjectSuccess,
  createProjectFailure,
  getProjectRequest,
  getProjectSuccess,
  getProjectFailure,
  getSingleProjectRequest,
  getSingleProjectSuccess,
  getSingleProjectFailure,
} = counterSlice.actions;

export const selectCount = (state) => {
  return { value: state.projects.value };
};

export default counterSlice.reducer;
