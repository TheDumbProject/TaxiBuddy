import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { add, format } from "date-fns";

function InitiatedCard({ showInBox, setShowInBox, booking }) {
  const [getRequests, setGetRequests] = useState(true);

  const showRequests = () => {
    if (getRequests) {
      setGetRequests(false);
    }
  };
  useEffect(() => {
    console.log("mounted initiated card");
    console.log(showInBox);
    // console.log(format(booking.timebooked, "HH:mm"));
    // console.log(format(booking.datebooked, "MMMM dd"));
  }, [showInBox]);

  return (
    <div className="bg-black hover:bg-[#131313]  border-[1.3px] border-primary rounded-[.8rem] grid grid-cols-3 py-5 my-4 ">
      <div className="flex justify-center gap-3 items-center">
        <div className="time text-2xl text-white ">
          {booking.timebooked.slice(0, 5)}
        </div>
        <div className="text-2xl pb-1">-</div>
        <div className="time text-xl text-white ">
          {format(booking.datebooked, "MMM dd")}
        </div>
      </div>
      <div className="flex justify-evenly items-center col-span-2">
        <button
          onClick={() => setShowInBox("settings", booking.bookingid)}
          className=" bg-primary transition ease-in-out delay-50  text-black font-medium rounded-2xl text-md px-6 py-2 rounded-3xl border-[1.5px] hover:border-primary hover:bg-black hover:text-primary  "
        >
          Settings
        </button>

        <button
          onClick={() => setShowInBox(["requests", booking.bookingid])}
          disabled={
            showInBox[0] === "requests" && showInBox[1] == booking.bookingid
          }
          className={
            showInBox[0] === "requests" && showInBox[1] == booking.bookingid
              ? "bg-black text-primary font-medium text-md px-6 py-2 rounded-3xl border-[1.5px] border-primary hover:bg-black hover:text-primary"
              : "bg-primary transition delay-25 text-black font-medium  text-md px-6 py-2 rounded-3xl border-[1.5px] hover:border-primary hover:bg-black hover:text-primary"
          }
        >
          Requests
        </button>

        <button
          onClick={() => setShowInBox(["buddies", booking.bookingid])}
          disabled={
            showInBox[0] === "buddies" && showInBox[1] == booking.bookingid
          }
          className={
            showInBox[0] === "buddies" && showInBox[1] == booking.bookingid
              ? "bg-black text-primary font-medium  text-md px-6 py-2 rounded-3xl border-[1.5px] border-primary hover:bg-black hover:text-primary"
              : "bg-primary  text-black font-medium  text-md px-6 py-2 rounded-3xl border-[1.5px] hover:border-primary hover:bg-black hover:text-primary"
          }
        >
          Buddies
        </button>
      </div>
    </div>
  );
}

export default InitiatedCard;
