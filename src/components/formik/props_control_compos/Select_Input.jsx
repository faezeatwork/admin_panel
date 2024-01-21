import { ErrorMessage, Field } from "formik";
import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f

export const Select_Input = ({
  label,
  option,
  firstItem,
  name,
  parent_title,
  showSubInput,
  stateOfData,
<<<<<<< HEAD
  addBtnPath,
  addBtnOption,
}) => {
  return (
    <div className="p-2 ">
      <div className="input-group mb-1 ">
        <span className="input-group-text w_6rem customWidth-112">{label}</span>

        <Field>
          {() => {
            return (
              <>
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
                        <option
                          className="text-dark"
                          key={Math.random()}
                          value={d.id}
                        >
                          {d.value}
                        </option>
                      ))}
                    </>
                  )}
                </Field>
                {addBtnOption && (
                  <div className="d-flex justify-content-center align-items-center bg-light p-2">
                    <NavLink className="text-decoration-none" to={addBtnPath}>
                      <button className="btn btn-sm btn-light d-flex">
                        <i className="fas fa-plus text-success"></i>
                      </button>
                    </NavLink>
                  </div>
                )}
              </>
            );
          }}
        </Field>
      </div>

=======
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
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};

// 📍hidden value: برای وقتی که میخواهیم اون
//آپشن مثل پلیس هولدر عمل کنه
