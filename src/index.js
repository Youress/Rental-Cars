import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./Context/SearchContext";
import { FilterProvider } from "./Context/FilterReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SearchContextProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </SearchContextProvider>
  </BrowserRouter>
);
