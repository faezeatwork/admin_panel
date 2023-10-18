import React from "react";

export const Operations_guarantee = () => {
    console.log('fffffffffff');
  return (
    <div>
      <i
        className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
        title="ویرایش محصول"
        data-bs-placement="top"
        data-bs-toggle="modal"
        data-bs-target="#add-brand-modal"
      ></i>

      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
      ></i>
    </div>
  );
};
