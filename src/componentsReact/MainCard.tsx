import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";

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

export function CardWithForm() {
  const locations = [
    "IIITK",
    "Kottayam Railway Station",
    "Ernankulam Station",
    "Cochin Internation Airport",
  ];
  const handleSubmit = () => {
    console.log("Submit clicked");
  };
  const [selectedOption, setSelectedOption] = useState("");

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
              <div className="py-1 flex  justify-between gap-2 items-center w-full">
                <Select>
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
                <DateTimePicker />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            className="rounded-[10px] font-semibold text-md "
          >
            Search
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
