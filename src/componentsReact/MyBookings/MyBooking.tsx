import React from "react";
import MyBookingCard from "./MyBookingCard";
import ChatBox from "./ChatBox";

function MyBooking() {
  return (
    <>
      <div className="flex  h-screen justify-between items-center px-8">
        <div className="w-[70%] h-[600px] rounded-lg  border-[1.5px] border-[#C2C0C4] bg-card flex justify-center items-center">
          <div className="h-[87%] w-[93%] bg-transparent flex overflow-auto justify-center px-3 ">
            <div className="w-full h-fit min-h-full bg-[#444444] inline-block rounded-lg px-6 relative z-10 bg-opacity-40">
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
              <MyBookingCard />
            </div>
          </div>
        </div>
        <div className="w-[28%] h-[450px] rounded-lg border-[1.5px] border-[#C2C0C4] bg-card px-6 pb-4 pt-6 border-[2px] flex flex-col">
          <ChatBox />
        </div>
      </div>
    </>
  );
}

export default MyBooking;
