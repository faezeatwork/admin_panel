import { ErrorMessage, FastField } from "formik";
import React from "react";

export const Select_Input = ({ label, option, name, parent_title }) => {
  return (
    <div className="p-2">
      <div className="input-group mb-3 ">
        <span className="input-group-text w_6rem justify-content-center">
          {label}
        </span>
        <FastField as="select" className="form-control" id={name} name={name}>
          {parent_title ? (
            <option>{parent_title}</option>
          ) : (
            <>
              {/* <option> دسته والد را انتخاب کنید... </option>  */}
              <option>--</option>
              {option.map((d) => (
                <option key={Math.random()} value={d.id} placeholder="ww">
                  {d.value}
                </option>
              ))}
            </>
          )}
        </FastField>
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};



