import { ErrorMessage, FastField } from "formik";
import React from "react";

export const Select_Input = ({
  label,
  option,
  firstItem,
  name,
  parent_title,
}) => {
  return (
    <div className="p-2">
      <div className="input-group mb-1">
        <span className="input-group-text w_6rem customStyle">{label}</span>
        <FastField
          as="select"
          className="form-control form-select"
          id={name}
          name={name}
        >
          {parent_title ? (
            <option>{parent_title}</option>
          ) : (
            <>
              {/* <option> دسته والد را انتخاب کنید... </option>  */}
              <option hidden value className="text-danger">
                {firstItem ? firstItem : "--"}
              </option>
              {option.map((d) => (
                <option className="text-dark" key={Math.random()} value={d.id}>
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

// 📍hidden value: برای وقتی که میخواهیم اون
//آپشن مثل پلیس هولدر عمل کنه
