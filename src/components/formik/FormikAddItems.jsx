import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormikControl } from "./FormikControl_AddItems";
import axios from "axios";

export const FormikAddItems = () => {
  const initialValues = {
    title: "title1",
    description: "description1",
    parent_id: "parent_id1",
    is_active: true,
    show_in_menu: true,
    image: null,
  };

  const onSubmit = (values) => {
    axios
      .post("https://ecomadminapi.azhadev.ir/api/admin/categories", values)
      .then((res) => {
        console.log(res);
      })
      .catch();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => {
       console.log(formik);
        return (
          <Form className="">
            <FormikControl
              control="select"
              type="select"
              name="parent_id"
              label="دسته والد"
            />
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
              type="textarea"
              name="description"
              placeholder="توضیحات"
            />
            <FormikControl
              control="addFile"
              type="text"
              name="addFile"
              placeholder="برای انتخاب تصویر خود کلیک کنید."
            />
            <FormikControl control="checkbox" />
            <button className="btn btn-success">ذخیره</button>
          </Form>
        );
      }}
    </Formik>
  );
};
