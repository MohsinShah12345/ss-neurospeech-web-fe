import { all, fork } from "redux-saga/effects";
import authWatcher from "./auth/saga";
import postsWatcher from "./posts/saga";
import voicesWatcher from "./voices/saga";
import projectWatcher from "./project/saga";
import voiceOverWatcher from "./voiceOvers/saga";
import packagesWatcher from "./packages/saga";
import subscribeWatcher from "./subscription/saga";
export default function* sagawatcher() {
  yield all([
    fork(authWatcher),
    fork(postsWatcher),
    fork(voicesWatcher),
    fork(projectWatcher),
    fork(voiceOverWatcher),
    fork(packagesWatcher),
    fork(subscribeWatcher),
  ]);
}
