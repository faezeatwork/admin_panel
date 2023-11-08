import { FastField } from "formik";
import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export const SubmitBtn = (id) => {
  //console.log(id);
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
                <button type="submit" className="btn btn-success">
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
