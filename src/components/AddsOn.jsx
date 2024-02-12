import React, { useEffect, useState } from "react";
import { useServices } from "../Context/ServicesProvider";

const AddsOn = () => {
  const {handleServiceClick ,services ,slectedServices}= useServices()
  const [addBox, setAddbox] = useState(services);
  const [clickedIndex, setClickedIndex] = useState(null);

  console.log(slectedServices)

  const [filterByCategory] = useState(
    addBox.filter((service) => service.category === "addson")
  );

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    handleScrollToTop();
  });
  const handleClick = (index) => {
    setClickedIndex(index);
  };
  return (
    <div className="flex items-center flex-wrap gap-y-8">
      {filterByCategory.map((service , index) => (
        <div key={index} className="px-2 mdx:mb-2  basis-1/3  self-stretch flex ">
          <div onClick={()=>{handleClick(index);handleServiceClick(service)}} className={`shadow-box bg-white border-2  ${
            clickedIndex === index ? "border-primebrand" : ""
          }`}>
            <div className="p-4 cursor-pointer flex">
              <div className="min-w-8 mr-4">{service.img}</div>
              <div className="flex flex-col">
                <div className="text-xl mb-4 font-bold">
                  <p>{service.name}</p>
                </div>
                <div className="text-[0.875rem] mb-4 leading-6">
                  <p>{service.description}</p>
                </div>
                <div className="leading-4 text-[13px] flex items-center gap-2 mb-4"></div>
                <div className="font-bold text-xl">
                  <p>${service.price} / day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddsOn;
