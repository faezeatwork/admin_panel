import { FastField, Form } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";

export const SwitchCheckBox = ({ label, name, getAttToEdit }) => {
  return (
    <div className="form-check form-switch pt-4">
      <FastField id={name} name={name} type="checkbox" className=" pointer" />
    </div>
  );
};

//(برای دکمه ی (مرا بخاطر بسپار
// و نمایش در فیلتر در ثبت ویژگی
