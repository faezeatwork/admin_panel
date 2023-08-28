import React from "react";
import { UpperPartPages } from "../../general_compo/UpperPartPages";
import { AddCompo } from "../../general_compo/AddCompo";


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
