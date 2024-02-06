import React, { useState } from "react";
import { useSearchContext } from "../Context/SearchContext";

const DetailsPage = () => {
  const search = useSearchContext();

  const [destination, setDestination] = useState(search.destination);
  const [checkIn, setCheckIn] = useState(search.checkIn);
  const [checkOut, setCheckOut] = useState(search.checkOut);
  console.log(checkOut)
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour :"numeric",
      minute :"numeric"
    });
  };
  return (
    <div>
      
      <div>destination{destination}</div>
      <div>checkOut{formatDate(checkOut)}</div>
      <div>checkIn {formatDate(checkIn)}</div>
    </div>
  );
};

export default DetailsPage;
