import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RequestCard = ({ request, refresh, setRefresh }) => {
  const [isDisabled, setDisabled] = useState(false);
  // {
  //   "updateType":"accept",
  //   "userId":"11",
  //   "bookingId":"7"
  // }
  const { toast } = useToast();

  const updateRequest = async (status) => {
    console.log(request);
    setDisabled(true);
    console.log(status, request.userid, request.bookingid);
    await axios
      .post(
        "http://localhost:2707/approveRequest",
        {
          updateType: status,
          bookingId: request.bookingid,
          requesterId: request.userid,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        const message = response.data.Success;
        toast({
          title: "Success",
          description: message,
        });

        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error(error.message);
        toast({
          title: "Error",
          description: error.message,
        });
      });
  };

  return (
    <div className="bg-[#1e1e1e] hover:bg-[#000814] border-[1.3px] border-[#c2c0c4cb] rounded-2xl  grid grid-cols-4 py-2 my-2 gap-2 px-2 ">
      <div className="flex flex-col items-center justify-center">
        <div className="initiator text-center font-medium text-sm text-[#C2C0C4]">
          Name
        </div>
        <div className="initiator text-center text-primary text-lg font-bold pt-1">
          {request.name.slice(0, 7)}
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
        <button
          onClick={() => updateRequest("accept")}
          disabled={isDisabled}
          className=" bg-primary  text-black font-medium h-fit text-md  rounded-2xl border-[1.5px] border-primary hover:bg-black hover:text-primary  py-1 px-2"
        >
          Accept
        </button>
        <button
          onClick={() => updateRequest("reject")}
          disabled={isDisabled}
          className=" bg-[#C2C0C4]  text-black font-medium  h-fit text-md rounded-2xl  border-[1.5px] border-[#C2C0C4] hover:bg-black hover:text-[#f0f0f0] py-1 px-2 "
        >
          Reject
        </button>
      </div>
    </div>
  );
};

function RequestBox({ showInBox }) {
  const bookingid = showInBox[1];
  const [refresh, setRefresh] = useState(false);
  const [Requests, setRequests] = useState([]);
  useEffect(() => {
    try {
      console.log("Fetching Data");
      axios
        .post(
          "http://localhost:2707/getRequestsForBooking",
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
          setRequests(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, [showInBox, refresh, setRefresh]);
  return (
    <div className=" h-full bg-[#444444] bg-opacity-40 rounded-xl ">
      <div className="body h-full flex flex-col gap-4 overflow-auto py-5 px-2 ">
        {Requests.length > 0 ? (
          Requests.map((request, index) => (
            <>
              <RequestCard
                key={index}
                request={request}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            </>
          ))
        ) : (
          <div className="text-center text-white">No Requests</div>
        )}
      </div>
    </div>
  );
}

export default RequestBox;
