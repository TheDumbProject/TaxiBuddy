import React, { useState } from "react";

function ContactUs() {
  const [message, setMessage] = useState("");
  const handleSubmit = () => {};

  return (
    <div className="container flex h-[calc(100vh-3.6rem)]  justify-center items-center ">
      <div className="h-[500px] bg-[#1e1e1e] w-[55%] border-2 border-[#C2C0C4] rounded-3xl flex items-center justify-center ">
        <div className="h-[400px] w-[90%] bg-[#444444] rounded-3xl flex items-center justify-evenly">
          <div className="left flex flex-col gap-5 w-1/2">
            <div className="text-5xl font-bold text-white text-center">
              Share
            </div>
            <div className="text-5xl font-bold text-white text-center">
              Your
            </div>
            <div className="text-5xl font-bold text-[#ffa800] text-center">
              Feedback
            </div>
          </div>
          <div className="middleLine w-2 bg-[#C2C0C4] h-[90%] rounded-full"></div>
          <div className="right w-1/2 flex flex-col justify-evenly item-center h-full ">
            <div className="messagetitle text-2xl font-bold text-white text-center">
              Message
            </div>

            <textarea
              placeholder="Ivide"
              className="bg-[#1e1e1e] rounded-2xl w-[80%] h-[60%] text-white p-4 mx-auto  resize-none"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-primary text-black font-medium w-fit px-5 py-2 mx-auto rounded-3xl border-[2px] border-primary hover:bg-black hover:text-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
