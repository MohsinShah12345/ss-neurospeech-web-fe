import { createSlice, createAction } from "@reduxjs/toolkit";
import asyncAction from "./asyncActions";
const initialState = {
  loading: false,
  userData: {},
  error: false,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // these are action

    ...asyncAction, // we are importing async Action of saga, we can also write these actions in this reducer
  },
});

export const {
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
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => {
  return { value: state.auth.value };
};

export default counterSlice.reducer;
