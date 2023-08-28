import { ErrorMessage, FastField } from "formik";
import React from "react";

export const Inputs = (props) => {
  const { type, name, placeholder } = props;

  return (
    <div className="p-2">
      <div className="input-group">
        <span className="input-group-text titleSpan" id="basic-addon2">
          {name}
        </span>
        <FastField
          type={type}
          className="form-control"
          name={name}
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
