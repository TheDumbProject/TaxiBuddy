import React from "react";
import { FaCode, FaL } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="container flex h-[calc(100vh-3.6rem)]  justify-center items-center">
      <div className="One w-[400px] h-[450px] bg-[#1e1e1e]  rounded-3xl flex flex-col justify-start py-4 px-4 gap-2 ">
        <div className="codesymbol">
          <FaCode className="text-[#ffa800] text-4xl" />
        </div>
        <div className="centerBox ">
          <div className="imagebox mx-auto h-[250px] w-[80%] bg-neutral-600"></div>
          <div className="name text-white text-2xl text-center mb-3 mt-5 font-bold tracking-wide ">
            Ansh Rastogi
          </div>
        </div>
        <div className="lowerBox flex justify-around items-center my-3">
          <FaGithub className="text-[#ffa800] text-4xl hover:text-[#D9D9D9] cursor-pointer" />
          <FaLinkedin className="text-[#ffa800] text-4xl hover:text-[#D9D9D9] cursor-pointer" />
          <RiInstagramFill className="text-[#ffa800] text-4xl hover:text-[#D9D9D9] cursor-pointer" />
          <SiGmail className="text-[#ffa800] text-4xl hover:text-[#D9D9D9] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default About;
