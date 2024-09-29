import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import BookingCard from "./BookingCard";
import { useLocation } from "react-router-dom";
import { add, format } from "date-fns";
import axios from "axios";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateBooking from "./CreateBooking";

function BookingResults() {
  const location = useLocation();
  const searchData = location.state;
  const date = searchData.preferedDate;
  const formatDate = format(date, "y-MM-dd");

  const [result, setResult] = useState([]);

  const fetchData = async () => {
    try {
      console.log("called");
      await axios
        .post("http://localhost:2707/search", {
          userId: "2",
          placeTo: searchData.searchTo,
          placeFrom: searchData.searchFrom,
          date: formatDate,
        })
        .then((response) => {
          setResult(response.data);
          console.log(response.data);
        });
      // console.log(response);
      // console.log(response.data);
      // console.log(typeof response.data);
      // setResult(response.data);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container w-4/5 h-[600px] rounded-lg my-10 border-[1.5px] border-primary bg-card ">
      <div className="topbar w-full bg-[#444444] py-2 px-auto my-4 rounded-2xl grid grid-cols-4 bg-opacity-35 ">
        <div className="time flex items-center justify-center">
          <span>{format(searchData.preferedDate, "MMMM dd - HH:mm")}</span>
        </div>
        <div className="location col-span-2 flex  justify-center items-center">
          <div className="w-full border-b-[2px] border-slate-200 mx-5 text-center py-1">
            {searchData.searchFrom}
          </div>

          <div className="arrowicon mx-5">
            <IoIosArrowForward className="text-white text-2xl" />
          </div>
          <div className="w-full border-b-[2px] border-slate-200 mx-5 text-center py-1  ">
            {searchData.searchTo}
          </div>
        </div>
        <div className="create flex justify-center items-center">
          <div className="">
            <Dialog>
              <DialogTrigger>
                <Button className=" bg-yellow-400  text-black font-medium rounded-2xl text-md">
                  Create Booking
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 bg-[#1e1e1e] min-w-[32%] rounded-2xl ">
                <CreateBooking />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="line h-[1.8px] bg-[#8A8A8A] w-[90%] rounded-full m-auto mt-[1rem] "></div>
        <div className="blank w-[20px] bg-transparent h-[2px]"></div>
      </div>
      <div className="resultContainer py-2 px-[4rem] overflow-auto  h-[450px] ml-[-10px] ">
        {result.length > 0 ? (
          result.map((booking, index) => (
            <>
              <BookingCard key={index} booking={booking} />
              <BookingCard key={index} booking={booking} />
              <BookingCard key={index} booking={booking} />
              <BookingCard key={index} booking={booking} />
              <BookingCard key={index} booking={booking} />
              <BookingCard key={index} booking={booking} />
              <BookingCard key={index} booking={booking} />
              <BookingCard key={index} booking={booking} />
            </>
          ))
        ) : (
          /* From Uiverse.io by Nawsome */
          // <div className="h-full flex items-center justify-center">
          //   <div className="loadingspinner ">
          //     <div id="square1"></div>
          //     <div id="square2"></div>
          //     <div id="square3"></div>
          //     <div id="square4"></div>
          //     <div id="square5"></div>
          //   </div>
          // </div>

          <>
            <div className="  h-[400px] flex item-center justify-center">
              <div className="flex item-center justify-center py-[140px]">
                <div className="loader"></div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex">
        <div className="line h-[1.8px] bg-[#8A8A8A] w-[90%] rounded-full m-auto "></div>
        <div className="blank w-[20px] bg-transparent h-[1px]"></div>
      </div>
      <div className="bottom arrow flex justify-center items-center pt-1">
        <IoIosArrowDown className="text-white text-4xl" />
      </div>
    </div>
  );
}

// mt-[2.5rem]

export default BookingResults;
