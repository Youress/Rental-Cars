import React from 'react'
import { useFilter } from "../Context/FilterReducer";
const FilterType = ({onChange}) => {
  const {clearFilter ,state} = useFilter();
  return (
    <div className="pb-5">
      <h4 className="text-md font-semibold mb-2">Vehicle type</h4>
      <div>
        <button onClick={()=>clearFilter()}>Clear Filter</button>
      </div>
      {['suv','multiseater',"sedan"].map((type) => (
        <label key={type} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={type}
            checked={state.selectedType.includes(type)}
            onChange={onChange}
          />
          <span>{type}</span>
        </label>
      ))}
    </div>
  )
}

export default FilterType