import { set } from "date-fns";
import React, { useState } from "react";

function InitiatedCard({ showInBox, setShowInBox }) {
  const [getRequests, setGetRequests] = useState(true);
  const showRequests = () => {
    if (getRequests) {
      setGetRequests(false);
    }
  };
  return (
    <div className="bg-black hover:bg-[#131313]  border-[1.3px] border-primary rounded-[.8rem] grid grid-cols-3 py-5 my-4 ">
      <div className="flex justify-center gap-3 items-center">
        <div className="time text-2xl text-white ">12:00</div>
        <div className="text-2xl pb-1">-</div>
        <div className="time text-xl text-white ">Aug 28</div>
      </div>
      <div className="flex justify-evenly items-center col-span-2">
        <button
          onClick={() => setShowInBox("settings")}
          className=" bg-primary transition ease-in-out delay-50  text-black font-medium rounded-2xl text-md px-6 py-2 rounded-3xl border-[1.5px] hover:border-primary hover:bg-black hover:text-primary  "
        >
          Settings
        </button>
        <button
          onClick={() => setShowInBox("requests")}
          disabled={showInBox === "requests"}
          className={
            showInBox === "requests"
              ? "bg-black text-primary font-medium text-md px-6 py-2 rounded-3xl border-[1.5px] border-primary hover:bg-black hover:text-primary"
              : "bg-primary transition delay-25 text-black font-medium  text-md px-6 py-2 rounded-3xl border-[1.5px] hover:border-primary hover:bg-black hover:text-primary"
          }
        >
          Requests
        </button>
        <button
          onClick={() => setShowInBox("buddies")}
          disabled={showInBox === "buddies"}
          className={
            showInBox === "buddies"
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
