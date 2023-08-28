import { ErrorMessage, FastField } from "formik";
import React from "react";

export const TextArea = (props) => {
  const { name, placeholder } = props;
  return (
    <div className="p-2">
      <div className="input-group  ">
        <span className="input-group-text titleSpan">{placeholder}</span>
        <textarea
          placeholder={placeholder}
          className="form-control"
          aria-label="With textarea"
        ></textarea>
        <ErrorMessage name={name} render={(err)=><small className="text-danger" >{err}</small>}/>
      </div>
    </div>
  );
};
