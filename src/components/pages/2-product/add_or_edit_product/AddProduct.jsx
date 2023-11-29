import React from "react";
import { PrevPageBtn } from "../../../general_compo/reusable_operations/PrevPageBtn";
import { FastField, Form, Formik } from "formik";
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
  handleGetColors,
  handleGetGuarantees,
  handleGetMainCategories,
  handleGetParentCategories,
} from "./Get_Items_dropdowns";
import { Chips } from "../../../general_compo/spinners&chips/Chips";

export const AddProduct = () => {
  const [parentsCategories, setParentsCategories] = useState([]); // نگهداری همه محصولات والد - اولین محصولاتی که والدی ندارند
  const [mainCategories, setMainCategories] = useState([]); // نگهداری همه دسته های اصلی
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [guarantee, setGuarantee] = useState([]);
  const [reInitialize, setReInitialize] = useState([]);
  const [idOfParent, setIdOfParent] = useState("");
  const [chips, setChips] = useState([]);
  const [chips_brand, setChips_brand] = useState([]);
  const [chips_color, setChips_color] = useState([]);
  const [chips_guarantee, setChips_guarantee] = useState([]);
  const [reChips, setReChips] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setReChips(location.state?.rowData?.categories);
  }, []);

  useEffect(() => {
    setReInitialize({
      category_ids: location.state.rowData?.categories
        .map((item) => item.id)
        .join(" - "),
      color_ids: location.state.rowData?.colors[0]?.id,
      guarantee_ids: location.state.rowData?.guarantees[0]?.id,
      ...location.state.rowData,
    });
  }, [location]);

  useEffect(() => {
    handleGetParentCategories(setParentsCategories); //محصولات والد-که والدی ندارند- رو میگیره
    handleGetColors(setColors); //رنگ ها رو میگیره
    handleGetBrands(setBrands); // برندها رو میگیره
    handleGetGuarantees(setGuarantee);
  }, []);
  // ================ 📍گرفتن والدها ===================
  useEffect(() => {
    setMainCategories(null);
    handleGetMainCategories(idOfParent, setMainCategories);
  }, [idOfParent, parentsCategories]);

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
            setIdOfParent(form.values.parent_id);     
            return (
              <Form>
                <div onChange={() => setChips([])}>
                  <FormikControl
                    control="select"
                    label="دسته والد"
                    option={parentsCategories}
                    name="parent_id"
                    stateOfData={setIdOfParent}
                  />
                </div>
                {idOfParent && mainCategories?.length > 0 ? (
                  <FormikControl
                    control="multiSelect"
                    label="دسته اصلی"
                    option={mainCategories}
                    name="category_ids"
                    chips={chips}
                    setChips={setChips}
                  />
                ) : null}
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
                <FormikControl
                  control="select"
                  label="برند"
                  option={brands}
                  name="brand_id"
                />
                <FormikControl
                  control="multiSelect"
                  label="رنگ"
                  option={colors}
                  name="color_ids"
                  chips={chips_color}
                  setChips={setChips_color}
                />
                <FormikControl
                  control="multiSelect"
                  label="گارانتی"
                  option={guarantee}
                  name="guarantee_ids"
                  chips={chips_guarantee}
                  setChips={setChips_guarantee}
                />
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
