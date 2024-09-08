import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Details from "./Details";

function MyBookingCard({ chatBookingId, setChatBookingId, number }) {
  const startChat = () => {
    console.log("clicked");
    localStorage.setItem("bookingId", "2");
    setChatBookingId(number);
  };
  return (
    <div className="bg-black hover:bg-[#131313]  border-[1.3px] border-primary rounded-[.8rem] flex justify-evenly items-center py-5 my-4 ">
      <div className="flex flex-col items-center">
        <div className="time text-2xl text-white ">12:00</div>
        <div className="time text-lg text-white ">Aug 28</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="initiator text-center font-medium text-[#C2C0C4]">
          Initaitor
        </div>
        <div className="initiator text-center text-primary font-bold pt-1">
          Harsh
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
      <div className="flex flex-col items-center justify-center">
        <div className="type text-center font-medium text-[#C2C0C4]">Type</div>
        <div className="initiator text-center text-primary font-semibold pt-1">
          Car
        </div>
      </div>
      <div className=" flex justify-around items-center gap-8">
        <Dialog>
          <DialogTrigger>
            <Button className="  bg-primary  text-black font-medium rounded-2xl text-md px-8 border-[1.5px] hover:border-primary hover:bg-black hover:text-primary">
              Details
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-[#1e1e1e] min-w-[30%] rounded-xl ">
            <Details />
          </DialogContent>
        </Dialog>

        <Button
          onClick={startChat}
          className=" bg-primary  text-black font-medium rounded-2xl text-md px-10 border-[1.5px] hover:border-primary hover:bg-black hover:text-primary  "
        >
          Chat
        </Button>
      </div>
    </div>
  );
}

export default MyBookingCard;
