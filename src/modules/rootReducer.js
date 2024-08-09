import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import postReducer from "./posts/reducer";
import voicesReducer from "./voices/reducer";
import projectReducer from "./project/reducer";
import voiceOverReducer from "./voiceOvers/reducer";
import packagesReducer from "./packages/reducer";
import subscribeReducer from "./subscription/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  voices: voicesReducer,
  project: projectReducer,
  voiceOvers: voiceOverReducer,
  packages: packagesReducer,
  subscriptions: subscribeReducer,
});
export default rootReducer;
