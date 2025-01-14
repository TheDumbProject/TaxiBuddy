import { set } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
// import io from "socket.io-client"; // Remove the unused import statement
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useChatStore } from "@/store/useChatStore";
import { decode } from "punycode";
import { get } from "http";
interface chatMessage {
  userId: string;
  timesent: object;
  bookingId: string;
  messageId: number;
  messageText: string;
}

function ChatBox({ userId, bookingId, socket }) {
  const {
    messageList,
    setMessageList,
    setSelectedBooking,
    getMessages,
    selectedChatBooking,
    connectSocket,
    disconnectSocket,
    selectedBookingDetails,
  } = useChatStore();

  // const [messageList, setMessageList] = useState<chatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  // useEffect(() => {
  //   setMessageList([]);
  // }, [bookingId]);

  const sendMessage = async () => {
    console.log("message list : ", messageList);
    console.log("current message: ", currentMessage);
    if (currentMessage.trim() !== "") {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const message = {
        userId: decodedToken?.userid,
        bookingId: selectedChatBooking,
        messageText: currentMessage,
        // or any unique ID generator
      };
      // setMessageList((messageList) => [...messageList, message]);

      socket.emit("sendmessage", message);
      setCurrentMessage("");
      console.log(message);

      getMessages(selectedChatBooking);
    }
  };

  useEffect(() => {
    if (!socket) {
      connectSocket();
    }

    socket?.off("newmessage").on("newmessage", (message) => {
      console.log("triggered");
      // if (message.bookingId !== selectedChatBooking) return;
      // setMessageList((message) => [...messageList, message]);
      setMessageList(message);
      console.log(message);
    });
    console.log("useeffect inside chatbox");

    // return () => {
    //   console.log("disconnecting socket");
    //   disconnectSocket();
    // };
  }, [
    socket,
    disconnectSocket,
    setMessageList,
    selectedChatBooking,
    connectSocket,
  ]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const token = localStorage.getItem("token");
    //   // const decodedToken = jwtDecode(token);
    //   try {
    //     console.log("Fetching Data");
    //     await axios
    //       .post(
    //         "http://localhost:2707/getChatsForBooking",
    //         {
    //           bookingId: selectedChatBooking,
    //         },
    //         {
    //           headers: {
    //             Authorization: token,
    //           },
    //         }
    //       )
    //       .then((response) => {
    //         setMessageList(response.data);
    //         console.log(response.data);
    //       });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchData();
    getMessages(selectedChatBooking);
  }, [selectedChatBooking]);

  //new code
  useEffect(() => {
    socket?.emit("joinbooking", selectedChatBooking);
    // getMessages(selectedChatBooking);
    setMessageList([]);
  }, [selectedChatBooking, getMessages, socket]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log(messageList);
    scrollToBottom();
  }, [messageList]);

  return (
    <>
      <div className=" h-[88%] bg-[#444444] bg-opacity-40 rounded-xl">
        <div className="header bg-black/[0.6]   h-14 rounded-t-xl flex items-center justify-center gap-4 font-medium">
          <div className="text-[#dfdfdf] text-xl">
            {selectedBookingDetails?.time}
          </div>
          <div className="text-[#dfdfdf] text-xl">-</div>
          <div className="text-[#dfdfdf] text-xl">
            {selectedBookingDetails?.date}
          </div>
        </div>
        <div className="body h-[88%] flex flex-col gap-4 overflow-auto py-4 px-2">
          {setSelectedBooking &&
            messageList.map((message, index) => {
              return (
                <div
                  key={index}
                  className={
                    message.userid == userId
                      ? "flex justify-end h-fit"
                      : "flex justify-start h-fit"
                  }
                >
                  <div
                    className={
                      message.userid === userId
                        ? "bg-primary bg-opacity-80 px-3 py-3 text-black  rounded-tl-2xl rounded ml-5 flex flex-col min-w-14 max-w-[220px] break-words whitespace-normal"
                        : "bg-black px-3 py-3 text-white  rounded-tr-2xl rounded mr-5 flex flex-col min-w-16 max-w-[220px] break-words whitespace-normal"
                    }
                    ref={
                      messageList.length - 1 === messageList.indexOf(message)
                        ? messagesEndRef
                        : null
                    }
                  >
                    <div className="">{message.messagetxt}</div>
                    <div className="text-xs opacity-70 text-right mt-1">
                      {(() => {
                        const date = new Date(message.timesent);
                        const hours = date.getUTCHours();
                        const minutes = date.getUTCMinutes();
                        const formattedTime = `${hours
                          .toString()
                          .padStart(2, "0")}:${minutes
                          .toString()
                          .padStart(2, "0")}`;

                        return formattedTime;
                      })()}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="footer w-full h-11 flex justify-center   mt-5 mb-1 gap-2 min-w-6 ">
        <input
          className=" py-2 px-3  border-[1.5px]  w-full bg-inherit hover:border-primary focus-within:border-red-400 rounded-2xl bg-neutral-600 "
          type="text"
          placeholder="Send Message"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button
          onClick={sendMessage}
          className="py-1 pl-2  w-rounded-xl inline text-primary hover:text-white active:text-neutral-400 rounded-xl  "
          type="submit"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        >
          <IoSend className="text-4xl" />
        </button>
      </div>
    </>
  );
}

export default ChatBox;
