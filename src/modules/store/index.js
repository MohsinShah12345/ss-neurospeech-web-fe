import {
  combineReducers,
  configureStore,
  applyMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import productReducer from "../features/product/productSlice";
import createSagaMiddleware from "redux-saga";
// import sagawatcher from "../features/rootSaga";
import rootSaga from "../rootSaga";
import rootReducer from "../rootReducer";
// const reducer = combineReducers({
//   counter: counterReducer,
//   product: productReducer,
// });
const sagaMidleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }), // serializableCheck: false to avoid warning
    sagaMidleware,
  ],
});
sagaMidleware.run(rootSaga);
export default store;
