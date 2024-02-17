import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { GiCarDoor } from "react-icons/gi";
import { PiBagBold } from "react-icons/pi";

Modal.setAppElement("#root");

const ModalCard = ({ open, close, car }) => {
  const { gear, seater } = car;

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      contentLabel="Example Modal"
    >
      <div className="">
        <div className="flex items-center justify-end">
          <div className="cursor-pointer">
            <IoMdClose className="text-2xl" onClick={close} />
          </div>
        </div>
        <div className="px-10 pb-10">
          <h3 className="mb-4 font-bold text-2xl">More info</h3>
          <div className="flex items-center mt-2">
            <div className="text-2xl">
              <GoPeople />
            </div>
            <span className="ml-2 font-bold text-xs">{seater} seater</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-2xl">
              <GiGearStickPattern />
            </div>
            <span className="ml-2 font-bold text-xs">{gear}</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-2xl">
              <IoMdSpeedometer />
            </div>
            <span className="ml-2 font-bold text-xs">Incl. 4,590 km</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-2xl">
              <GiCarDoor />
            </div>
            <span className="ml-2 font-bold text-xs">5 Doors</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-2xl">
              <PiBagBold />
            </div>
            <span className="ml-2 font-bold text-xs">2 Bags</span>
          </div>
          <div className="mt-8 mb-4 font-bold text-[1rem]">
            Young driver info
          </div>
          <div className="flex items-center justify-between">
            <div className="font-bold text-xs">Minimum age for driver:</div>
            <div className="font-bold text-xs">24 years</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
