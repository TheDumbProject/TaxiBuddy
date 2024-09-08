import { set } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
// import io from "socket.io-client"; // Remove the unused import statement

interface chatMessage {
  userId: string;
  timesent: object;
  bookingId: string;
  messageId: number;
  messageText: string;
}

function ChatBox({ userId, bookingId, socket }) {
  const [messageList, setMessageList] = useState<chatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  // useEffect(() => {
  //   setMessageList([]);
  // }, [bookingId]);
  useEffect(() => {
    socket.off("newmessage").on("newmessage", (message) => {
      console.log("triggered");
      setMessageList((messageList) => [...messageList, message]);
      console.log(message);
    });
    console.log("useeffect inside chatbox");
    // return () => {
    //   console.log("Disconnected");
    //   socket.disconnect();
    // };
  }, [socket]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const sendMessage = () => {
    console.log("message list : ", messageList);
    console.log("current message: ", currentMessage);
    if (currentMessage.trim() !== "") {
      const message = {
        userId: userId,
        bookingId: bookingId,
        messageText: currentMessage,
      };
      socket.emit("sendmessage", message);
      // setMessageList((messageList) => [...messageList, message]);
      setCurrentMessage("");
    }
  };

  return (
    <>
      <div className=" h-[84%] bg-[#444444] bg-opacity-40 rounded-xl">
        <div className="body h-full flex flex-col gap-4 overflow-auto py-4 px-2">
          {messageList.map((message, index) => {
            return (
              <div
                key={index}
                className={
                  message.userId == userId
                    ? "flex justify-end h-fit"
                    : "flex justify-start h-fit"
                }
              >
                <div
                  className={
                    message.userId === userId
                      ? "bg-white px-3 py-3 text-black  rounded-tl-2xl rounded ml-5"
                      : "bg-black px-3 py-3 text-white  rounded-tr-2xl rounded mr-5"
                  }
                  ref={
                    messageList.length - 1 === messageList.indexOf(message)
                      ? messagesEndRef
                      : null
                  }
                >
                  {message.messagetxt}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer w-full flex justify-center   mt-5 mb-1 gap-2 min-w-6 ">
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
