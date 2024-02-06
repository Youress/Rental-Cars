import React from 'react'
import BarHeader from './BarHeader'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const LayoutHome = () => {
  return (
    <>
    <BarHeader/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default LayoutHome