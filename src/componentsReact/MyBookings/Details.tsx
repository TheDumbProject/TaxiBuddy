import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Details() {
  return (
    <div className="h-full  mx-2 my-2 flex flex-col items-center ">
      <div className="datetime text-xl my-3">Aug 28 - 12:00</div>
      <div className="bg-red-500 w-full px-5">
        <div className="location flex justify-center items-center container text-center my-3">
          <div className="from w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            Ernakulam
          </div>
          <div className="arrowicon w-[15%] flex justify-center">
            <IoIosArrowForward className="text-white text-2xl" />
          </div>
          <div className="to w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            Kottayam
          </div>
        </div>
        <div className="initiator flex justify-center items-center container text-center my-3">
          <div className="from w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            Initiator: <span>HARSH</span>
          </div>
          <div className="h-[2px] w-[15%] flex justify-center bg-[#767676]"></div>
          <div className="to w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            Contact: <span>123456789</span>
          </div>
        </div>
        <div className="moredetail bg-[#444444] flex justify-center items-center rounded-lg  my-8">
          <div className="type  px-4 py-1">
            <div className="tbuddies text-center font-medium text-[#C2C0C4]">
              Type
            </div>
            <div className="initiator text-center text-primary font-semibold pt-1">
              Car
            </div>
          </div>
          <div className="type  px-4 py-1">
            <div className="tbuddies text-center font-medium text-[#C2C0C4]">
              Type
            </div>
            <div className="initiator text-center text-primary font-semibold pt-1">
              Car
            </div>
          </div>
          <div className="type  px-4 py-1">
            <div className="tbuddies text-center font-medium text-[#C2C0C4]">
              Type
            </div>
            <div className="initiator text-center text-primary font-semibold pt-1">
              Car
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
