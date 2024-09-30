import Navbar from "./componentsReact/Navbar";
import Footer from "./componentsReact/Footer";
import App from "./App";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
    </>
  );
}

export default Layout;
