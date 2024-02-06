import React, { useState, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Search from "./pages/Search";
import DetailsPage from "./pages/DetailsPage";
import LayoutHome from "./components/LayoutHome";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome />} >
        <Route index element={<Search/>}/>
      </Route>
      <Route path="/detailsPage" element={<DetailsPage/>}/>
    </Routes>
  );
}

export default App;
