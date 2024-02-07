import React from "react";
import CarsCard from "../components/CarsCard";
import FilterType from "../components/FilterType";
import { useFilter } from "../Context/FilterReducer";
import FilterByGear from "../components/FilterBYGear";

const OfferList = () => {
  const { state, handleTypeChange ,HandleGearChange } = useFilter();

  return (
    <section className="bg-sectiongray pb-4">
      <div className="md:px-10 mdx:px-4">
        <div className="sort-off">
          <div className="px-2 min-h-16 flex items-center">
            <div className="ml-auto flex">Sort by</div>
          </div>
        </div>
        <div className="grid grid-cols-twosec gap-8 mdx:grid-cols-1">
          <div className="mdx:flex items-center justify-between border-b border-slate-300">
            <div>
              <FilterType onChange={handleTypeChange} state={state} />
            </div>
            <div className="mdx:mb-12">
              <FilterByGear onChange={HandleGearChange} state={state} />
            </div>
          </div>

          <div className="min-h-screen	">
            <div className="flex flex-wrap items-center gap-2 mdx:pl-4">
              {state.filteredCars.map((car) => {
                return <CarsCard car={car} key={car.id} />;
              })}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default OfferList;
