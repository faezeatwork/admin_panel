import React from "react";
import { NavLink } from "react-router-dom";
import { deleteRoleService } from "../../../services/CRUD_categoryService";
import { handleDeleteOperation } from "../../general_compo/reusable_operations/delete_operation/DeleteOperation";

export const Operation_roles = ({
  rowData,
  data,
  setData,
  setRowDataToEdit,
}) => {
  return (
    <span className=" d-flex justify-content-center align-items-center">
      <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <NavLink to={"/roles"}>
          <i
            className=" icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
            onClick={() => setRowDataToEdit(rowData)}
          ></i>
        </NavLink>
      </span>
      {/* دکمه حذف کد تخفیف 👇 */}
      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() => {
          handleDeleteOperation(rowData.id, data, setData, deleteRoleService);
        }}
      ></i>
    </span>
  );
};
