const asyncAction = {
  signInRequest: (state, action) => {
    return {
      ...state,
      userData: [],
      isLoggedIn: false,
      loading: true,
      error: false,
    };
  },
  signInSuccess: (state, action) => {
    return {
      ...state,
      userData: action.payload,
      isLoggedIn: true,
      loading: false,
      error: false,
    };
  },
  signInFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  signUpRequest: (state, action) => {
    return {
      ...state,
      loading: true,
      error: false,
    };
  },
  signUpSuccess: (state, action) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  signUpFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  signOutRequest: (state, action) => {
    return {
      ...state,
      loading: true,
      error: false,
    };
  },
  signOutSuccess: (state, action) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  signOutFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  updateUserRequest: (state, action) => {
    return {
      ...state,
      loading: true,
      error: false,
    };
  },
  updateUserSuccess: (state, action) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  updateUserFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  getUserRequest: (state, action) => {
    return {
      ...state,
      userData: [],
      loading: true,
      error: false,
    };
  },
  getUserSuccess: (state, action) => {
    return {
      ...state,
      userData: action.payload.data[0],
      loading: false,
      error: false,
    };
  },
  getUserFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  getAllUsersRequest: (state, action) => {
    return {
      ...state,
      users: [],
      loading: true,
      error: false,
    };
  },
  getAllUsersSuccess: (state, action) => {
    return {
      ...state,
      users: action.payload.data,
      loading: false,
      error: false,
    };
  },
  getAllUsersFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
};
export default asyncAction;
