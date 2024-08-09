import { createSlice } from "@reduxjs/toolkit";
import asyncAction from "./asyncActions";

const initialState = {
  loading: false,
  error: false,
};

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    ...asyncAction,
  },
});
export const {
  subscribeNeuroSpeechPackageRequest,
  subscribeNeuroSpeechPackageSuccess,
  subscribeNeuroSpeechPackageFailure,
} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
