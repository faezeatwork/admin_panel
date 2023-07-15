import React from "react";

export const Header = () => {
  return (
    <div className="headerDiv w-100">
      <div className="header w-100 d-flex justify-content-end align-items-center">
        <i className="fa-solid fa-magnifying-glass p-3 fs-4 headerLogos pointer"></i>
        <i className="fa-regular fa-bell p-3 fs-4 headerLogos pointer"></i>
        <i className="fa-sharp fa-solid fa-list-ul p-3 fs-4 headerLogos pointer"></i>
      </div>
    </div>
  );
};
