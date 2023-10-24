import { ErrorMessage, FastField } from "formik";
import React from "react";
import { useEffect } from "react";

export const Radiobtn = ({name, lengthUnit, setLengthUnit }) => {
  return (
    <div>
      <FastField>
        {({ form }) => {
          return (
            <>
              <div className="control d-flex align-items-center">
                <span>بر حسب : </span>
                <label className="radio ps-1">
                  سال
                  <input
                    type="radio"
                    name="answer"
                    value="سال"
                    onClick={(e) => {
                      setLengthUnit(e.target.value);
                    }}
                    checked={form.values.length_unit == "سال" ? true : null}
                  />
                </label>
                <label className="radio">
                  ماه
                  <input
                    type="radio"
                    name="answer"
                    value="ماه"
                    onClick={(e) => {
                      setLengthUnit(e.target.value);
                      console.log(form.values?.length_unit);
                    }}
                    checked={form.values.length_unit == "ماه" ? true : null}

                    //defaultChecked={true}
                  />
                </label>
              </div>
            </>
          );
        }}
      </FastField>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
