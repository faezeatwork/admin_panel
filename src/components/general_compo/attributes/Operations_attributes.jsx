import React from "react";
import { deleteAttributeService } from "../../../services/CRUD_categoryService";
import { handleDeleteOperation } from "../reusable_operations/DeleteOperation";
import { NavLink } from "react-router-dom";

export const Operations_attributes = ({
  rowData,
  data,
  setData,
  handleGetOneAttribute,
}) => {
  return (
    <>
      <NavLink
        to={`/product-group-management/518/adding-attribute/${rowData.id}`}
      >
        <i
          className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
          title="ویرایش محصول"
          onClick={() => {
            handleGetOneAttribute(rowData.id);
          }}
        ></i>
      </NavLink>
      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() => {
          handleDeleteOperation(
            rowData.id,
            data,
            setData,
            deleteAttributeService
          );
        }}
      ></i>
    </>
  );
};
