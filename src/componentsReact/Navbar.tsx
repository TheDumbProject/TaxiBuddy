import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-pirmary text-center h-14 text-black bg-yellow-400 flex justify-between">
      <div className=" text-2xl px-8 flex justify-center items-center  font-semibold">
        <Link to="/">Taxi Buddy</Link>
      </div>
      <div className="w-[40%] flex items-center justify-between">
        <ul className="flex text-xl text-center gap-10 items-center w-[80%]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px]" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px]" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mybuddy"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px]" : ""}`
              }
            >
              MyBuddy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px]" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="profile px-8 pt-1 mx-3">
          <span className="material-symbols-outlined text-3xl">face_3</span>
        </div>
      </div>
    </div>
  );
}
