import React, { useEffect, useState } from "react";

import MyBookingCard from "./MyBookingCard";
import ChatBox from "./ChatBox";
import { io } from "socket.io-client";
import { set } from "date-fns";
import InitiatedCard from "./InitiatedCard";
import RequestBox from "./RequestBox";
import BuddiesBox from "./BuddiesBox";
import axios from "axios";
const socket = io("http://localhost:2707");

function MyBooking() {
  const [initiatedBookings, setInitiatedBookings] = useState("current");

  const toggleBookings = () => {
    if (initiatedBookings === "current") setInitiatedBookings("initiated");
    else setInitiatedBookings("current");
  };
  const userId = 1;
  const [useChat, setUseChat] = useState(false);
  const [showInBox, setShowInBox] = useState("chat");
  const [result, setResult] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchData = async (userId) => {
      try {
        console.log("Fetching Data");
        await axios
          .post("http://localhost:2707/getMyBookings", {
            userId: userId,
          })
          .then((response) => {
            setResult(response.data);
            console.log(response.data);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(userId);
  }, [userId]);

  useEffect(() => {
    console.log("mounted mybooking");
  }, [socket]);

  const startChat = () => {
    console.log("start chat");
    setShowInBox("chat");
    socket.emit("joinbooking", chatBookingId);
  };
  const [chatBookingId, setChatBookingId] = useState(0);
  return (
    <>
      {/* border-[#C2C0C4] */}

      {initiatedBookings && (
        <div className="flex  w-full absolute translate-y-8 justify-between items-center px-8 ">
          <div className="w-[70%] h-[600px] rounded-lg  border-[1.5px] border-[#C2C0C4]   flex flex-col justify-start items-center  ">
            <div className=" h-[10%] w-[90%]  flex items-center gap-3 my-1 ">
              <button
                onClick={toggleBookings}
                disabled={initiatedBookings === "current"}
                className={
                  initiatedBookings === "current"
                    ? "py-2 px-3 text-white  bg-[#444444] rounded-3xl"
                    : "py-2 px-3 text-white bg-transparent rounded-3xl hover:bg-[#232323] "
                }
              >
                Current bookings
              </button>
              <button
                onClick={toggleBookings}
                disabled={initiatedBookings === "initiated"}
                className={
                  initiatedBookings === "initiated"
                    ? "py-2 px-3 text-white  bg-[#444444]   rounded-3xl"
                    : "py-2 px-3 text-white bg-transparent rounded-3xl hover:bg-[#232323]"
                }
              >
                Initated bookings
              </button>
            </div>
            {initiatedBookings === "current" && (
              <div className="relative h-[80%] w-[95%] bg-transparent flex overflow-auto justify-center px-3 ">
                <div className="w-[98%] h-fit min-h-full bg-[#444444] inline-block rounded-lg px-6 relative z-10 bg-opacity-40">
                  {result.length > 0 ? (
                    result.map((booking, index) => (
                      <>
                        <MyBookingCard
                          key={index}
                          booking={booking}
                          number={2}
                          setChatBookingId={setChatBookingId}
                        />
                      </>
                    ))
                  ) : (
                    /* From Uiverse.io by Nawsome */
                    <div className="h-full flex items-center justify-center">
                      <div className="loadingspinner ">
                        <div id="square1"></div>
                        <div id="square2"></div>
                        <div id="square3"></div>
                        <div id="square4"></div>
                        <div id="square5"></div>
                      </div>
                    </div>
                  )}

                  <button
                    className="py-2 px-3 text-black bg-primary hover:bg-black hover:text-primary"
                    onClick={startChat}
                  >
                    Start
                  </button>
                </div>
              </div>
            )}
            {initiatedBookings === "initiated" && (
              <div className="h-[80%] w-[95%] bg-transparent flex overflow-auto justify-center px-3 ">
                <div className="w-[98%] h-fit min-h-full bg-[#444444] inline-block rounded-lg px-6 relative z-10 bg-opacity-40">
                  <InitiatedCard
                    setShowInBox={setShowInBox}
                    showInBox={showInBox}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="w-[28%] h-[450px] rounded-lg border-[1.5px] border-[#C2C0C4] bg-card px-6 py-6  flex flex-col">
            {showInBox === "chat" && (
              <ChatBox bookingId={chatBookingId} userId={"1"} socket={socket} />
            )}
            {showInBox === "requests" && <RequestBox />}
            {showInBox === "buddies" && <BuddiesBox />}
          </div>
        </div>
      )}
      {!initiatedBookings && (
        <div className="flex  h-screen justify-between items-center px-8">
          {" "}
          hello
        </div>
      )}
    </>
  );
}

export default MyBooking;
