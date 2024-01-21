<<<<<<< HEAD
import { FastField } from "formik";
import React from "react";

export const SwitchCheckBox = ({ label, name, customClass }) => {
  return (
    <div className={`${customClass} form-check form-switch`}>
      <div className="form-check d-flex align-items-center justify-content-center">
        <span className="form-check-label ps-3">{label}</span>
        <FastField
          id={name}
          name={name}
          type="checkbox"
          className="form-check-input pointer"
        />
      </div>
=======
import { FastField, Form } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";

export const SwitchCheckBox = ({ label, name, getAttToEdit }) => {
  return (
    <div className="form-check form-switch pt-4">
      <FastField id={name} name={name} type="checkbox" className=" pointer" />
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
    </div>
  );
};

//(برای دکمه ی (مرا بخاطر بسپار
// و نمایش در فیلتر در ثبت ویژگی
