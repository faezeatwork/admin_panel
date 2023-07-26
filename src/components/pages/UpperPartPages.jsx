import React from "react";
import { NavLink } from "react-router-dom";

export const UpperPartPages = ({ title }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div></div>
      <div className="text-center py-5 fs-5"> {title} </div>
      {/*exit button 👇*/}
      <NavLink to="/">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </NavLink>
    </div>
  );
};
