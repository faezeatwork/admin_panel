import { FastField } from "formik";
import React from "react";
import { Spinner } from "react-bootstrap";

export const SubmitBtn = () => {
  return (
    <FastField>
      {({ form }) => {
        return (
          <>
            <button className="btn btn-success" disabled={form.isSubmitting}>
              ذخیره
              {form.isSubmitting ? (
                <Spinner
                  className="me-3"
                  animation="border"
                  variant="light"
                  size="sm"
                />
              ) : null}
            </button>
          </>
        );
      }}
    </FastField>
  );
};
