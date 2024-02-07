import React from "react";
import DetailsPage from "../pages/OfferList";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderTwo from "./HeaderTwo";

const LayoutDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutDetails;
