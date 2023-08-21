import React from "react";
import { NavLink } from "react-router-dom";

export const UpperPartPages = ({ title }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center py-5 fs-5"> {title} </div>
      {/*exit button */}
    </div>
  );
};
