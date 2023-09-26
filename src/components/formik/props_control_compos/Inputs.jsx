import { ErrorMessage, FastField } from "formik";
import React, { useState } from "react";

export const Inputs = (props) => {
  const { formik, type, name, placeholder, categoryTitle } = props;

  return (
    <div className="p-2">
      <div className="input-group">
        <span className="input-group-text titleSpan" id="basic-addon2">
          {placeholder}
        </span>
        <FastField
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
