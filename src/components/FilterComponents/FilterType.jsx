import React from "react";
import { useFilter } from "../../Context/FilterReducer";
const FilterType = ({ onChange, id }) => {
  const { state } = useFilter();
  return (
    <div className="p-4 ">
      <h4 className="text-md font-semibold mb-2">Vehicle type</h4>
      {["suv", "multiseater", "sedan"].map((type) => (
        <div key={type} className="flex items-center gap-2">
          <label className="flex items-center space-x-2" htmlFor={id}>
            <input
              id={id}
              type="checkbox"
              className="rounded"
              value={type}
              checked={state.selectedType.includes(type)}
              onChange={onChange}
            />
            <span>{type}</span>
            
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterType;
