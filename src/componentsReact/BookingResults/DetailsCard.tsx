import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { add, format } from "date-fns";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

function DetailsCard({ booking }) {
  const date = format(booking.datebooked, "LLL dd");
  const showmembers = true;
  console.log(booking);

  const { toast } = useToast();

  const sendRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios
        .post(
          "http://localhost:2707/createRequest",
          {
            bookingId: booking.bookingid,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          toast({
            title: "Success",
            description: "Request Sent Successfully",
          });
        })
        .catch((error) => {
          console.error(error.message);
          toast({
            title: "Error",
            description: "Error creating request",
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full  mx-2 my-2 flex flex-col items-center  ">
      <div className="datetime text-2xl my-3">{date} - 12:00</div>
      <div className=" w-full px-5">
        <div className="location flex justify-center items-center  text-center my-5 text-lg">
          <div className="from w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            {booking.sourceplace}
          </div>
          <div className="arrowicon w-[20%] flex justify-center">
            <IoIosArrowForward className="text-white text-3xl" />
          </div>
          <div className="to w-[40%] bg-[#444444] py-2 px-2 rounded-lg">
            {booking.destination}
          </div>
        </div>

        <div className="moredetail bg-[#C2C0C4] bg-opacity-20 grid grid-cols-3 place-content-center rounded-lg px-6  my-10 mt-14">
          <div className="type  px-4 py-1">
            <div className="vehicle text-center font-medium text-[#C2C0C4]">
              Vehicle <span className="hidden md:inline">Type</span>
            </div>
            <div className="v text-center text-primary font-semibold pt-1">
              {booking.vehicle}
            </div>
          </div>
          <div className="type  px-4 py-1">
            <div className="luggage text-center font-medium text-[#C2C0C4]">
              Luggage
            </div>
            <div className="l text-center text-primary font-semibold pt-1">
              {booking.luggage}
            </div>
          </div>
          <div className="type  px-4 py-1">
            <div className="total text-center font-medium text-[#C2C0C4]">
              <span className="hidden md:inline">Total</span> Buddies
            </div>
            <div className="totalnumber text-center text-primary font-semibold pt-1">
              {booking.currentmembers}/{booking.maxmembers}
            </div>
          </div>
        </div>

        <div className="currentmembers">
          <div className="text-center text-xl text-[#C2C0C4] my-4">
            Current Buddies
          </div>
          <div className="grid grid-cols-4 gap-4  justify-self-auto text-center border-[1.5px] border-[#E4E4E4] border-opacity-65 py-5 px-4 rounded-3xl mb-10">
            <div className="bg-[#444444] px-2 py-1 rounded-2xl text-primary ">
              Abhinav
            </div>
            {booking.buddies.map((buddy, index) => (
              <div className="bg-[#444444] px-2 py-1 rounded-2xl ">
                {buddy.name.slice(1, buddy.name.indexOf(","))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mb-4 ">
          {booking.status === "initiator" && (
            <Button
              className=" bg-yellow-400  text-black font-medium rounded-3xl text-lg py-5 px-6 border-2 border-primary bg-black text-primary"
              onClick={sendRequest}
              disabled={true}
            >
              Initiator
            </Button>
          )}
          {booking.status == "pending" && (
            <Button
              className=" bg-yellow-400  text-black font-medium rounded-3xl text-lg py-5 px-6 border-2 hover:border-primary hover:bg-black hover:text-primary"
              onClick={sendRequest}
              disabled={true}
            >
              Request Pending
            </Button>
          )}
          {booking.status == "null" && (
            <Button
              className=" bg-yellow-400  text-black font-medium rounded-3xl text-lg py-5 px-6 border-2 hover:border-primary hover:bg-black hover:text-primary"
              onClick={sendRequest}
            >
              Join
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
