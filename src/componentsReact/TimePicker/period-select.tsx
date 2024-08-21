import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Period,
  TimePickerType,
  getArrowByType,
  getDateByType,
  setDateByType,
} from "@/components/ui/time-picker-utils";

export interface TimePeriodSelectInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  picker: TimePickerType;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  period?: Period;
  setPeriod: (period: "PM" | undefined) => void;
  onRightFocus?: () => void;
  onLeftFocus?: () => void;
}

const TimePeriodSelect = React.forwardRef<
  HTMLInputElement,
  TimePeriodSelectInputProps
>(
  (
    {
      className,
      type = "tel",
      value,
      id,
      name,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      setDate,
      onChange,
      onKeyDown,
      picker,
      period,
      onLeftFocus,
      onRightFocus,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <Select>
          <SelectTrigger className="w-[40px]">
            <SelectValue placeholder={period} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AM">AM</SelectItem>
            <SelectItem value="PM">PM</SelectItem>
          </SelectContent>
        </Select>
        ;
      </>
    );
  }
);

export { TimePeriodSelect };
