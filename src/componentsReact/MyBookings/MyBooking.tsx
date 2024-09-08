import React, { useEffect, useState } from "react";

import MyBookingCard from "./MyBookingCard";
import ChatBox from "./ChatBox";
import { io } from "socket.io-client";
import { set } from "date-fns";
const socket = io("http://localhost:2707");

function MyBooking() {
  const [useChat, setUseChat] = useState(false);

  useEffect(() => {
    console.log("mounted mybooking");
  }, [socket]);
  const startChat = () => {
    console.log("start chat");
    setUseChat(true);
    socket.emit("joinbooking", chatBookingId);
  };
  const [chatBookingId, setChatBookingId] = useState(0);
  return (
    <>
      {/* border-[#C2C0C4] */}
      <div className="flex  h-screen justify-between items-center px-8">
        <div className="w-[70%] h-[600px] rounded-lg  border-[1.5px] border-[#C2C0C4] bg-card flex justify-center items-center">
          <div className="h-[90%] w-[97%] bg-transparent flex overflow-auto justify-center px-3 ">
            <div className="w-full h-fit min-h-full bg-[#444444] inline-block rounded-lg px-6 relative z-10 bg-opacity-40">
              <MyBookingCard
                chatBookingId={chatBookingId}
                number={2}
                setChatBookingId={setChatBookingId}
              />
              <MyBookingCard
                chatBookingId={chatBookingId}
                number={3}
                setChatBookingId={setChatBookingId}
              />
              <button
                className="py-2 px-3 text-black bg-primary hover:bg-black hover:text-primary"
                onClick={startChat}
              >
                Start
              </button>
            </div>
          </div>
        </div>
        <div className="w-[28%] h-[450px] rounded-lg border-[1.5px] border-[#C2C0C4] bg-card px-6 pb-4 pt-6  flex flex-col">
          {useChat && (
            <ChatBox bookingId={chatBookingId} userId={"1"} socket={socket} />
          )}
        </div>
      </div>
    </>
  );
}

export default MyBooking;
