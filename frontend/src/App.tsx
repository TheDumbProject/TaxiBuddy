import React from "react";
import { CardWithForm } from "./componentsReact/MainCard";
function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-pirmary text-center h-14 text-black bg-yellow-400 flex  ">
        <h1 className=" text-xl px-8 flex justify-center items-center  font-semibold">
          Taxi Buddy
        </h1>
      </div>
      <div className="container h-dvh flex justify-center items-center ">
        <CardWithForm />
      </div>
    </>
  );
}

export default App;
