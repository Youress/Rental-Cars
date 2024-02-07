import React  from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import LayoutHome from "./components/LayoutHome";
import LayoutDetails from "./components/LayoutDetails";
import OfferList from "./pages/OfferList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome />} >
        <Route index element={<Search/>}/>
      </Route>
      <Route path="/detailsPage" element={<LayoutDetails/>}>
        <Route index element={<OfferList/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;
