import { FastField } from "formik";
<<<<<<< HEAD
import React from "react";
import { Spinner } from "react-bootstrap";

export const SubmitBtn = (id) => {
  // console.log(id);
=======
import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export const SubmitBtn = (id) => {
  //console.log(id);
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
  if (typeof id == "object") {
    let message = "";

    for (const key in id) {
      message = `${id[key]}`;
      if (message == "undefined" || message == "null") {
        message = "";
      }
    }
    id = message;
  }

  return (
    <FastField>
      {({ form }) => {
        return (
          <span className="btn " disabled={form.isSubmitting}>
            <span>
              {id ? (
                <button type="submit " className="btn btn-warning">
                  اعمال تغییرات
                  {form.isSubmitting ? (
                    <Spinner
                      className="me-3 text-dark"
                      animation="border"
                      variant="light"
                      size="sm"
                    />
                  ) : null}
                </button>
              ) : (
<<<<<<< HEAD
                <button
                  // id="submit-btn-addDiscount"
                  type="submit"
                  className="btn btn-success"
                  // onClick={() => setForceRender((i) => i + 1)}
                >
=======
                <button type="submit" className="btn btn-success">
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
                  ذخیره
                  {form.isSubmitting ? (
                    <Spinner
                      className="me-3 text-dark"
                      animation="border"
                      variant="light"
                      size="sm"
                    />
                  ) : null}
                </button>
              )}
            </span>
          </span>
        );
      }}
    </FastField>
  );
};

// { categoryId, getAttToEdit, brandId }
