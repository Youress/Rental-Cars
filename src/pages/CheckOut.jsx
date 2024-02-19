import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";


const CheckOut = () => {
  return (
    <section className="px-10 pt-4 bg-white flex flex-col">
      <div className="flex items-center gap-4 py-4">
        <div >
        <MdKeyboardArrowLeft className="text-4xl" />
        </div>
        <div className=''>
          <div className='font-bold text-2xl'>Review and book</div>
        </div>
      </div>
      <div className="flex f flex-wrap flex-[1_1_auto]">
        <div className="mlg:flex-[1_1_75%] mlg:max-w-[75%] md:px-2 flex flex-col flex-[1_0_auto]">
          <div className="px-4">
            <div className="mb-4">
              <h4 className="font-bold text-2xl">Booking options</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CheckOut;
