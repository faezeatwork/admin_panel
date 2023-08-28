import { FastField } from "formik";
import React from "react";

export const AddFile = (props) => {
  const { type, name, placeholder } = props;
  return (
    <div className="p-2">
      <div className="input-group ">
        <span className="input-group-text titleSpan">تصویر</span>
        <FastField
          type={type}
          className="form-control"
          name={name}
          placeholder={placeholder}
        />
        <input type="file" className="choose_file" />
      </div>
    </div>
  );
};
