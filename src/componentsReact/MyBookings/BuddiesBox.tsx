import React from "react";

const BuddiesCard = () => {
  return (
    <div className="bg-[#1e1e1e] hover:bg-[#000814] border-[1.3px] border-[#c2c0c4cb] rounded-2xl  grid grid-cols-4 py-2 my-2 px-3 ">
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
      <div className="flex flex-col items-center justify-center col-span-2 ">
        <div className="tbuddies text-center font-medium text-sm text-[#C2C0C4]">
          Contact
        </div>
        <div className="initiator text-center text-primary text-lg font-semibold pt-1">
          1234567890
        </div>
      </div>
    </div>
  );
};
function BuddiesBox() {
  return (
    <div className=" h-full bg-[#444444] bg-opacity-40 rounded-xl ">
      <div className="body h-full flex flex-col gap-4 overflow-auto py-5 px-2 ">
        <BuddiesCard />
        <BuddiesCard />
        <BuddiesCard />
      </div>
    </div>
  );
}

export default BuddiesBox;
