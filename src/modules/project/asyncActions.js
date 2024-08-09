const asyncAction = {
  createProjectRequest: (state, action) => {
    return {
      ...state,
      project: {},
      projects: [],
      loading: true,
      error: false,
    };
  },
  createProjectSuccess: (state, action) => {
    return {
      ...state,
      projects: [...action.payload.data.projects],
      loading: false,
      error: false,
    };
  },
  createProjectFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  // Get Projects Client Side Dropdown
  getProjectRequest: (state, action) => {
    return {
      ...state,
      project: {},
      loading: true,
      error: false,
    };
  },
  getProjectSuccess: (state, action) => {
    return {
      ...state,
      project: action.payload,
      projects: action.payload,
      loading: false,
      error: false,
    };
  },
  getProjectFailure: (state, action) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  },
  //Specific Single Project Details
  getSingleProjectRequest: (state, action) => {
    return {
      ...state,
      singleProject: [],
      projectLoading: true,
      loading: true,
      error: false,
    };
  },
  getSingleProjectSuccess: (state, action) => {
    return {
      ...state,
      singleProject: action.payload,
      projectLoading: false,
      loading: false,
      error: false,
    };
  },
  getSingleProjectFailure: (state, action) => {
    return {
      ...state,
      projectLoading: false,
      loading: false,
      error: true,
    };
  },
};
export default asyncAction;
