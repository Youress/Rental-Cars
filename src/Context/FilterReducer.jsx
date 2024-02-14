import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const initialState = {
  cars: [], // Your initial list of cars
  filteredCars: [], // Filtered cars based on type
  selectedType: [],
  selectedGear: [], // Selected types for filtering
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_CARS":
      return { ...state, cars: action.payload };
    case "SET_FILTERED_CARS":
      return { ...state, filteredCars: action.payload };
    case "SET_SELECTED_TYPE":
      return { ...state, selectedType: action.payload };
    case "SET_SELECTED_GEAR":
      return { ...state, selectedGear: action.payload };
    case "CLEAR_FILTER":
      return { ...state, filteredCars: action.payload };
    default:
      return state;
  }
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [cars, setCars] = useState();
  const [loaded ,setLoaded] = useState(true)
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://default-4ba94-default-rtdb.firebaseio.com/cars.json"
        );
        // Handle the JSON data
        const jsonData = response.data;
        // Dispatch actions after fetching data
        setCars(jsonData);
        dispatch({ type: "SET_CARS", payload: jsonData });
        dispatch({ type: "SET_FILTERED_CARS", payload: jsonData });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoaded(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const clearFilter = () => {
    dispatch({ type: "SET_SELECTED_TYPE", payload: [] });
    dispatch({ type: "CLEAR_FILTER", payload: cars });
    dispatch({ type: "SET_SELECTED_GEAR", payload: [] });
    dispatch({ type: "SORT_PRICE", payload: false });
  };

const sortBYPrice = (price) =>{
  if(price === 'low'){
    const filterByPrice = state.cars.sort((a,b)=> a.price - b.price)
    dispatch ({type :'SET_FILTERED_CARS',payload :filterByPrice})
  }else{
    const filterByPrice = state.cars.sort((a,b)=> b.price - a.price)
    dispatch ({type :'SET_FILTERED_CARS',payload :filterByPrice})
  }

}




 const HandleGearChange = (event) => {
  const carsGear = event.target.value;

  const filteredGear = state.selectedGear.includes(carsGear)
    ? [] 
    : [carsGear];  

  dispatch({ type: "SET_SELECTED_GEAR", payload: filteredGear });

  const filteredCars = state.cars.filter((car) =>
  filteredGear.length === 0 ? true : car.gear === carsGear
  );

  dispatch({ type: "SET_FILTERED_CARS", payload: filteredCars });
};


  const handleTypeChange = (event) => {
    const type = event.target.value;
    const selectedType = state.selectedType.includes(type)
      ? state.selectedType.filter((t) => t !== type)
      : [...state.selectedType, type];

    dispatch({ type: "SET_SELECTED_TYPE", payload: selectedType });

    // Filter cars based on selected types
    const filteredCars = state.cars.filter((car) =>
      selectedType.length === 0 ? true : selectedType.includes(car.type)
    );

    dispatch({ type: "SET_FILTERED_CARS", payload: filteredCars });
  };

  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch,
        handleTypeChange,
        clearFilter,
        HandleGearChange,
        sortBYPrice,
        loaded,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default FilterProvider;

export const useFilter = () => {
  return useContext(FilterContext);
};
