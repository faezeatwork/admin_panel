import React from "react";
import { AddNewDiscounts_modal } from "./AddNewDiscounts_modal";

export const handleAddDiscounts = (discountToEdit) => {
  return <AddNewDiscounts_modal discountToEdit={discountToEdit}/>;
};
