import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Store from "./states/Store";

import { FilterProvider } from "./context/FiltersContext";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Provider>
  </React.StrictMode>
);
