import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { useServices } from "../Context/ServicesProvider";
import { useSearchContext } from "../Context/SearchContext";
import { IoIosArrowBack } from "react-icons/io";

const SummaryCheckout = () => {
  const { slectedServices ,totalPrice } = useServices();
  const search = useSearchContext();
  const [car, setCar] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [days] = useOutletContext();
  const [showInfo, setShowInfo] = useState(false);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://default-4ba94-default-rtdb.firebaseio.com/cars.json"
        );
        // Handle the JSON data
        const jsonData = response.data;
        const filterCar = jsonData.find((car) => car.id === id);
        setLoading(false);
        setCar({ ...filterCar });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="px-2 ">
        <div className=" bg-white p-6 shadow-box">
          <div className="flex mb-4 ">
            <div className="mmx:flex-[0_0_6rem] flex-[0_0_6.75rem]">
              <img src={car.imageUrl} alt={car.name} />
            </div>
            <div className="flex items-center flex-col">
              <div className="mb-">
                <p className="text-xl font-bold">{car.name}</p>
              </div>
              <div className="mb-1">
                <p className="font-normal text-[14px] text-primegray">
                  {car.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 pb-4">
              <CiClock2 />
              <p className="font-normal text-sm">{days} rental days</p>
            </div>
            <div
              className="mmx:hidden cursor-pointer"
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            >
              <IoIosArrowBack
                className={
                  showInfo
                    ? "duration-500 rotate-270"
                    : "duration-500 rotate-90"
                }
              />
            </div>
          </div>

          <div className="h-[1.5px] w-full m-auto bg-[#ccc]"></div>
          <div
            className={`smx:relative smx:overflow-hidden ${
              showInfo ? "smx:h-[390.667px]" : "smx:h-0"
            } smx:transition-[height] smx:duration-300 smx:ease-out smx:delay-0`}
          >
            <div className="smx:absolute smx:top-0 smx:w-full smx:bg-transparent">
              <div>
                <div className="py-2 px-4">
                  <div className=" font-normal text-[12px] flex flex-col">
                    <div className="font-bold text-base flex-col flex pb-4">
                      <span>{search.destination}</span>
                      <span className="text-sm font-normal">
                        {formatDate(search.checkIn)}
                      </span>
                    </div>

                    <div className="font-bold text-base flex flex-col">
                      <span>{search.destination}</span>
                      <span className="text-sm font-normal">
                        {formatDate(search.checkOut)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1.5px] w-full m-auto bg-[#ccc]"></div>
              <div className="mt-4 text-primegray">
                <ul>
                  <li className="flex items-center pb-4 gap-2">
                    <span>
                      <IoCheckmark className="text-2xl" />
                    </span>
                    Third party insurance
                  </li>
                  <li className="flex items-center pb-4 gap-2">
                    <span>
                      <IoCheckmark className="text-2xl" />
                    </span>
                    Out Of Hours Fee
                  </li>
                  <li className="flex items-center pb-4 gap-2">
                    <span>
                      <IoCheckmark className="text-2xl" />
                    </span>
                    Drive up to 6,600 km, pay $0.15 per additional km
                  </li>
                  {slectedServices.map((service) => (
                    <li
                      key={service.id}
                      className="flex items-center pb-4 gap-2"
                    >
                      <span>
                        <IoCheckmark className="text-2xl" />
                      </span>
                      {service.description}
                    </li>
                  ))}

                  <li className="flex items-center pb-4 gap-2">
                    <span></span>Drivers must have held their driver's license
                    for at least 2 year(s)
                  </li>
                </ul>
              </div>
              <div className="h-[1.5px] w-full m-auto bg-[#ccc]"></div>

              <div>
                <div className="pt-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-bold ">Total</p>
                    <p className="font-bold">${(days * car.price) + totalPrice}</p>
                  </div>
                  <div>
                    <p className="text-primebrand font-bold">Price details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SummaryCheckout;
