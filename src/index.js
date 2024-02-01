import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from 'react-redux';
import { Toaster } from "react-hot-toast";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <BrowserRouter>
  <Provider store={store}>
 <App />
 <Toaster/>
 </Provider>
  </BrowserRouter>
   
  </>
);
