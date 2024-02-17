import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import LayoutHome from "./components/Layout/LayoutHome";
import LayoutDetails from "./components/Layout/LayoutDetails";
import OfferList from "./pages/OfferList";
import DetailsCard from "./pages/DetailsCard";
import Protection from "./components/DetailsComponents/Protection";
import AddsOn from "./components/DetailsComponents/AddsOn";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route index element={<Search />} />
      </Route>
      <Route path="detailsPage" element={<LayoutDetails />}>
        <Route index element={<OfferList />} />
        <Route path=":id" element={<DetailsCard />}>
          <Route index element={<Protection />} />
          <Route path="addson" element={<AddsOn />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
