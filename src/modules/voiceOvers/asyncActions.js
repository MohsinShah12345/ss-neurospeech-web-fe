const asyncAction = {
  createVoiceOverRequest: (state, action) => {
    return {
      ...state,
      voiceOvers: {},
      loading: true,
      error: false,
    };
  },
  createVoiceOverSuccess: (state, action) => {
    return {
      ...state,
      voiceOvers: action.payload,
      loading: false,
      error: false,
    };
  },
  createVoiceOverFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
};
export default asyncAction;
