const asyncActions = {
  subscribeNeuroSpeechPackageRequest: (state, action) => {
    return {
      ...state,
      loading: true,
      error: false,
    };
  },
  subscribeNeuroSpeechPackageSuccess: (state, action) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  },
  subscribeNeuroSpeechPackageFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
};
export default asyncActions;
