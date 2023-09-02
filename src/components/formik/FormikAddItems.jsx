import { Formik, Form } from "formik";
import React from "react";
import { FormikControl } from "./FormikControl_AddItems";
import { useEffect } from "react";
import { useState } from "react";
import {
  handleGetParentsCategories,
  initialValues,
  onSubmit,
  validationSchema,
} from "./FormikAtt_AddItems";
import { SubmitBtn } from "./SubmitBtn";

//====================================
export const FormikAddItems = ({ setForceRender }) => {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    handleGetParentsCategories(setParents);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions, setForceRender)}
      validationSchema={validationSchema}
    >
      {(formik) => {
        //console.log(formik);
        return (
          <Form className="">
            {parents.length > 0 ? (
              <FormikControl
                control="select"
                type="select"
                name="parent_id"
                label="دسته والد"
                option={parents}
              />
            ) : null}

            <FormikControl
              formik={formik}
              control="input"
              type="text"
              name="title"
              placeholder="عنوان"
              inputStyle="registerInputStyle"
            />
            <FormikControl
              control="textArea"
              type="text"
              name="description"
              placeholder="توضیحات"
            />
            <FormikControl
              control="addFile"
              type="text"
              name="addFile"
              label="تصویر"
              placeholder="برای انتخاب تصویر خود کلیک کنید."
              formik={formik}
            />
            <div className="d-flex justify-content-evenly">
              <FormikControl
                control="checkbox"
                name="is_active"
                label="وضعیت فعال"
              />

              <FormikControl
                control="checkbox"
                name="show_in_menu"
                label="نمایش در منو"
              />
            </div>
            <div className=" text-center pt-4">
              <SubmitBtn />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
