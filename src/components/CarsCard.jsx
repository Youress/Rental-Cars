import React, { useState, useEffect } from "react";
import { BsPeople } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ModalCard from "./ModalCard";

const CarsCard = ({ car, total }) => {
  const { description, gear, imageUrl, name, price, seater, id } = car;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white shadow-2xl rounded-md min-w-72 mdx:w-full ">
      <div className="pointer p-4 text-left w-full">
        <div className="">
          <div className="mb-2">
            <h4 className="font-bold">{name}</h4>
            <p className="text-[rgba(89,89,89,1)] text-[14px]">{description}</p>
          </div>
          <button
            onClick={() => navigate(`${id}`)}
            className="max-w-64 mdx:max-w-full mt-6"
          >
            <img src={imageUrl} loading="lazy" alt={name} />
          </button>
          <div className=" my-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex flex-col items-center text-[rgba(89,89,89,1)] text-[14px]">
                <div>
                  <BsPeople />
                </div>
                <span>{seater} seater</span>
              </div>
              <div className="flex flex-col items-center text-[rgba(89,89,89,1)] text-[14px]">
                <div>
                  <GiGearStickPattern />
                </div>
                <span>{gear}</span>
              </div>
              <div className="flex flex-col items-center text-[rgba(89,89,89,1)] text-[14px]">
                <div>
                  <IoMdSpeedometer />
                </div>
                <span>Incl. 6,600 km</span>
              </div>
              <button
                onClick={openModal}
                className="flex flex-col items-center text-[rgba(89,89,89,1)] text-[14px]"
              >
                <div>
                  <BsThreeDots />
                </div>
                <span>more</span>
              </button>
              <ModalCard open={open} close={closeModal} car={car} />
            </div>
          </div>
          <div>
            <div>
              <p className="text-primebrand font-bold text-xl">
                ${price}
                <span>/day</span>
              </p>
            </div>
            <div>
              <span className="font-bold ">
                ${price * total} total for {total} days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
