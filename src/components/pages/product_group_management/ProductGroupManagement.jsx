import React, { useEffect } from "react";
import {ReusableTable } from "./ReusableTable";
import { NavLink } from "react-router-dom";


const rows_data_productTable = [
  ["1", "فلان1", "محصول1", "20تومان", "100", "123", "فعال"],
  ["2", "فلان2", "محصول2", "20تومان", "100", "123", "فعال"],
  ["3", "فلان3", "محصول3", "20تومان", "100", "123", "فعال"],
  ["4", "فلان4", "محصول4", "20تومان", "100", "123", "فعال"],
  ["5", "فلان5", "محصول5", "20تومان", "100", "123", "فعال"],
  ["6", "فلان6", "محصول6", "20تومان", "100", "123", "فعال"],
  ["7", "فلان7", "محصول7", "20تومان", "100", "123", "فعال"],
];
const headers_productTable = [
  "#",
  "دسته",
  "عنوان",
  "قیمت",
  "موجودی",
  "تعداد لایک",
  "وضعیت",
  "عملیات",
];

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

        <ReusableTable
          nameOfColumn={headers_productTable}
          dataOfRows={rows_data_productTable}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          link_addButton="/add-product"
          operation="true"
        />
      </div>
    </>
  );
};
