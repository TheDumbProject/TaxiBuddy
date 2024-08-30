import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosArrowDown } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
type ListComponentProps = {
  initiator: string;
  maxPeople: number;
  currentPeople: number;
  from: string;
  to: string;
  time: string;
  date: string;
  price: string;
  bookingID: string;
};

export default function ListComponent(props: ListComponentProps) {
  const { data } = props;

  return (
    <Card className="md:my-12 border border-transparent hover:border hover:border-yellow-400 flex flex-col justify-between transition transition-all-0.5s hover:cursor-pointer">
      <CardHeader className="flex flex-row text-yellow-400 justify-between w-full items-center">
        <CardTitle className="text-2xl font-semibold ">
          {data.initiator}
        </CardTitle>
        <p className="flex flex-row text-xl items-center font-semibold ">
          <IoPeople className="mr-2" />
          {data.currentPeople}/{data.maxPeople}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <CardDescription className="flex flex-col justify-center items-center">
          <h1 className="text-xl text-white font-semibold">{data.from}</h1>
        </CardDescription>
        <CardDescription>
          <IoIosArrowDown className="text-yellow-400 text-3xl" />
        </CardDescription>
        <CardDescription>
          <h1 className="text-xl text-white font-semibold">{data.to}</h1>
        </CardDescription>
        <CardDescription className="text-yellow-400 w-full text-lg mt-6 font-semibold flex flex-row justify-between mx-2">
          <h1>₹{data.price}/-</h1>
          <h1>
            {data.date} {data.time}
          </h1>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
