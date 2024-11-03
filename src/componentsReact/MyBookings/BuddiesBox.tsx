import axios from "axios";
import { set } from "date-fns";
import React, { useEffect, useState } from "react";

const BuddiesCard = ({ buddy }) => {
  return (
    <div className="bg-[#1e1e1e] hover:bg-[#000814] border-[1.3px] border-[#c2c0c4cb] rounded-2xl  grid grid-cols-4 py-2 my-2 px-3 ">
      <div className="flex flex-col items-center justify-center">
        <div className="initiator text-center font-medium text-sm text-[#C2C0C4]">
          Name
        </div>
        <div className="initiator text-center text-primary text-lg font-bold pt-1">
          {buddy.name.slice(0, 7)}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="tbuddies text-center font-medium text-sm text-[#C2C0C4]">
          Batch
        </div>
        <div className="initiator text-center text-primary text-lg font-semibold pt-1">
          2023
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-2 ">
        <div className="tbuddies text-center font-medium text-sm text-[#C2C0C4]">
          Contact
        </div>
        <div className="initiator text-center text-primary text-lg font-semibold pt-1">
          {buddy.phonenumber}
        </div>
      </div>
    </div>
  );
};
function BuddiesBox({ showInBox }) {
  const bookingid = showInBox[1];

  const [buddies, setBuddies] = useState([]);

  useEffect(() => {
    try {
      console.log("Fetching Buddies");
      axios
        .post(
          "http://localhost:2707/getBuddiesFromBooking",
          {
            bookingId: bookingid,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setBuddies(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, [showInBox]);

  return (
    <div className=" h-full bg-[#444444] bg-opacity-40 rounded-xl ">
      <div className="body h-full flex flex-col gap-4 overflow-auto py-5 px-2 ">
        {buddies.length > 0 ? (
          buddies.map((buddy, index) => (
            <>
              <BuddiesCard key={index} buddy={buddy} />
            </>
          ))
        ) : (
          <div className="text-white text-center">No Buddies</div>
        )}
      </div>
    </div>
  );
}

export default BuddiesBox;
