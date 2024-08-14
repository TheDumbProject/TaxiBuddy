import React from "react";
import Navbar from "./componentsReact/Navbar";
import Footer from "./componentsReact/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
