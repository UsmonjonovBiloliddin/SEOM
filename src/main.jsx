import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store"
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
<div className="dd Small">
<BrowserRouter>
    <React.StrictMode>
      <Provider  store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
</div>
);
