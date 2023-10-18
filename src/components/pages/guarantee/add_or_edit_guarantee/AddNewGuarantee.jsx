import React from "react";
import { SubmitBtn } from "../../../formik/SubmitBtn";
import { FormikControl } from "../../../formik/FormikControl_AddItems";
import { Form, Formik } from "formik";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../FormikHelper_guarantee";

export const AddNewGuarantee = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#add-brand-modal"
      >
        افزودن گارانتی جدید
      </button>

      {/* ================= 📍start modal ================= */}
      <div
        className="modal fade modal-dialog modal-dialog-centered pb-5"
        id="add-brand-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* ==============  modal-body ============== */}
            <div className="modal-body ">
              <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  onSubmit(values, actions);
                }}
                validationSchema={validationSchema}
                enableReinitialize
              >
                {(formik) => {
                  return (
                    <Form>
                      {/* ==============  modal-header ============= */}
                      <div className="modal-header">
                        <h1 className=" w-100 fs-5" id="staticBackdropLabel">
                          اضافه کردن گارانتی جدید
                        </h1>
                        {/* =========== ❌ (exit the modal) ========== */}
                        <button
                          type="button"
                          className="btn-close "
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* ==============  modal-body ============== */}
                      <div className="pt-3">
                        <FormikControl
                          control="input"
                          type="text"
                          name="title"
                          placeholder="عنوان"
                        />

                        <FormikControl
                          control="textArea"
                          type="textArea"
                          name="descriptions"
                          placeholder="توضیحات"
                        />
                        <div className="row">
                          <div className="col-7 ">
                            <FormikControl
                              control="input"
                              type="number"
                              name="length"
                              placeholder="مدت گارانتی"
                            />
                          </div>
                          <div className="col-5 d-flex align-items-center">
                            <FormikControl
                              control="radio"
                              type="radio"
                              name="length"
                              placeholder="برحسب:"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <SubmitBtn />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* ================= 📍end modal ================= */}
    </div>
  );
};
