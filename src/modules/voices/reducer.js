import { createSlice } from "@reduxjs/toolkit";
import asyncAction from "./asyncActions";
const initialState = {
  loading: false,
  voices: [],
  error: false,
};

export const counterSlice = createSlice({
  name: "voices",
  initialState,
  reducers: {
    ...asyncAction,
  },
});

export const { getVoicesRequest, getVoicesSuccess, getVoicesFailure } =
  counterSlice.actions;

export const selectCount = (state) => {
  return { value: state.voices.value };
};

export default counterSlice.reducer;
