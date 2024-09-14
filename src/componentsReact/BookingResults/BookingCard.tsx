import { Button } from "@/components/ui/button";
import React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DetailsCard from "./DetailsCard";
import { add, format } from "date-fns";

function BookingCard({ booking }) {
  const date = format(booking.datebooked, "LLL dd");
  return (
    <div className="bg-[#1e1e1e] hover:bg-[#000814] border-[1.3px] border-primary rounded-[.8rem]  grid grid-cols-7 py-5 my-4 ">
      <div className="col-span-2 flex flex-col items-center">
        <div className="time text-2xl text-white ">12:00</div>
        <div className="time text-l text-white ">{date}</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="initiator text-center font-medium text-[#C2C0C4]">
          Initaitor
        </div>
        <div className="initiator text-center text-primary font-bold pt-1">
          {booking.initatorname.slice(1, booking.initatorname.indexOf(","))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="tbuddies text-center font-medium text-[#C2C0C4]">
          Buddies
        </div>
        <div className="initiator text-center text-primary font-semibold pt-1">
          {booking.currentmembers}/{booking.maxmembers}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <div className="type text-center font-medium text-[#C2C0C4]">Type</div>
        <div className="initiator text-center text-primary font-semibold pt-1">
          {booking.vehicle}
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Dialog>
          <DialogTrigger>
            <Button className="  bg-yellow-400  text-black font-medium  text-md px-8 border-[1.5px] hover:border-primary hover:bg-black hover:text-primary py-5 rounded-3xl ">
              View Booking
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-[#1e1e1e] min-w-[30%] rounded-xl ">
            <DetailsCard booking={booking} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default BookingCard;
