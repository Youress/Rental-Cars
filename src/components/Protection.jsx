import React, { useState ,useEffect } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import Loading from "react-loading";

const Protection = () => {




 


const [clickedIndex, setClickedIndex] = useState(null);

const handleClick = (index) => {
  setClickedIndex(index);
};

return (
  <div className="flex items-center mdx:flex-wrap">
    {[1, 2, 3].map((index) => (
      <div key={index} className="px-2 mdx:mb-2">
        <div
          className={`shadow-box bg-white border-2 border-solid ${
            clickedIndex === index ? "border-primebrand" : ""
          }`}
        >
          <div
            className="p-4 cursor-pointer flex"
            onClick={() => handleClick(index)}
          >
            <div className="min-w-8 mr-4">
              <BsBookmarkStarFill className="text-primebrand text-4xl" />
            </div>
            <div className="flex flex-col">
              <div className="text-xl mb-4 font-bold">
                <p>Minimum excess</p>
              </div>
              <div className="text-[13px] mb-4 leading-6">
                <p>MAD 3,000.00 (approx. $299.52) financial responsibility</p>
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
                <p>$10.78 / day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);}

export default Protection;
