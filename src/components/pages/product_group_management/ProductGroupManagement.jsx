import React, { useEffect } from "react";
import { ProductTable } from "./ProductTable";
import { NavLink } from "react-router-dom";
import { Header } from "../../layouts/header/Header";
import { Sidebar } from "../../layouts/sidebar/Sidebar";
import { toggleSidebar } from "../../layouts/sidebar/toggleSidebar";
export const ProductGroupManagement = () => {
  return (
    <>
     
      <div className="main_page px-2 productGroupManagement">
        <div className="d-flex justify-content-between align-items-center">
          <div></div>
          <div className="text-center py-5 fs-5">مدیریت گروه محصولات</div>
          <NavLink to="/">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </NavLink>
        </div>

        <div className="d-flex justify-content-between align-items-center p-2">
          <div class="input-group mb-3 searchBox">
            <span
              class="input-group-text pointer searchButton "
              id="basic-addon2"
            >
              جستجو
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
          </div>
          <NavLink to="/add-product">
            <div className="d-flex justify-content-end">
              <button className="btn btn-success d-flex justify-content-center align-items-center">
                <i className="fas fa-plus text-light"></i>
              </button>
            </div>
          </NavLink>
        </div>

        <ProductTable />
      </div>
    </>
  );
};
