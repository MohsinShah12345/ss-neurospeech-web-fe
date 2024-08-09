import { createSlice } from "@reduxjs/toolkit";
import asyncAction from "./asyncActions";
const initialState = {
  loading: false,
  voiceOvers: {},
  error: false,
};

export const counterSlice = createSlice({
  name: "voiceOvers",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // these are action

    ...asyncAction, // we are importing async Action of saga, we can also write these actions in this reducer
  },
});

export const {
  createVoiceOverRequest,
  createVoiceOverSuccess,
  createVoiceOverFailure,
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => {
  return { value: state.voiceOvers.value };
};

export default counterSlice.reducer;
