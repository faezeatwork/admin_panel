import { ErrorMessage, Field } from "formik";
import React from "react";

export const Select_Input = ({
  label,
  option,
  firstItem,
  name,
  parent_title,
  showSubInput,
  stateOfData,
}) => {
  return (
    <div className="p-2">
      <div className="input-group mb-1">
        <span className="input-group-text w_6rem customStyle">{label}</span>
        <Field
          as="select"
          className="form-control form-select"
          id={name}
          name={name}
          onClick={(e) => {
            showSubInput && stateOfData(e.target.value);
          }}
        >
          {parent_title ? (
            <option>{parent_title}</option>
          ) : (
            <>
              <option hidden value>
                {firstItem ? firstItem : "--"}
              </option>
              {option.map((d) => (
                <option className="text-dark" key={Math.random()} value={d.id}>
                  {d.value}
                </option>
              ))}
            </>
          )}
        </Field>
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
