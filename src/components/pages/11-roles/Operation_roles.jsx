import React from "react";
import { deleteRoleService } from "../../../services/CRUD_categoryService";
import { handleDeleteOperation } from "../../general_compo/reusable_operations/delete_operation/DeleteOperation";
import { EditPermissions_modal } from "./EditPermissions_modal";

export const Operation_roles = ({
  rowData,
  data,
  setData,
  permissions,
  setRowDataToEdit,
}) => {
  return (
    <span className=" d-flex justify-content-center align-items-center">
      <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        {/* <NavLink to={"/roles"}> */}
        <i
          className=" icon_product_table fas fa-edit text-warning mx-2 pointer has_tooltip"
          title="ویرایش نقش"
          onClick={() => setRowDataToEdit(rowData)}
        ></i>
        {/* </NavLink> */}
      </span>
      {/* ویرایش دسترسی های هر نقش 👇*/}
      <EditPermissions_modal permissions={permissions} rowData={rowData} />

      {/* دکمه حذف کد تخفیف 👇 */}
      <i
        className="icon_product_table fas fa-times text-danger mx-2 pointer has_tooltip"
        title="حذف نقش"
        onClick={() => {
          handleDeleteOperation(rowData.id, data, setData, deleteRoleService);
        }}
      ></i>
    </span>
  );
};
