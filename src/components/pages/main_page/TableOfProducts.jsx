import React from "react";

export const TableOfProducts = () => {
  return (
    <div className="col-lg-5 col-md-12 px-3">
      <table className="productTable table table-bordered border-primary ">
        <thead>
          <tr className="bg-info">
            <td>#</td>
            <td>دسته</td>
            <td>عنوان</td>
            <td>وضعیت</td>
            <td>عملیات</td>
          </tr>
        </thead>
        <tbody>
          <tr className="productTableRow">
            <td>#</td>
            <td>دسته</td>
            <td>عنوان</td>
            <td>وضعیت</td>
            <td>عملیات</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
