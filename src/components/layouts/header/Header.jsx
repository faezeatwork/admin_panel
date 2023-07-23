import React from "react";


export const Header = () => {


  return (
    <div className="headerDiv w-100 shadow">
      <div className="header w-100 d-flex justify-content-between">
        <div className="form-check form-switch d-flex align-items-center justify-content-center w-25">
          <input
            type="checkbox"
            className="form-check-input pointer"
            id="handle_toggle_sideMenu"     
          />
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <i className="headerLogos fa-solid fa-magnifying-glass p-3 fs-4 pointer"></i>
          <i className="headerLogos fa-regular fa-bell p-3 fs-4 pointer"></i>
          <i className="headerLogos fa-sharp fa-solid fa-list-ul p-3 fs-4 pointer"></i>
        </div>
      </div>
    </div>
  );
};
