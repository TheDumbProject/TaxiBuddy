import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaTaxi } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { BsSuitcase2Fill } from "react-icons/bs";
import { add, format, set } from "date-fns";
import { Navigate, useNavigate } from "react-router-dom";

import { DialogClose } from "@/components/ui/dialog";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateTimePicker } from "../TimePicker/DateTimePicker";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { time } from "console";
import { useToast } from "@/hooks/use-toast";

function CreateBooking() {
  const locations = [
    "IIITK",
    "Kottayam",
    "Ernakulam Junction",
    "Cochin Internation Airport",
    "Pala",
  ];
  const luggage = ["Cabin Bag", "Backpack", "Trolley", "Any"];
  const vehicle = ["Auto", "Sedan", "SUV", "Bike", "Cycle", "Bus", "Truck"];
  const max = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selectedOption, setSelectedOption] = useState("");
  const [placeTo, setPlaceTo] = useState("");
  const [placeFrom, setPlaceFrom] = useState("");
  const [preferedDate, setPreferedDate] = useState(null);
  const [luggageType, setLuggageType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [maxMembers, setMaxMembers] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { toast } = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !placeTo ||
        !placeFrom ||
        !preferedDate ||
        !luggageType ||
        !vehicleType ||
        !maxMembers
      ) {
        throw new Error("Empty arguments!!!");
      }
      setIsDisabled(true);
      console.log({
        userId: "12",
        placeFrom: placeFrom,
        placeTo: placeTo,
        date: preferedDate,
        luggageType: luggageType,
        vehicleType: vehicleType,
        maxMembers: maxMembers,
      });
      const date = new Date(preferedDate);
      const formatDate = format(date, "y-MM-dd");
      const formatTime = format(date, "HH:mm");
      const token = localStorage.getItem("token");
      // call to backend
      await axios
        .post(
          "http://localhost:2707/createbooking",
          {
            userId: "12",
            placeFrom: placeFrom,
            placeTo: placeTo,
            date: formatDate,
            time: formatTime,
            luggageType: luggageType,
            vehicleType: vehicleType,
            maxMembers: maxMembers,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          toast({ title: "Success", description: "Booking Created" });
        })
        .catch((error) => {
          console.log("Error in creating booking", error);
          toast({ title: "Error", description: "Error Creating Booking" });
        });
    } catch (error) {
      console.log(error);
      toast({ title: "Error", description: "Invalid Input Fields" });
    }
  };
  return (
    <>
      <div className="h-full border-[2px] border-[#C2C0C4] p-6 rounded-lg">
        <div className="bg-[#444444] bg-opacity-40 rounded-2xl py-6 px-2">
          <div className="heading text-center ">
            <div className="text-yellow-400 text-2xl">
              New Booking
              <div className="h-[1px] w-full mt-4 bg-[#D9D9D9]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mx-2">
              <div className="w-full flex justify-between items-center py-5 my-4 ">
                <div className="flex ">
                  <Select
                    onValueChange={(value) => {
                      setSelectedOption(value);
                      setPlaceFrom(value);
                    }}
                  >
                    <SelectTrigger
                      className="rounded-[10px] w-[190px] h-[40px] bg-[#1e1e1e] gap-2"
                      id="from"
                    >
                      <IoLocationSharp className="text-white text-lg" />
                      <SelectValue
                        className="font-semibold text-center  "
                        placeholder="Source"
                      />
                    </SelectTrigger>
                    <SelectContent
                      className="rounded-[10px] "
                      position="popper"
                    >
                      {locations.map((l) => {
                        return (
                          <SelectItem className="rounded-[10px] " value={l}>
                            {l}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className="arrowicon">
                  <IoIosArrowForward className="text-white text-2xl" />
                </div>
                <div className="flex">
                  <Select
                    onValueChange={(value) => {
                      setPlaceTo(value);
                    }}
                  >
                    <SelectTrigger
                      className="rrounded-[10px] w-[190px] h-[40px] bg-[#1e1e1e] gap-2"
                      id="to"
                    >
                      <IoLocationSharp className="text-white text-lg" />
                      <SelectValue
                        className="font-semibold"
                        placeholder="Destination"
                      />
                    </SelectTrigger>
                    <SelectContent className="rounded-[10px]" position="popper">
                      {locations
                        .filter((items) => {
                          return items != selectedOption;
                        })
                        .map((l) => {
                          return (
                            <SelectItem className="rounded-[10px]" value={l}>
                              {l}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Luggage type and maxMembers */}
              <div className="w-full flex justify-between items-center  gap-4 my-4 py-5 ">
                <div className="">
                  <Select
                    onValueChange={(value) => {
                      setLuggageType(value);
                    }}
                  >
                    <SelectTrigger className="rounded-[10px] w-[190px] h-[40px] bg-[#1e1e1e] ">
                      <BsSuitcase2Fill className="text-white text-lg" />
                      <SelectValue
                        className="font-semibold text-center  "
                        placeholder="Luggage Type"
                      />
                    </SelectTrigger>
                    <SelectContent
                      className="rounded-[10px] text-center"
                      position="popper"
                    >
                      {luggage.map((l) => {
                        return (
                          <SelectItem className="rounded-[10px]" value={l}>
                            {l}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className="">
                  <Select
                    onValueChange={(value) => {
                      setMaxMembers(value);
                    }}
                  >
                    <SelectTrigger className="rounded-[10px] w-[190px] h-[40px] bg-[#1e1e1e] ">
                      <IoIosPeople className="text-white text-2 xl" />
                      <SelectValue
                        className="font-semibold text-center  "
                        placeholder="Max Members"
                      />
                    </SelectTrigger>
                    <SelectContent className="rounded-[10px]" position="popper">
                      {max.map((l) => {
                        return (
                          <SelectItem className="rounded-[10px]" value={l}>
                            {l}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Time and vehicle */}
              <div className="w-full flex justify-between items-center gap-4  my-4 py-5">
                <div className="timepicker flex items-center  gap-2 w-[190px] ">
                  <DateTimePicker
                    setPreferedDate={setPreferedDate}
                    preferedDate={preferedDate}
                  />
                </div>
                <div className="">
                  <Select
                    onValueChange={(value) => {
                      setSelectedOption(value);
                      setVehicleType(value);
                    }}
                  >
                    <SelectTrigger className="rounded-[10px] w-[190px] h-[40px] bg-[#1e1e1e] ">
                      <FaTaxi className="text-white text-lg" />
                      <SelectValue
                        className="font-semibold text-center  "
                        placeholder="Vehicle"
                      />
                    </SelectTrigger>
                    <SelectContent className="rounded-[10px]" position="popper">
                      {vehicle.map((l) => {
                        return (
                          <SelectItem className="rounded-[10px]" value={l}>
                            {l}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly text-md ">
              <DialogClose>
                <Button
                  type="submit"
                  className="rounded-2xl px-6 py-4 border-[1.5px] border-[#C2C0C4] bg-[#C2C0C4] hover:bg-black hover:text-white text-md font-medium"
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                className="rounded-2xl px-5 py-3 border border-primary hover:bg-black hover:text-primary text-md font-medium"
                disabled={isDisabled}
              >
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBooking;
