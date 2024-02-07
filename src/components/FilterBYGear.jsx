import React from 'react'
import { useFilter } from "../Context/FilterReducer";
const FilterByGear = ({onChange}) => {
  const {state} = useFilter();
  return (
    <div className=" p-4">
      <h4 className="text-md font-semibold mb-2">Vehicle Gear</h4>
      
      {['Automatic',"Manual"].map((type) => (
        <label key={type} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={type}
            checked={state.selectedGear.includes(type)}
            onChange={onChange}
          />
          <span>{type}</span>
        </label>
      ))}
    </div>
  )
}

export default FilterByGear