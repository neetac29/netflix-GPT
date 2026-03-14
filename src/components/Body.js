import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      errorElement: <ErrorPage />,
    },
  ]);


  return (
    <div>
      <RouterProvider 
        router={appRouter} 
        future={{ v7_startTransition: true }}
      />
    </div>
  );
};

export default Body;
