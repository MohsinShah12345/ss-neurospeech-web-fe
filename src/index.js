// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import store from "./modules/store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./modules/store";

const container = document.getElementById("root");
// import { ConnectedRouter } from 'connected-react-router';
// import reportWebVitals from './reportWebVitals';
// import 'antd/dist/antd.min.css';
// import './theme/base.scss';

// import configureStore, { history } from './store';
// import App from './components/App';
// import { Popup } from 'components/Common';
// import * as serviceWorker from './serviceWorker';

// const store = configureStore({});
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
