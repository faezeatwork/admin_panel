import { FastField, Form, Formik } from "formik";
import React from "react";

import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../formikAttribute_auth";
import { FormControl } from "../FormControl_Auth";

export const LoginInputs = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <Form>
            <FormControl
              value="phone"
              formik={formik}
              control="input"
              type="text"
              name="phone"
              placeholder="&#xe167; تلفن"
              inputStyle="registerInputStyle"
            />
            <FormControl
              control="input"
              type="password"
              name="password"
              placeholder="&#xe167;  پسورد"
              inputStyle="loginInputStyle"
            />

            <FormControl
              control="switch"
              name="remember"
              label="مرا بخاطر بسپار"
            />

            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill me-3"
              >
                login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
