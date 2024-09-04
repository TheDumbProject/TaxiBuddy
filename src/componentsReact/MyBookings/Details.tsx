import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

function Details() {
  const showmembers = true;
  return (
    <div className="h-full  mx-2 my-2 flex flex-col items-center ">
      <div className="datetime text-2xl my-3">Aug 28 - 12:00</div>
      <div className=" w-full px-5">
        <div className="location flex justify-center items-center  text-center my-5 text-lg">
          <div className="from w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            Ernakulam
          </div>
          <div className="arrowicon w-[20%] flex justify-center">
            <IoIosArrowForward className="text-white text-3xl" />
          </div>
          <div className="to w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            Kottayam
          </div>
        </div>
        {showmembers && (
          <div className="initiator flex justify-center items-center  text-center my-10 text-lg font-semibold">
            <div className="from w-[40%] bg-[#444444] py-2 px-2 rounded-lg flex items-center justify-center gap-3  ">
              <FaUserAlt className="text-primary opacity-80" />
              <div className="">ABHINAV</div>
            </div>
            <div className="h-[2px] w-[20%] flex justify-center bg-[#767676]"></div>
            <div className="to w-[40%] bg-[#444444] py-2 px-4 rounded-lg flex items-center text-xl justify-evenly">
              <IoCall className="text-primary opacity-80" />
              <div className="contact">123456789</div>
            </div>
          </div>
        )}
        <div className="moredetail bg-[#C2C0C4] bg-opacity-20 grid grid-cols-3 place-content-center rounded-lg px-6  my-8">
          <div className="type  px-4 py-1">
            <div className="vehicle text-center font-medium text-[#C2C0C4]">
              Vehicle <span className="hidden md:inline">Type</span>
            </div>
            <div className="v text-center text-primary font-semibold pt-1">
              Car
            </div>
          </div>
          <div className="type  px-4 py-1">
            <div className="luggage text-center font-medium text-[#C2C0C4]">
              Luggage
            </div>
            <div className="l text-center text-primary font-semibold pt-1">
              Any
            </div>
          </div>
          <div className="type  px-4 py-1">
            <div className="total text-center font-medium text-[#C2C0C4]">
              <span className="hidden md:inline">Total</span> Buddies
            </div>
            <div className="totalnumber text-center text-primary font-semibold pt-1">
              2/5
            </div>
          </div>
        </div>

        <div className="currentmembers">
          <div className="text-center text-xl text-[#C2C0C4] my-4">
            Current Buddies
          </div>
          <div className="grid grid-cols-4 gap-4  justify-self-auto text-center border-[1.5px] border-[#E4E4E4] border-opacity-65 py-5 px-4 rounded-3xl">
            <div className="bg-[#444444] px-2 py-1 rounded-2xl text-primary ">
              Abhinav
            </div>
            <div className="bg-[#444444] px-2 py-1 rounded-2xl ">Samradhi</div>
            <div className="bg-[#444444] px-2 py-1 rounded-2xl ">Ansh</div>
            <div className="bg-[#444444] px-2 py-1 rounded-2xl ">Harsh</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
