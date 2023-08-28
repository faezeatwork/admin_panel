import { ErrorMessage, FastField } from "formik";
import React from "react";

export const Select_Input = (props) => {
  const { type, name, label } = props;

  return (
    <div className="p-2">
      <div className="input-group">
        <span className="input-group-text" id="basic-addon2">
          {label}
        </span>
        <FastField as="select" className="form-select">
          <option value="DEFAULT">Open this select menu</option>
          <option value="1">One</option>
        </FastField>
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
