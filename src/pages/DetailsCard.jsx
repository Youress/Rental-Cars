import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

const Milage = () => {
  const [car ,setCar] = useState()
  const [loading ,setLoading] = useState(true)
  const { id } = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  const [days] = useOutletContext();

  const [show, setShow] = useState(true);
  const handleclick = () => {
    if (location.pathname === `/detailsPage/${id}`) {
      navigate("protection");
    } else if (location.pathname === `/detailsPage/${id}/protection`) {
      setShow(false);
      navigate("addson");
    } else {
      navigate(".");
    }
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
        const filterCar = jsonData.find((car)=> car.id === id)
        setLoading(false)
        setCar({...filterCar});       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  if(loading){
    return (
       <h1 className="font-bold text-3xl my-4 p-6">loading</h1>
      )
  }else{
    return (
    <section className="mt-4 px-10 bg-sectiongray">
      <div className="pb-12 pt-4 flex items-center gap-4 ">
        <div className="cursor-pointer">
          <NavLink to="..">
            <MdKeyboardArrowLeft className="text-4xl" />
          </NavLink>
        </div>
        <div className="font-bold text-2xl">Choose your protection</div>
      </div>
      <div className="flex flex-wrap">
        {show && (
          <div className="basis-3/4 px-2	">
            <div className="font-bold text-xl">Loss damage waiver</div>
            <div className="font-normal mb-8 ">
              Coverage in the event of theft or damages to the rental vehicle.
            </div>
          </div>
        )}

        <div className="md:basis-3/4	">
          <Outlet />
        </div>
        <div className="px-2 md:basis-1/4 mdx:mt-4	">
          <div className=" bg-white p-6 shadow-lg">
            <div className="flex mb-4 ">
              <div>
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
                <li className="flex items-center pb-4 gap-2">
                  <span>
                    <IoCheckmark className="text-2xl" />
                  </span>
                  MAD 7,000.00 (approx. $698.88) financial responsibility
                </li>
                <li className="flex items-center pb-4 gap-2">
                  <span></span>Drivers must have held their driver's license for
                  at least 2 year(s)
                </li>
              </ul>
            </div>
            <div className="h-[1.5px] w-full m-auto bg-[#ccc]"></div>

            <div>
              <div className="pt-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-bold ">Total</p>
                  <p className="font-bold">${days * car.price }</p>
                </div>
                <div>
                  <p className="text-primebrand font-bold">Price details</p>
                </div>
              </div>
              <button className="bg-primebrand text-white w-full p-2 text-2xl" onClick={() => handleclick()}>next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }

  
};

export default Milage;