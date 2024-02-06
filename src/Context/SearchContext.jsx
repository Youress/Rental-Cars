import React, { useContext, useState } from "react";
import { createContext } from "react";



export const SearchContext = createContext();



export const SearchContextProvider = ({
  children,
}) => {
  const [destination, setDestination] = useState(
    () => sessionStorage.getItem("destination") || ""
  );
  const [checkIn, setCheckIn] = useState(
    () =>
      new Date(sessionStorage.getItem("checkIn") || new Date().toISOString())
  );
  const [checkOut, setCheckOut] = useState(
    () =>
      new Date(sessionStorage.getItem("checkOut") || new Date().toISOString())
  );
  

  const saveSearchValues = (
    destination,
    checkIn,
    checkOut,
    
  ) => {
    setDestination(destination);
    setCheckIn(checkIn);
    setCheckOut(checkOut);
   
    

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("checkIn", checkIn.toISOString());
    sessionStorage.setItem("checkOut", checkOut.toISOString());
    
    
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        checkIn,
        checkOut,
       
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context ;
};