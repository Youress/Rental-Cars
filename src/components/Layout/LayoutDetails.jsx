import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import HeaderTwo from "../HeaderTwo";
import { useSearchContext } from "../../Context/SearchContext";

const LayoutDetails = () => {
  const search = useSearchContext();

  let Difference_In_Time = search.checkOut.getTime() - search.checkIn.getTime();

  // Calculating the no. of days between
  // two dates
  let rangeDays = Math.round(Difference_In_Time / (1000 * 3600 * 24));

  const days = [rangeDays];

  return (
    <>
      <HeaderTwo />
      <Outlet context={days} />
      <Footer />
    </>
  );
};

export default LayoutDetails;
