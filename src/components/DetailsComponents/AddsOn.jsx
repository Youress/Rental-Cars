import React, { useEffect, useState } from "react";
import { useServices } from "../../Context/ServicesProvider";

const AddsOn = () => {
  const {handleServiceClick ,services ,slectedServices}= useServices()
  const [addBox] = useState(services);
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
  },[]);
  const handleClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="flex items-center flex-wrap ">
      {filterByCategory.map((service , index) => (
        <div key={index} className="px-2 mdx:mb-2   self-stretch flex lg:flex-[1_1_50%] mds:flex-[1_1_100%] mds:max-w-full lg:max-w-[50%] mb-4 w-full">
          <div onClick={()=>{handleClick(index);handleServiceClick(service)}} className={`shadow-box bg-white border-2 w-full  ${
            clickedIndex === index ? "border-primebrand" : ""
          }`}>
            <div className="p-4 cursor-pointer flex h-full">
              <div className="min-w-8 mr-4">{service.img}</div>
              <div className="flex flex-col">
                <div className="text-xl mb-4 font-bold">
                  <p>{service.name}</p>
                </div>
                <div className="text-[0.875rem] mb-4 leading-6">
                  <p>{service.description}</p>
                </div>
                <div className="font-bold text-xl mt-auto">
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
