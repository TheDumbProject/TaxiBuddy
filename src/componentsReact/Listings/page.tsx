import ListComponent from "./ListComponent";
export default function Listings() {
  return (
    <div className="my-12">
      <div className="my-4">
        <h1 className="text-3xl font-semibold">Current Listings</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
        <ListComponent
          data={{
            initiator: "John Doe",
            maxPeople: 4,
            currentPeople: 2,
            from: "IIIT Kottayam",
            to: "Cochin International Airport",
            time: "10:00 AM",
            date: "12/12/2021",
            price: "50",
            bookingID: "1234",
          }}
        />
        <ListComponent
          data={{
            initiator: "Jane Doe",
            maxPeople: 4,
            currentPeople: 3,
            from: "IIIT Kottayam",
            to: "Kottayam Railway Station",
            time: "10:00 AM",
            date: "12/12/2021",
            price: "50",
            bookingID: "1234",
          }}
        />

        <ListComponent
          data={{
            initiator: "Jane Doe",
            maxPeople: 4,
            currentPeople: 3,
            from: "Cochin International Airport",
            to: "IIIT Kottayam",
            time: "10:00 AM",
            date: "12/12/2021",
            price: "50",
            bookingID: "1234",
          }}
        />
      </div>
    </div>
  );
}
