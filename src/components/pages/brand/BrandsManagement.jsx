import React from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { AddCompo } from "../../general_compo/add_or_edit_product/AddCompo";


export const BrandsManagement = () => {
  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت برندها" />
        <AddCompo/>
      </div>
    </>
  );
};
