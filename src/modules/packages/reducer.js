import { createSlice } from "@reduxjs/toolkit";
import asyncAction from "./asyncActions";

const initialState = {
  packageDetails: [],
  singlePackage: {},
  packageSubscriptions: [],
  loading: false,
  error: false,
};

export const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    ...asyncAction,
  },
});

export const {
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
} = packageSlice.actions;

export const selectPackage = (state) => {
  return { value: state.packages.value };
};

export default packageSlice.reducer;
