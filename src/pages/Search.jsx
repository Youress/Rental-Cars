import { useState, useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);

  const [destination, setDestination] = useState(search.destination);
  const [checkIn, setCheckIn] = useState(search.checkIn);
  const [checkOut, setCheckOut] = useState(search.checkOut);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "Casablanca Airport",
    "New York City",
    "Paris",
    "Tokyo",
    "London",
  ];
  const handleSuggestionClick = (selectedDestination) => {
    setDestination(selectedDestination);
    setShowSuggestions(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search.saveSearchValues(destination, checkIn, checkOut);
    navigate("/detailsPage");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <div className="search-sec">
      <div className="sm:px-8 lg:px-20 p-4">
        <img src="../assets/Home/img-search.webp" alt="" />
        <div className="bg-white rounded pt-4">
          <div>
            <div className="px-4">
              <div className=" bg-black rounded-[50vmin] w-fit text-white">
                <div className="p-2 flex items-center">
                  <span className="mr-2">
                    <FaCar className="text-[15px]" />
                  </span>
                  <span className="">Cars</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-4	">
              <div className="flex flex-col relative">
                <div className=" bg-white p-2">
                  <label htmlFor="destin-ion">Pick-up & return</label>
                  <input
                    required
                    id="destin-ion"
                    placeholder="Where are you going?"
                    className="text-md w-full focus:outline-none border py-2 px-4 rounded-md "
                    value={destination}
                    onClick={() => setShowSuggestions(true)}
                    onChange={(event) => setDestination(event.target.value)}
                  />
                </div>
                <div>
                  {showSuggestions && (
                    <div className="absolute top-full left-0 bg-white border rounded-md  w-full z-10">
                      {suggestions.map((suggestion) => (
                        <div
                          key={suggestion}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex  px-2 py-1 gap-2 mdx:flex-col">
                <div className="w-[200px] mdx:w-full">
                  <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    selectsStart
                    dateFormat="MM:dd:yyyy | hh:mm"
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={minDate}
                    maxDate={maxDate}
                    showTimeSelect
                    timeIntervals={60}
                    timeFormat="hh:mm"
                    placeholderText="Check-in Date"
                    className="min-w-full bg-white p-2 focus:outline-none border rounded-md"
                    wrapperClassName="min-w-full"
                  />
                </div>
                <div className="w-[200px] mdx:w-full">
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date)}
                    selectsStart
                    dateFormat="MM:dd:yyyy | hh:mm"
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={minDate}
                    maxDate={maxDate}
                    showTimeSelect
                    timeIntervals={60}
                    timeFormat="hh:mm"
                    placeholderText="Check-out Date"
                    className="min-w-full bg-white p-2 focus:outline-none border rounde"
                    wrapperClassName="min-w-full"
                  />
                </div>
              </div>

              <div className="my-8">
                <button className="w-fit bg-primebrand rounded-md px-8 text-white h-full p-2 delay-300  font-bold text-xl">
                  Show Cars
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
