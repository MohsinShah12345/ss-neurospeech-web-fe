const asyncAction = {
  getVoicesRequest: (state, action) => {
    return {
      ...state,
      voices: [],
      loading: true,
      error: false,
    };
  },
  getVoicesSuccess: (state, action) => {
    return {
      ...state,
      voices: action.payload,
      loading: false,
      error: false,
    };
  },
  getVoicesFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
};
export default asyncAction;
