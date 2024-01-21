import { ErrorMessage, FastField } from "formik";
import React from "react";

export const TextArea = (props) => {
  const { type, name, placeholder } = props;
  return (
    <div className="p-2">
      <div className="input-group">
<<<<<<< HEAD
        <span className="input-group-text titleSpan customWidth-112">{placeholder}</span>
=======
        <span className="input-group-text titleSpan customStyle">{placeholder}</span>
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f

        <FastField
          as="textarea"
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
        />
        <ErrorMessage
          name={name}
          render={(err) => <small className="text-danger w-100">{err}</small>}
        />
      </div>
    </div>
  );
};
