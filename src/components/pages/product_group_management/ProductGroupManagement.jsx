import React from "react";
import { ProductTable } from "./ProductTable";
import { NavLink } from "react-router-dom";
export const ProductGroupManagement = () => {
  return (
    <div className="main_page px-2 productGroupManagement">
      <div className="text-center py-5 fs-5">مدیریت گروه محصولات</div>
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
  );
};
