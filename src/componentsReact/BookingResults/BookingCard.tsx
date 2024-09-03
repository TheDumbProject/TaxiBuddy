import { Button } from "@/components/ui/button";
import React from "react";

function BookingCard() {
  return (
    <div className="bg-[#1e1e1e] hover:bg-[#000814] border-[1.3px] border-primary rounded-[.8rem]  grid grid-cols-7 py-3 my-4 ">
      <div className="col-span-2 flex flex-col items-center">
        <div className="time text-2xl text-white ">12:00</div>
        <div className="time text-l text-white ">Aug 28</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="initiator text-center font-medium text-[#C2C0C4]">
          Initaitor
        </div>
        <div className="initiator text-center text-primary font-bold pt-1">
          HARSH
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="tbuddies text-center font-medium text-[#C2C0C4]">
          Buddies
        </div>
        <div className="initiator text-center text-primary font-semibold pt-1">
          2/4
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <div className="type text-center font-medium text-[#C2C0C4]">Type</div>
        <div className="initiator text-center text-primary font-semibold pt-1">
          Car
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Button className=" bg-yellow-400  text-black font-medium rounded-2xl text-md">
          Join Buddies
        </Button>
      </div>
    </div>
  );
}

export default BookingCard;
