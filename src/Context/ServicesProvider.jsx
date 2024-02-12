import React, { createContext, useContext, useState } from 'react'

 const ServicesContext = createContext()
 export const useServices = () => useContext(ServicesContext)

const ServicesProvider = ({children}) => {
    const [services ,setServices]= useState(
        
    )
  return (
    <div>ServicesProvider</div>
  )
}

export default ServicesProvider