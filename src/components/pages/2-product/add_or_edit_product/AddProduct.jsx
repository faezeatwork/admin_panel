import React from "react";
import { PrevPageBtn } from "../../../general_compo/reusable_operations/PrevPageBtn";
import { Form, Formik } from "formik";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../FormikHelper_products";
import { FormikControl } from "../../../formik/FormikControl_AddItems";
import { SubmitBtn } from "../../../formik/SubmitBtn";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  handleGetBrands,
  handleGetCategories,
  handleGetColors,
} from "./Get_Items_dropdowns";

export const AddProduct = () => {
  const [mainCategories, setMainCategories] = useState([]); // نگهداری همه محصولات والد
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [reInitialize, setReInitialize] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setReInitialize({
      category_ids: location.state.rowData?.categories[0].id,
      color_ids: location.state.rowData?.colors[0].id,
      ...location.state.rowData,
    });
  }, [location]);

  useEffect(() => {
    handleGetCategories(setMainCategories); //محصولات والد رو میگیره
  }, []);

  useEffect(() => {
    handleGetColors(setColors); //رنگ ها رو میگیره
  }, []);

  useEffect(() => {
    handleGetBrands(setBrands); // برندها رو میگیره
  }, []);

  return (
    <div>
      {/* ================= 📍 header of page  ==================== */}
      <div className="header_addProduct p-3 d-flex justify-content-between container">
        <h5>
          {location.state.title_for_adding
            ? location.state.title_for_adding
            : location.state.title_for_editing + `" ${reInitialize.title} "`}
        </h5>
        <PrevPageBtn
          customStyle="fs-2 text-start text-secondary"
          returnTitle={<i className="fa-solid fa-xmark"></i>}
        />
      </div>

      {/* =================== 📍 start form  ======================= */}
      <div className="container col-lg-5 ">
        <Formik
          initialValues={reInitialize || initialValues}
          onSubmit={(value, action) =>
            onSubmit(value, action, reInitialize, setReInitialize)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          {(form) => {
            //console.log(form.values);
            return (
              <Form>
                {mainCategories.length ? (
                  <FormikControl
                    control="select"
                    label="دسته"
                    option={mainCategories}
                    name="category_ids"
                  />
                ) : (
                  "دسته والد"
                )}
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  placeholder="عنوان"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="price"
                  title="قیمت"
                  placeholder="قیمت (تومان)"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="weight"
                  title="وزن"
                  placeholder="وزن (کیلوگرم)"
                />
                {brands.length ? (
                  <FormikControl
                    control="select"
                    label="برند"
                    option={brands}
                    name="brand_id"
                  />
                ) : null}
                {colors.length ? (
                  <FormikControl
                    control="select"
                    label="رنگ"
                    option={colors}
                    name="color_ids"
                  />
                ) : (
                  "colors"
                )}
                {/* <FormikControl
                  control="select"
                  label="گارانتی"
                  option={}
                  name="guarantee_ids"
                />  */}
                <FormikControl
                  control="textArea"
                  type="type"
                  name="descriptions"
                  placeholder="توضیحات"
                />
                <FormikControl
                  control="addFile"
                  formik={form}
                  label="تصویر"
                  name="image"
                  placeholder="📂 برای انتخاب تصویر اینجا کلیک کنید"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="alt_image"
                  placeholder="توضیح تصویر"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="keywords"
                  placeholder=" تگ ها"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="stock"
                  title="موجود"
                  placeholder="موجودی (تعداد)"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="discount"
                  title="تخفیف"
                  placeholder="درصد تخفیف"
                />
                <div className=" text-center pt-4">
                  <SubmitBtn id={reInitialize.id} />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
