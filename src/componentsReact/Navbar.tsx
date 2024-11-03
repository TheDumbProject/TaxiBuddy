import { Button } from "@/components/ui/button";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AuthPopup from "./components/AuthPopup";
import { FaTaxi } from "react-icons/fa";

export default function Navbar({ loggedIn, setLoggedIn }) {
  //auth code

  //end of auth code

  return (
    <div className=" flex flex-row bg-custom-gradient-nav text-black p-1 px-4 py-2 justify-between border-b-[5px] border-black">
      <div className=" text-2xl  flex justify-center items-center  font-semibold">
        <Link to="/home">
          <div className="flex flex-row justify-center items-center">
            <FaTaxi className="mr-2" /> <span> Taxi Buddy</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row ">
        <ul className="flex text-xl text-center gap-10 items-center justify-center ">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${isActive ? "font-semibold border-b-[3px] py-1" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mybookings"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px] py-1" : ""}`
              }
            >
              <span>My Bookings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px] py-1" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px] py-1" : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        {/*Maybe use this later on */}
        {/*<ul className="flex text-xl text-center gap-10 items-center w-[80%]">
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${isActive ? " font-semibold border-b-[3px]" : ""}`
              }
            >
              Register
            </NavLink>
          </li>
          </ul>
         <div className="profile px-8 pt-1 mx-3">
           <span className="material-symbols-outlined text-3xl">face_3</span>
         </div>*/}

        {!loggedIn && (
          <Dialog>
            <DialogTrigger>
              <Button className="text-md py-[2px] rounded-[8px] bg-black text-white font-semibold hover:bg-[#1e1e1e] hover:text-yellow-400">
                Register
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-[#1e1e1e] min-w-[50%]">
              <AuthPopup />
            </DialogContent>
          </Dialog>
        )}

        {loggedIn && (
          <div className="px-5">
            <Button
              onClick={() => {
                setLoggedIn(false);
                localStorage.removeItem("token");
              }}
              className="text-md py-[2px] rounded-[8px] bg-black text-white font-semibold hover:bg-[#1e1e1e] hover:text-yellow-400"
            >
              Log Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
