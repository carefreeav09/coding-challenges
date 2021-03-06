import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/argon-design-system.css";
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css'
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router basename='/coding-challenges'>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
