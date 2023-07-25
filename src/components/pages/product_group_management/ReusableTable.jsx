import React, { useEffect, useState } from "react";
import { AddProduct } from "./AddProduct";
import { NavLink } from "react-router-dom";

const numOfRows_singlePage = 4; //در هر صفحه چند ردیف از حدول نمایش داده شود

export const ReusableTable = (props) => {
  const {
    nameOfColumn,
    dataOfRows,
    placeholder_searchBox,
    link_addButton,
    operation,
  } = props;
  const [currentPage, setCurrentPage] = useState(1); //پیجی که در اون هستیم
  const [pageCount, setPageCount] = useState(2); //تعداد کل صفحات
  const [arrPage, setArrPage] = useState([]); //یک ارایه از صفحات
  const [rowsPage, setRowsPage] = useState([]); //تعداد سطرهای هرصفحه
  useEffect(() => {
    let start = currentPage * numOfRows_singlePage - numOfRows_singlePage;
    let end = currentPage * numOfRows_singlePage;
    setRowsPage(dataOfRows.slice(start, end));
  }, [currentPage]);
  return (
    <div className="p-1">
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="input-group mb-3 searchBox">
          <span
            className="input-group-text pointer searchButton "
            id="basic-addon2"
          >
            جستجو
          </span>
          <input
            type="text"
            class="form-control"
            placeholder={placeholder_searchBox}
          />
        </div>
        {/* in icon ➕  */}
        <NavLink to={link_addButton}>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success d-flex justify-content-center align-items-center">
              <i className="fas fa-plus text-light"></i>
            </button>
          </div>
        </NavLink>
      </div>
      {/* ================== start table👇 ====================== */}
      <table className=" product_table table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {nameOfColumn.map((h) => (
              <th>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataOfRows.map((i, index) => (
            <>
              <tr>
                {dataOfRows[index].map((i) => (
                  <td>{i}</td>
                ))}
                {operation ? (
                  <td>
                    <i
                      className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
                      title="ویرایش محصول"
                      data-bs-toggle="modal"
                      data-bs-placement="top"
                      data-bs-target="#add_product_modal"
                    ></i>
                    <i
                      className="icon_product_table fas fa-receipt text-info mx-1 pointer has_tooltip"
                      title="ثبت ویژگی"
                      data-bs-toggle="modal"
                      data-bs-target="#add_product_attr_modal"
                    ></i>
                    <i
                      className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
                      title="حذف محصول"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    ></i>
                  </td>
                ) : (
                  ""
                )}
              </tr>
            </>
          ))}
        </tbody>
      </table>
      {/* ================== end table👆 ======================== */}


      {/* ================== start pagination👇 ================= */}
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          {}
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* ================== end pagination👆 =================== */}
    </div>
  );
};
