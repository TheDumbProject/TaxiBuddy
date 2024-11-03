import Navbar from "./componentsReact/Navbar";
import Footer from "./componentsReact/Footer";
import App from "./App";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserLogin from "./componentsReact/UserLogin";
import { verify } from "crypto";
import { set } from "date-fns";
import axios from "axios";

function Layout() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoggedIn(false);
      return;
    }
    try {
      axios
        .post(
          "http://localhost:2707/verify",
          { token: token },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          setLoggedIn(response.data.message === "verified");
        });
    } catch (error) {
      console.error(error);
    }
    console.log(loggedIn);
  }, []);

  return (
    <>
      <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Toaster />
      {loggedIn === true && <Outlet />}
      {loggedIn === false && <UserLogin setLoggedIn={setLoggedIn} />}
    </>
  );
}

export default Layout;
