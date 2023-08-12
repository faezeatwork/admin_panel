import React from "react";
import { NavLink } from "react-router-dom";

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
          {/*1 🔍 👇 */}
          <i className="headerLogos fa-solid fa-magnifying-glass p-3 fs-4 pointer"></i>{" "}
          {/*2 🔔 👇*/}
          <i className="headerLogos fa-regular fa-bell p-3 fs-4 pointer"></i>{" "}
          {/*3 📃 👇*/}
          <div className="btn-group ul_header z-3">
            <button
              type="button"
              className="btn headerLogos dropdown-toggle p-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-sharp fa-solid fa-list-ul fs-4"></i>
            </button>
            <ul className="dropdown-menu text-end">
              {/* ============================================ */}
              <NavLink to={"/"} className="text-decoration-none">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-gauge ps-2"></i> داشبورد
                  </a>
                </li>
              </NavLink>
              {/* ============================================= */}
              <NavLink to={"/"} className="text-decoration-none">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-brands fa-telegram ps-2"></i> تیکت ها
                  </a>
                </li>
              </NavLink>
              {/* ============================================== */}
              <NavLink to={"/"} className="text-decoration-none">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-envelope ps-2"></i> پیام ها
                  </a>
                </li>
              </NavLink>
              {/* ============================================== */}
              <li className="hr-li-header">
                <hr className="dropdown-divider" />
              </li>
              {/* ============================================== */}
              <NavLink to={"/exit"} className="text-decoration-none">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-door-open ps-2 "></i> خروج
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
