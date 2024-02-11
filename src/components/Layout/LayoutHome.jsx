import React from "react";
import BarHeader from "../BarHeader";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const LayoutHome = () => {
  return (
    <>
      <BarHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutHome;
