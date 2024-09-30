import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/ui/theme-provider";
import Layout from "./Layout.tsx";
import Home from "./componentsReact/Home/Home.tsx";
import About from "./componentsReact/About/About.tsx";
import ContactUs from "./componentsReact/ContactUs/ContactUs.tsx";
import MyBuddy from "./componentsReact/MyBuddy/MyBuddy.tsx";
import BookingResults from "./componentsReact/BookingResults/BookingResults.tsx";
import Error404 from "./componentsReact/Error404/Error404.tsx";
import MyBooking from "./componentsReact/MyBookings/MyBooking.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "mybuddy",
        element: <MyBuddy />,
      },
      {
        path: "results",
        element: <BookingResults />,
      },
      {
        path: "mybookings",
        element: <MyBooking />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>
);
