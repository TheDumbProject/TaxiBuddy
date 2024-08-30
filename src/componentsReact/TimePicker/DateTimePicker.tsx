"use client";

import * as React from "react";
import { add, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePickerDemo } from "./time-picker-demo";

export function DateTimePicker() {
  const [date, setDate] = React.useState<Date>();

  /**
   * carry over the current time when a user clicks a new day
   * instead of resetting to 00:00
   */
  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay) return;
    if (!date) {
      setDate(newDay);
      return;
    }
    console.log(newDay);
    console.log(format(date, "PPP"));
    console.log(date.getTime());
    const diff = newDay.getTime() - date.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const newDateFull = add(date, { days: Math.ceil(diffInDays) });
    setDate(newDateFull);
    console.log(newDateFull);

    console.log(new Date());
    console.log(Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24)) - 1);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-center text-left font-normal bg-card rounded-[10px]",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4  hidden md:block " />
          {date ? (
            format(date, "PP - HH:mm")
          ) : (
            <span className="">Select Time</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => handleSelect(d)}
          initialFocus
          disabled={
            (date) => {
              const currentDate = new Date();
              currentDate.setDate(currentDate.getDate() - 1);

              return date < currentDate;
            }

            // Math.floor(date.getTime() / (1000 * 60 * 60 * 24)) <
            // Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24) - 1)
          }
        />
        <div className="p-3 border-t border-border">
          <TimePickerDemo setDate={setDate} date={date} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
