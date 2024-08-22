import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
export default function Navbar() {
  return (
    <div className="  flex flex-row bg-yellow-400 text-black p-1 px-4 justify-between">
      <div className=" text-2xl  flex justify-center items-center  font-semibold">
        <Link to="/">
          <div className="flex flex-row justify-center items-center">
            <FaTaxi className="mr-2" /> <span> Taxi Buddy</span>
          </div>
        </Link>
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
      </div>
    </div>
  );
}