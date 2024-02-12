import React ,{useEffect} from 'react'
import { Link } from "react-router-dom";


const AddsOn = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


useEffect(()=>{
  handleScrollToTop()
})
  return (
    <div>
        <div>
      </div>
    </div>
  )
}

export default AddsOn