import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div className="errorPage">
      <h1>Oops!!!!</h1>
      <h2>{err}</h2>
    </div>
  );
};

export default ErrorPage;
