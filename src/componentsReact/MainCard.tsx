import * as React from "react";
import { FC, ReactElement } from "react";
import { DatePicker } from "@/components/ui/datepicker";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Value } from "@radix-ui/react-select";
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
              <div className="py-2 flex  justify-between gap-2 items-center w-full">
                {/* <Label htmlFor="from " className="w-10">
                  From:
                </Label> */}
                <Select
                  onValueChange={(value) => {
                    setSelectedOption(value);
                  }}
                >
                  <SelectTrigger id="from">
                    <SelectValue placeholder="Select a Location" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {locations.map((l) => {
                      return <SelectItem value={l}>{l}</SelectItem>;
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="arrowicon">
                <IoIosArrowDown className="text-yellow-400 text-3xl" />
              </div>
              <div className="py-2 flex  justify-between gap-2 items-center w-full">
                <Select>
                  <SelectTrigger id="to">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {locations
                      .filter((items) => {
                        return items != selectedOption;
                      })
                      .map((l) => {
                        return <SelectItem value={l}>{l}</SelectItem>;
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
          <Button type="submit" className="text-md ">
            Search
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
