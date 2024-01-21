import { ErrorMessage, FastField } from "formik";
import React, { useState } from "react";

export const Inputs = (props) => {
  const { title, formik, type, name, placeholder, categoryTitle } = props;

  return (
    <div className="p-2">
      <div className="input-group">
        <span
<<<<<<< HEAD
          className="input-group-text titleSpan customWidth-112"
=======
          className="input-group-text titleSpan customStyle"
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
          id="basic-addon2"
        >
          {title ? title : placeholder}
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
