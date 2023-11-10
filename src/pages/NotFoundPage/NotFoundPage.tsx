import React from "react";
import styles from "./NotFoundPage.module.css";
import { Link, useRouteError } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  // @ts-ignore
  const error: string = useRouteError();
  return (
    <div className="container">
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
