import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Details from "./Details";
import { add, format } from "date-fns";
import { useChatStore } from "@/store/useChatStore";
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

function MyBookingCard({ booking, number, setChatBookingId }) {
  const { selectedChatBooking, setSelectedBookingDetails } = useChatStore();
  const date = format(booking.datebooked, "LLL dd");
  const startChat = () => {
    console.log("clicked");
    // setSelectedBooking(booking.bookingid);
    // localStorage.setItem("bookingId", "2");
    setChatBookingId(booking.bookingid);
    setSelectedBookingDetails({
      time: booking?.timebooked.slice(0, 5),
      date: date,
    });
  };
  console.log(booking);
  return (
    <div className="bg-black hover:bg-[#131313]  border-[1.3px] border-neutral-500 hover:border-primary rounded-[.8rem] flex justify-around items-center py-5 my-4  ">
      <div className="flex flex-col items-center">
        <div className="time text-2xl text-white ">
          {booking?.timebooked.slice(0, 5)}
        </div>
        <div className="time text-lg text-white ">{date}</div>
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <div className="initiator text-center font-medium text-[#C2C0C4]">
          Initaitor
        </div>
        <div className="initiator text-center text-primary font-bold pt-1">
          {booking?.initiatorname}
        </div>
      </div> */}
      {/* <div className="flex flex-col items-center justify-center ">
        <div className="tbuddies text-center font-medium text-[#C2C0C4]">
          Buddies
        </div>
        <div className="initiator text-center text-primary font-semibold pt-1">
          {booking?.currentmembers}/{booking?.maxmembers}
        </div>
      </div> */}
      {/* <div className="flex flex-col items-center justify-center">
        <div className="type text-center font-medium text-[#C2C0C4]">Type</div>
        <div className="initiator text-center text-primary font-semibold pt-1">
          {booking?.vehicle}
        </div>
      </div> */}
      <div className=" flex justify-around items-center gap-2">
        <Dialog>
          <DialogTrigger>
            <Button
              className={
                "text-primary hover:text-[#f9f6fc] text-3xl bg-transparent hover:bg-[#232323]"
              }
            >
              <IoMdInformationCircle />
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-[#1e1e1e] min-w-[30%] rounded-xl ">
            <Details booking={booking} />
          </DialogContent>
        </Dialog>

        <Button
          onClick={startChat}
          className={
            booking.bookingid === selectedChatBooking
              ? "text-white bg-transparent text-3xl hover:bg-[#232323] "
              : " text-primary text-3xl bg-transparent hover:bg-[#232323]"
          }
        >
          <IoMdChatbubbles />
        </Button>
        <Button
          onClick={startChat}
          className={
            "text-primary hover:text-[#f9f6fc] text-3xl bg-transparent hover:bg-[#232323]"
          }
        >
          <BsThreeDotsVertical />
        </Button>
      </div>
    </div>
  );
}

export default MyBookingCard;
