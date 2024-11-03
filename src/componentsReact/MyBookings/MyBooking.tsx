import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import MyBookingCard from "./MyBookingCard";
import ChatBox from "./ChatBox";
import { io } from "socket.io-client";
import { set } from "date-fns";
import InitiatedCard from "./InitiatedCard";
import RequestBox from "./RequestBox";
import BuddiesBox from "./BuddiesBox";
import axios from "axios";
import { add, format } from "date-fns";
const socket = io("http://localhost:2707");

function MyBooking() {
  const [initiatedBookings, setInitiatedBookings] = useState("current");
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Success",
      description: "Your booking has been cancelled",
    });
  };
  const toggleBookings = () => {
    if (initiatedBookings === "current") setInitiatedBookings("initiated");
    else setInitiatedBookings("current");
  };
  const userId = 1;

  const [useChat, setUseChat] = useState(false);
  const [showInBox, setShowInBox] = useState(["chat", -1]);

  const [result, setResult] = useState([]);
  const [initiatedResult, setInitiatedResult] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchData = async (userId) => {
      const token = localStorage.getItem("token");
      try {
        console.log("Fetching Data");
        await axios
          .post(
            "http://localhost:2707/getMyBookings",
            {},
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((response) => {
            setResult(response.data);
            console.log(response.data);
          });

        await axios
          .post(
            "http://localhost:2707/getBookingsForInitiator",
            {
              userId: 12,
            },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((response) => {
            setInitiatedResult(response.data);
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
    setShowInBox(["chat", -1]);
    socket.emit("joinbooking", chatBookingId);
  };
  const [chatBookingId, setChatBookingId] = useState(0);
  return (
    <>
      {/* border-[#C2C0C4] */}

      {initiatedBookings && (
        <div className="flex  w-full h-[calc(100vh-3.6rem)] justify-between  items-center px-8 ">
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

            {/* Current Bookings */}
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
                    className=" bg-yellow-400  text-black font-medium rounded-lg text-lg px-4 py-2 border-2 hover:border-primary hover:bg-black hover:text-primary"
                    onClick={startChat}
                  >
                    Start
                  </button>
                </div>
              </div>
            )}

            {/* Initiated Bookings */}

            {initiatedBookings === "initiated" && (
              <div className="h-[80%] w-[95%] bg-transparent flex overflow-auto justify-center px-3 ">
                <div className="w-[98%] h-fit min-h-full bg-[#444444] inline-block rounded-lg px-6 relative z-10 bg-opacity-40">
                  {initiatedResult.length > 0 ? (
                    initiatedResult.map((booking, index) => (
                      <>
                        <InitiatedCard
                          key={index}
                          booking={booking}
                          setShowInBox={setShowInBox}
                          showInBox={showInBox}
                        />
                      </>
                    ))
                  ) : (
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
                </div>
              </div>
            )}
          </div>

          <div className="w-[28%] h-[450px] rounded-lg border-[1.5px] border-[#C2C0C4] bg-card px-6 py-6  flex flex-col">
            {showInBox[0] === "chat" && (
              <ChatBox bookingId={chatBookingId} userId={"1"} socket={socket} />
            )}
            {showInBox[0] === "requests" && (
              <RequestBox showInBox={showInBox} />
            )}
            {showInBox[0] === "buddies" && <BuddiesBox showInBox={showInBox} />}
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
