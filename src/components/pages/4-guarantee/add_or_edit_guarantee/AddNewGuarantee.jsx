import React from "react";
import { SubmitBtn } from "../../../formik/SubmitBtn";
import { FormikControl } from "../../../formik/FormikControl_AddItems";
import { Form, Formik } from "formik";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../FormikHelper_guarantee";
import { useState } from "react";
import { useEffect } from "react";

export const AddNewGuarantee = ({
  data,
  setData,
  guaranteeToEdit,
  setGuaranteeToEdit,
}) => {
  const [lengthUnit, setLengthUnit] = useState(null);
  const [reInitialValue, setReInitialValue] = useState(null);
  useEffect(() => {
    setReInitialValue({
      title: guaranteeToEdit.title || "",
      descriptions: guaranteeToEdit.descriptions || "",
      length: guaranteeToEdit.length || "",
      length_unit: guaranteeToEdit.length_unit || "",
    });
  }, [guaranteeToEdit]);
<<<<<<< HEAD

  //===================== 📍 handle reset form ==========================
  // const handleResetForm = () => {
  //   document.getElementById("formOfAddGuarantee").reset();
  // };

=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
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
                initialValues={reInitialValue || initialValues}
                onSubmit={(values, actions) => {
                  onSubmit(
                    values,
                    actions,
                    setData,
                    guaranteeToEdit,
                    setGuaranteeToEdit,
                    lengthUnit
                  );
                }}
                validationSchema={validationSchema}
                enableReinitialize
              >
                {(formik) => {
<<<<<<< HEAD
                  return (
                    <Form id="formOfAddGuarantee">
=======
                  console.log(guaranteeToEdit);
                  console.log(guaranteeToEdit.id);
                  return (
                    <Form>
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
                      {/* ==============  modal-header ============= */}
                      <div className="modal-header">
                        <h1 className=" w-100 fs-5" id="staticBackdropLabel">
                          {guaranteeToEdit.id
                            ? `${guaranteeToEdit.title} ویرایش گارانتی`
                            : "افزودن گارانتی جدید"}
                        </h1>
                        {/* =========== ❌ (exit the modal) ========== */}
                        <button
                          type="button"
                          className="btn-close "
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={() => {
                            formik.resetForm();
<<<<<<< HEAD
                            // handleResetForm();
=======
                            setGuaranteeToEdit([]);
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
                          }}
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
                              name="length_unit"
                              placeholder="برحسب:"
                              lengthUnit={lengthUnit}
                              setLengthUnit={setLengthUnit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
<<<<<<< HEAD
                        <SubmitBtn id={guaranteeToEdit.id} />
=======
                        <SubmitBtn a={guaranteeToEdit.id} />
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
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
