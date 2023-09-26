import { FastField } from "formik";
import React from "react";

export const SwitchCheckBox = ({ label, name }) => {
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

//(برای دکمه ی (مرا بخاطر بسپار
// و نمایش در فیلتر در ثبت ویژگی
