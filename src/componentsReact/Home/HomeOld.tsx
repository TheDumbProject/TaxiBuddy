import { CardWithForm } from "../MainCard";
import Listings from "../Listings/page.tsx";

function Home() {
  return (
    <div className="flex flex-col mx-12">
      <div className="flex flex-col md:flex-row justify-between mt-12 mb-6">
        <div>
          <h1 className="text-start mb-8 md:tracking-wider text-5xl leading-12 font-bold">
            Find your <br></br>
            <span className="text-yellow-400">Taxi Buddy</span>
          </h1>
        </div>
        <CardWithForm />
      </div>
      <Listings />
    </div>
  );
}

export default Home;
