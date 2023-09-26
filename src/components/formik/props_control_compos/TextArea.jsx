import { ErrorMessage, FastField} from "formik";
import React from "react";

export const TextArea = (props) => {
  const { type, name, placeholder } = props;
  return (
    <div className="p-2">
      <div className="input-group  ">
        <span className="input-group-text titleSpan">{placeholder}</span>
        <FastField
          as="textarea"
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
        />
        <ErrorMessage
          name={name}
          render={(err) => <small className="text-danger">{err}</small>}
        />
      </div>
    </div>
  );
};
