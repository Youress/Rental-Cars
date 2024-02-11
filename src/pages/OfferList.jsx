import React, { useState } from "react";
import CarsCard from "../components/CarsCard";
import FilterType from "../components/FilterType";
import { useFilter } from "../Context/FilterReducer";
import FilterByGear from "../components/FilterBYGear";
import { useOutletContext } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

const OfferList = () => {
  const { state, handleTypeChange, HandleGearChange, clearFilter,sortBYPrice } =
    useFilter();
  const [sortDrop, setSortDrop] = useState(false);
  const [days] = useOutletContext();

  return (
    <section className="bg-sectiongray pb-4">
      <div className="md:px-10 mdx:px-4">
        <div className="flex items-center justify-between">
          <div className="">
            <button
              className="px-2 py-1 text-white bg-primebrand font-bold border rounded-md "
              onClick={() => clearFilter()}
            >
              Rest Filter
            </button>
          </div>
          <div className="px-2 min-h-16 flex items-center relative">
            <div
              className="ml-auto flex px-2 py-1 text-white bg-primebrand font-bold border rounded-md cursor-pointer  "
              onClick={() => setSortDrop(!sortDrop)}
            >
              Sort by
            </div>
            {sortDrop && (
              <div className="absolute top-full bg-white rounded-md right-0 min-w-60 shadow-2xl  ">
                <div className="font-bold cursor-pointer px-4 my-4 flex items-center justify-between" onClick={()=>{sortBYPrice("low")}}>
                  <span>
                    <FaArrowUpLong />
                  </span>
                  <p>Price Low to High</p>
                </div>
                <div className="font-bold cursor-pointer px-4 my-4 flex items-center justify-between" onClick={()=>{sortBYPrice("high")}}>
                  <span>
                    <FaArrowDownLong />
                  </span> 
                  <p>Price High to Low</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-twosec gap-8 mdx:grid-cols-1">
          <div className="mdx:flex items-center justify-between border-b border-slate-300 bg-white shadow-2xl rounded-md">
            <div>
              <FilterType onChange={handleTypeChange} state={state} />
            </div>
            <div className="mdx:mb-8">
              <FilterByGear onChange={HandleGearChange} state={state} />
            </div>
          </div>

          <div className="min-h-screen	">
            <div className="flex flex-wrap items-center gap-2 ">
              {state.filteredCars.map((car) => {
                return (
                  <CarsCard car={car} key={car.id} id={car.id} total={days} />
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfferList;
