import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch(`https://server-site-phi.vercel.app/coffee`),
  },
  {
    path: "add",
    element: <AddCoffee />,
  },
  {
    path: "/update/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://server-site-phi.vercel.app/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
