import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
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
import { DateTimePicker } from "./TimePicker/DateTimePicker";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export function CardWithForm() {
  const locations = [
    "IIITK",
    "Kottayam",
    "Ernakulam Junction",
    "Cochin Internation Airport",
    "Pala",
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [placeTo, setPlaceTo] = useState("");
  const [placeFrom, setPlaceFrom] = useState("");
  const [preferedDate, setPreferedDate] = useState(null);
  const [redirect, setRedirect] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!placeTo || !placeFrom || !preferedDate) {
        throw new Error("Empty arguments!!!");
      }
      // const response = await axios.post("http://localhost:2707/search", {
      //   userId: "12",
      //   placeFrom: placeFrom,
      //   placeTo: placeTo,
      //   date: preferedDate,
      // });
      // console.log(response);
      // console.log({
      //   placeTo: placeTo,
      //   placeFrom: placeFrom,
      //   preferedDate: preferedDate,
      // });

      // if (redirect) {
      navigate("/results", {
        replace: true,
        state: {
          searchTo: placeTo,
          searchFrom: placeFrom,
          preferedDate: preferedDate,
        },
      });
      //     }
    } catch (error) {
      console.error(error);
    }
  };
  // };

  useEffect(() => {
    console.log();
  });

  return (
    <Card className="w-[300px] md:w-[380px] border-[2px] ">
      <CardHeader className="text-center">
        <CardTitle className="text-yellow-400 text-xl">
          Get Your Taxi Buddy
        </CardTitle>
        <CardDescription>Enter Details Below</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 mx-5 items-center">
              <div className="py-1 flex  justify-between gap-2 items-center w-full">
                <Select
                  onValueChange={(value) => {
                    setSelectedOption(value);
                    setPlaceFrom(value);
                  }}
                >
                  <SelectTrigger className="rounded-[10px]" id="from">
                    <SelectValue
                      className="font-semibold"
                      placeholder="Select a Location"
                    />
                  </SelectTrigger>
                  <SelectContent className="rounded-[10px]" position="popper">
                    {locations.map((l) => {
                      return (
                        <SelectItem className="rounded-[10px]" value={l}>
                          {l}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="arrowicon">
                <IoIosArrowDown className="text-yellow-400 text-3xl" />
              </div>

              {/*Place To  */}
              <div className="py-1 pb-3 flex  justify-between gap-2 items-center w-full">
                <Select
                  onValueChange={(value) => {
                    setPlaceTo(value);
                  }}
                >
                  <SelectTrigger className="rounded-[10px]" id="to">
                    <SelectValue
                      className="font-semibold"
                      placeholder="Select a location"
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
              <div className="timepicker flex items-center py-4 gap-2 w-3/4">
                <DateTimePicker
                  setPreferedDate={setPreferedDate}
                  preferedDate={preferedDate}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            className=" bg-primary  text-black font-medium rounded-xl text-md  border-[1.5px]  hover:border-primary hover:bg-black hover:text-primary  "
          >
            Search
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
