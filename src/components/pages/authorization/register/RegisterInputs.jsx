import React from "react";

import { Form, Formik } from "formik";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../formikAttribute_auth";
import { FormControl } from "../FormControl_Auth";

export const RegisterInputs = () => {
  const ItemValidationTypeRadio = [
    { id: "phone", name: "phone" },
    { id: "email", name: "email" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        // console.log(formik);
        // console.log(formik.values.auth_mode);
        return (
          <Form>
            <FormControl
              formik={formik}
              control="input"
              type="number"
              name="phone"
              placeholder="phone"
              inputStyle="registerInputStyle"
            />

            <FormControl
              formik={formik}
              control="input"
              type="password"
              name="password"
              placeholder="password"
              inputStyle="registerInputStyle"
              errMsg="divErrMsg"
            />
            <FormControl
              formik={formik}
              control="input"
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              inputStyle="registerInputStyle"
            />
            {/* ================= Register btn ================== */}
            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill mt-2"
              >
                Register
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
 
  );
};
