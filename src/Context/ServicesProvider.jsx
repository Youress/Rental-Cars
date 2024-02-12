import React, { createContext, useContext, useState } from "react";
import data from "../ServicesData";

const ServicesContext = createContext();
export const useServices = () => useContext(ServicesContext);

const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState(data);

  const [slectedServices ,setSelectedServices] = useState(services.filter(service => service.selected)) 

  const handleServiceClick = (clickService) =>{
    const updateServices = services.map((service)=>({
      ...service,
      selected : service.id === clickService.id ? !service.selected : service.selected
    }))
    setServices(updateServices)

    const updateSelectedServices = updateServices.filter((service)=> service.selected)
    setSelectedServices(updateSelectedServices)
  }
  return (
    <ServicesContext.Provider value={{services , setServices ,slectedServices,handleServiceClick}}>
      {children}
    </ServicesContext.Provider>
  )
};

export default ServicesProvider;
