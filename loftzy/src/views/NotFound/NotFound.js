import React from "react";
import { ReactComponent as Error } from "./404.svg";
import classes from "./NotFound.css";

export default function NotFound() {
  return (
    <div className={classes.NotFound}>
      <Error />
    </div>
  );
}
