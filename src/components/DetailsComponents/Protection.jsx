import React, { useState,useEffect } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { useServices } from "../../Context/ServicesProvider";


const Protection = () => {
  const {handleServiceClick ,services ,slectedServices}= useServices()
  const [protectionBox, setProtectionBox] = useState(services);
  const [clickedIndex, setClickedIndex] = useState(null);

  const [filterByCategory] = useState(
    protectionBox.filter((service) => service.category === "protection")
  );


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    handleScrollToTop();
  },[]);
  const handleClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

return (
  <div className="flex items-center mdx:flex-wrap">
   {filterByCategory.map((service ,index)=>(
    <div key={service.id}  className="px-2 mdx:mb-2">
        <div
          onClick={()=>{handleClick(index);handleServiceClick(service)}} className={`shadow-box bg-white border-2 w-full  ${
            clickedIndex === index ? "border-primebrand" : ""
          }`}>
          <div
            className="p-4 cursor-pointer flex"
          >
            <div className="min-w-8 mr-4">
              {service.img}
            </div>
            <div className="flex flex-col">
              <div className="text-xl mb-4 font-bold">
                <p>{service.name}</p>
              </div>
              <div className="text-[13px] mb-4 leading-6">
                <p>{service.description}</p>
              </div>
              <div className="leading-4 text-[13px] flex items-center gap-2 mb-4">
                <div className="-ml-1">
                  <span>
                    <IoCheckmark className="text-2xl" />
                  </span>
                </div>
                <p>{service.protection}</p>
              </div>
              <div className="font-bold text-xl">
                <p>${service.price} / day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   ))}
   <div  className="px-2 mdx:mb-2">
        <div
          className='shadow-box bg-white border-2 border-solid border-primebrand '
        >
          <div
            className="p-4 cursor-pointer flex"
          >
            <div className="min-w-8 mr-4">
              <BsBookmarkStarFill className="text-primebrand text-4xl"/>
            </div>
            <div className="flex flex-col">
              <div className="text-xl mb-4 font-bold">
                <p>Maximum excess</p>
              </div>
              <div className="text-[13px] mb-4 leading-6">
                <p>MAD 16,000.00 (approx. $1,594.34) financial responsibility</p>
              </div>
              <div className="leading-4 text-[13px] flex items-center gap-2 mb-4">
                <div className="-ml-1">
                  <span>
                    <IoCheckmark className="text-2xl" />
                  </span>
                </div>
                <p>Includes theft protection</p>
              </div>
              <div className="font-bold text-xl">
                <p>Included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  </div>
);}

export default Protection;
