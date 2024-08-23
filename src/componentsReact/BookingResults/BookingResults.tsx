import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import BookingCard from "./BookingCard";

function BookingResults() {
  return (
    <div className="container w-3/4 h-[580px] rounded-lg my-10 border-[1.5px] border-primary bg-card ">
      <div className="topbar w-full bg-[#444444] py-2 px-auto my-4 rounded-2xl grid grid-cols-4 bg-opacity-35 ">
        <div className="time flex items-center justify-center">
          <span>August 24 - 12:30</span>
        </div>
        <div className="location col-span-2 flex  justify-center items-center">
          <div className="w-full border-b-[2px] border-slate-200 mx-5 text-center py-2">
            Ernakulam Junction
          </div>

          <div className="arrowicon mx-5">
            <IoIosArrowForward className="text-white text-2xl" />
          </div>
          <div className="w-full border-b-[2px] border-slate-200 mx-5 text-center py-2">
            IIIT Kottayam
          </div>
        </div>
        <div className="create flex justify-center items-center">
          <div className="">
            <Button className=" bg-yellow-400  text-black font-medium rounded-2xl text-md">
              Create Booking
            </Button>
          </div>
        </div>
      </div>
      <div className="line h-[1.5px] mx-auto bg-slate-600 w-[85%] rounded-full  mt-[2.5rem] "></div>
      <div className="resultContainer py-6 px-[4rem] overflow-auto  h-[400px] mx-6 ">
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
      <div className="line h-[1.5px] mx-auto bg-slate-600 w-[85%] rounded-full  "></div>
      <div className="bottom arrow flex justify-center items-center pt-4">
        <IoIosArrowDown className="text-white text-3xl" />
      </div>
    </div>
  );
}

export default BookingResults;
