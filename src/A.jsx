import React from "react";
import { Link } from "@material-ui/core";

/* eslint-disable react/prop-types */
export default function A({ href, children }) {
  return (
    <Link {...{ href }} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
