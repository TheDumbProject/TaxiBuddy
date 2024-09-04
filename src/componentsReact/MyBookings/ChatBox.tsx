import React from "react";
import { IoSend } from "react-icons/io5";
function ChatBox() {
  return (
    <>
      <div className=" h-full bg-[#444444] bg-opacity-40 rounded-xl">..</div>

      <div className="footer w-full flex justify-center w-full  py-3 gap-2">
        <input
          className=" py-2 px-3 border-[1.5px] w-full bg-inherit border-white hover:border-primary focus-within:border-red-400 rounded-2xl bg-neutral-600 "
          type="text"
          placeholder="Send Message"
          //   value={currentMessage}
          //   onChange={(e) => setCurrentMessage(e.target.value)}
          //   onKeyDown={(event) => {
          //     if (event.key === "Enter") {
          //       sendMessage();
          //     }
          //   }}
        />
        <button
          //   onClick={sendMessage}
          className="py-1 pl-2  w-rounded-xl inline text-primary hover:text-white active:text-neutral-400 rounded-xl  "
          type="submit"
          //   onKeyDown={(event) => {
          //     if (event.key === "Enter") {
          //       sendMessage();
          //     }
          //   }}
        >
          <IoSend className="text-4xl" />
        </button>
      </div>
    </>
  );
}

export default ChatBox;
