const asyncAction = {
  getPackageDetailsRequest: (state, action) => {
    return {
      ...state,
      packageDetails: [],
      loading: true,
      error: false,
    };
  },
  getPackageDetailsSuccess: (state, action) => {
    return {
      ...state,
      packageDetails: action.payload,
      loading: false,
      error: false,
    };
  },
  getPackageDetailsFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  getSinglePackageRequest: (state, action) => {
    return {
      ...state,
      singlePackage: {},
      loading: true,
      error: false,
    };
  },
  getSinglePackageSuccess: (state, action) => {
    return {
      ...state,
      singlePackage: action.payload,
      loading: false,
      error: false,
    };
  },
  getSinglePackageFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  getPackageSubscriptionsRequest: (state, action) => {
    return {
      ...state,
      subscriptionLoading: true,
      error: false,
    };
  },
  getPackageSubscriptionsSuccess: (state, action) => {
    return {
      ...state,
      packageSubscriptions: action.payload,
      subscriptionLoading: false,
      error: false,
    };
  },
  getPackageSubscriptionsFailure: (state, action) => {
    return {
      ...state,
      subscriptionLoading: false,
      error: true,
    };
  },
  addPackageRequest: (state, action) => {
    return {
      ...state,
      packagesloading: true,
      error: false,
    };
  },
  addPackageSuccess: (state, action) => {
    return {
      ...state,
      packagesloading: false,
      error: false,
    };
  },
  addPackageFailure: (state, action) => {
    return {
      ...state,
      packagesloading: false,
      error: true,
    };
  },
  updatePackageRequest: (state, action) => {
    return {
      ...state,
      packagesloading: true,
      error: false,
    };
  },
  updatePackageSuccess: (state, action) => {
    return {
      ...state,
      packageDetails: [...action.payload],
      packagesloading: false,
      error: false,
    };
  },
  updatePackageFailure: (state, action) => {
    return {
      ...state,
      packagesloading: false,
      error: true,
    };
  },
  deletePackageRequest: (state, action) => {
    return {
      ...state,
      packagesloading: true,
      error: false,
    };
  },
  deletePackageSuccess: (state, action) => {
    return {
      ...state,
      packageDetails: [...action.payload],
      packagesloading: false,
      error: false,
    };
  },
  deletePackageFailure: (state, action) => {
    return {
      ...state,
      packagesloading: false,
      error: true,
    };
  },
};
export default asyncAction;
