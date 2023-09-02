import React from "react";
import { AddCompo } from "./AddCompo";
import { useParams } from "react-router-dom";

export const ReusableAdding = () => {
  return (
    <AddCompo title="اضافه کردن محصول" exit_icon="/product-group-management" />
  );
};
