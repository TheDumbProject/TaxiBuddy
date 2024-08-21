import Navbar from "./componentsReact/Navbar";
import Footer from "./componentsReact/Footer";
import App from "./App";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <App />
    </>
  );
}

export default Layout;
