// import react and reactdom
import React from "react";
import ReactDOM from "react-dom";
// import the store
import store from "./store";
// import the provider
import { Provider } from "react-redux";
// import app
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById("root"));
