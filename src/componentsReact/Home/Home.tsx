import React from "react";
import { CardWithForm } from "../MainCard";

const TaxiIcon = () => {
  return (
    <svg
      fill="#000000"
      width="400px"
      height="400px"
      viewBox="0 -1.99 28.119 28.119"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        id="Path_20"
        data-name="Path 20"
        d="M94.728,188.58v-4.021c0-.935-.014-3.164-2.37-3.806l-1.293-5.9c-.235-1.084-.637-2.318-2.958-2.318H84v-1.746H78.03v1.746H73.92c-2.322,0-2.722,1.234-2.959,2.318l-1.293,5.9c-2.355.642-2.369,2.871-2.369,3.806v4.021a1.01,1.01,0,0,0-.345.758v.342a1.03,1.03,0,0,0,1.032,1.031h.806v1.926c.1,2.287.714,2.287,2.317,2.287s2.21,0,2.315-2.287v-1.926H88.6v1.926c.106,2.287.714,2.287,2.315,2.287s2.213,0,2.32-2.287v-1.926h.806a1.03,1.03,0,0,0,1.031-1.031v-.342A1.013,1.013,0,0,0,94.728,188.58Zm-21.86-13c.185-.848.65-1.025,1.52-1.025H87.639c.87,0,1.335.177,1.521,1.025l1.011,4.619a49.707,49.707,0,0,0-9.159-.693,49.682,49.682,0,0,0-9.157.693Zm-2.782,9.049a1.385,1.385,0,1,1,1.384-1.385A1.382,1.382,0,0,1,70.086,184.631Zm4.085,0a1.385,1.385,0,1,1,1.386-1.385A1.385,1.385,0,0,1,74.171,184.631Zm13.684,0a1.385,1.385,0,1,1,1.385-1.385A1.384,1.384,0,0,1,87.855,184.631Zm4.086,0a1.385,1.385,0,1,1,1.383-1.385A1.384,1.384,0,0,1,91.941,184.631Z"
        transform="translate(-66.954 -170.793)"
      />
    </svg>
  );
};

const TrafficLight = () => {
  return (
    <svg
      fill="#000000"
      width="350px"
      height="350px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className=""
    >
      <path d="M12,9A2,2 0 0,1 10,7C10,5.89 10.9,5 12,5C13.11,5 14,5.89 14,7A2,2 0 0,1 12,9M12,14A2,2 0 0,1 10,12C10,10.89 10.9,10 12,10C13.11,10 14,10.89 14,12A2,2 0 0,1 12,14M12,19A2,2 0 0,1 10,17C10,15.89 10.9,15 12,15C13.11,15 14,15.89 14,17A2,2 0 0,1 12,19M20,10H17V8.86C18.72,8.41 20,6.86 20,5H17V4A1,1 0 0,0 16,3H8A1,1 0 0,0 7,4V5H4C4,6.86 5.28,8.41 7,8.86V10H4C4,11.86 5.28,13.41 7,13.86V15H4C4,16.86 5.28,18.41 7,18.86V20A1,1 0 0,0 8,21H16A1,1 0 0,0 17,20V18.86C18.72,18.41 20,16.86 20,15H17V13.86C18.72,13.41 20,11.86 20,10Z" />
    </svg>
  );
};
function Home() {
  return (
    <div className="flex  h-[calc(100vh-3.6rem)] justify-around ">
      <div className="leftbox w-full bg-custom-gradient relative overflow-hidden ">
        <div className="trafficbox absolute left-[-175px] top-[-45px]">
          <TrafficLight />
        </div>
        <div className="absolute trafficpole bg-black w-[30px] h-full left-0 top-[250px]"></div>

        <div className="gradientLine absolute right-0  h-full bg-custom-gradient w-[9px] z-40"></div>
        <div className=" absolute bottom-10 right-[-200px] ">
          <TaxiIcon />
        </div>
        <div className="road bg-black w-[300px] h-[75px] absolute bottom-0 right-0 rounded-tl-full"></div>
        <div className="strip bg-[#444444] w-[30px] h-[50px] absolute rounded-s-sm right-0 bottom-[10px]"></div>
        <div className="textcontent absolute text-6xl 2xl:text-7xl text-black bottom-[35%] left-[80px] p-4 ">
          <div className="my-6 font-semibold">Find Your</div>
          <div className="text-7xl 2xl:text-8xl font-bold">Taxi Buddy</div>
        </div>
      </div>
      <div className="rightbox w-full flex justify-center items-center overflow-auto py-4">
        <CardWithForm />
      </div>

      {/* <Listings /> */}
    </div>
  );
}

export default Home;
