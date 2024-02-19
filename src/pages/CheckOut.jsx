import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SummaryCheckout from "../components/SummaryCheckout";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOut = () => {
  let navigate = useNavigate();
  const location = useLocation()
  const id = location.state?.id || ""

  return (
    <section className="px-10 pt-4 bg-white flex flex-col">
      <div className="flex items-center gap-4 py-4">
        <div>
          <MdKeyboardArrowLeft className="text-4xl cursor-pointer" onClick={()=> navigate(`/detailsPage/${id}/addson`)} />
        </div>
        <div className="">
          <div className="font-bold text-2xl">Review and book</div>
        </div>
      </div>
      <div className="flex f flex-wrap flex-[1_1_auto]">
        <div className="mlg:flex-[1_1_75%] mlg:max-w-[75%] md:px-2 flex flex-col flex-[1_0_auto] max-w-full mmx:flex-[1_1_58.33%] mmx:max-w-[58.33%]">
          <div className="px-4">
            <div className="mb-4">
              <h4 className="font-bold text-2xl">Booking options</h4>
            </div>
          </div>
          <div className="flex flex-col mlg:flex-row ">
            <div className="m-2 ">
              <div className="shadow-borderbox rounded-2xl shadow-black	">
                <div className="p-4 ">
                  <div className="flex flex-col p-[0.25rem] h-full w-full ">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-2xl">Best price</h4>
                      </div>
                      <div className="pt-4">
                        <p className="font-normal	 text-sm">
                          Pay now, cancel and rebook for a fee.
                        </p>
                      </div>
                      <ul className="my-4 marker:text-black list-disc ps-10 ">
                        <li className="font-normal text-sm">
                          When booking is cancelled, a fee of $290.68 will be
                          charged
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4">
                      <p className="text-primebrand font-bold text-[22px] leading-6">
                        Included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-2">
              <div className="shadow-borderbox rounded-2xl shadow-black	">
                <div className="p-4 ">
                  <div className="flex flex-col p-[0.25rem] h-full w-full ">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-2xl">Best price</h4>
                      </div>
                      <div className="pt-4">
                        <p className="font-normal	 text-sm">
                          Pay now, cancel and rebook for a fee.
                        </p>
                      </div>
                      <ul className="my-4 marker:text-black list-disc ps-10 ">
                        <li className="font-normal text-sm">
                          When booking is cancelled, a fee of $290.68 will be
                          charged
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4">
                      <p className="text-primebrand font-bold text-[22px] leading-6">
                        Included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mlg:flex-[1_1_25%] mlg:max-w-[25%] lg:flex-[] lg:max-w-[] mdx:mt-4 sm:flex-[ sm:max-w-[]	">
          <SummaryCheckout/>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
