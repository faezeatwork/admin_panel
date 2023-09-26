import { FastField } from "formik";
import React from "react";
import { Spinner } from "react-bootstrap";

export const SubmitBtn = ({ categoryId }) => {
  return (
    <FastField>
      {({ form }) => {
        return (
          <>
            <span type="btn" className="btn pt-4" disabled={form.isSubmitting}>
              {categoryId ? (
                <button className="btn btn-warning">
                  {" "}
                  ذخیره تغییرات
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
                <button className="btn btn-success">
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
          </>
        );
      }}
    </FastField>
  );
};
