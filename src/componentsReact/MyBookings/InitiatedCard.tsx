import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { add, format } from "date-fns";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

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
    <div className="bg-black hover:bg-[#131313]  border-[1.3px] border-neutral-500 rounded-[.8rem] grid grid-cols-3 py-5 my-4 ">
      {/* <div className="flex justify-center gap-3 items-center">
        <div className="time text-2xl text-white ">
          {booking.timebooked.slice(0, 5)}
        </div>
        <div className="text-2xl pb-1">-</div>
        <div className="time text-2xl text-white ">
          {format(booking.datebooked, "MMM dd")}
        </div>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="time text-2xl text-white ">
          {booking?.timebooked.slice(0, 5)}
        </div>
        <div className="time text-lg text-white ">
          {format(booking.datebooked, "MMM dd")}
        </div>
      </div>
      <div className="flex justify-evenly items-center col-span-2">
        <button
          onClick={() => setShowInBox("settings", booking.bookingid)}
          className=" text-primary text-3xl "
        >
          <IoSettingsSharp />
        </button>

        <button
          onClick={() => setShowInBox(["requests", booking.bookingid])}
          disabled={
            showInBox[0] === "requests" && showInBox[1] == booking.bookingid
          }
          className={
            showInBox[0] === "requests" && showInBox[1] == booking.bookingid
              ? "text-white text-3xl"
              : "text-primary text-3xl"
          }
        >
          <FaHandshake />
        </button>

        <button
          onClick={() => setShowInBox(["buddies", booking.bookingid])}
          disabled={
            showInBox[0] === "buddies" && showInBox[1] == booking.bookingid
          }
          className={
            showInBox[0] === "buddies" && showInBox[1] == booking.bookingid
              ? "text-white text-3xl"
              : "text-primary  text-3xl"
          }
        >
          <FaUserFriends />
        </button>
      </div>
    </div>
  );
}

export default InitiatedCard;
