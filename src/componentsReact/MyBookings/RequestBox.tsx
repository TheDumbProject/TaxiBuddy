import React from "react";

const RequestCard = () => {
  return (
    <div className="bg-[#1e1e1e] hover:bg-[#000814] border-[1.3px] border-[#c2c0c4cb] rounded-2xl  grid grid-cols-4 py-2 my-2 gap-2 px-2 ">
      <div className="flex flex-col items-center justify-center">
        <div className="initiator text-center font-medium text-sm text-[#C2C0C4]">
          Name
        </div>
        <div className="initiator text-center text-primary text-lg font-bold pt-1">
          Abel
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
      <div className=" col-span-2   place-items-center flex justify-evenly gap-2">
        <button className=" bg-primary  text-black font-medium h-fit text-md  rounded-2xl border-[1.5px] border-primary hover:bg-black hover:text-primary  py-1 px-2">
          Accept
        </button>
        <button className=" bg-[#C2C0C4]  text-black font-medium  h-fit text-md rounded-2xl  border-[1.5px] border-[#C2C0C4] hover:bg-black hover:text-[#f0f0f0] py-1 px-2 ">
          Reject
        </button>
      </div>
    </div>
  );
};

function RequestBox() {
  return (
    <div className=" h-full bg-[#444444] bg-opacity-40 rounded-xl ">
      <div className="body h-full flex flex-col gap-4 overflow-auto py-5 px-2 ">
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  );
}

export default RequestBox;
