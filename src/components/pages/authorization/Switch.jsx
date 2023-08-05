import { FastField } from "formik";
import React from "react";

export const Switch = ({label , name }) => {
  return (
    <div className="form-check form-switch pt-4">
      <FastField
        className="form-check-input pointer"
        type="checkbox"
        name={name}
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
};
