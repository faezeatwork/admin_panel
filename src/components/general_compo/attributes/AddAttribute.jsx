import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FormControl } from "../../pages/authorization/FormControl_Auth";
import { SubmitBtn } from "../../formik/SubmitBtn";
import { useLocation } from "react-router-dom";
import {
  getAttributesService,
  getOneAttributeService,
} from "../../../services/CRUD_categoryService";
import { Reusable_table } from "../Reusable_table";
import { PrevPageBtn } from "../reusable_operations/PrevPageBtn";
import { Operations_attributes } from "./Operations_attributes";
import {
  headers_attributesTable,
  initialValues,
  onSubmit,
  validationSchema,
} from "./FormikHelper_Attributes";

export const AddAttribute = () => {
  const location = useLocation();
  const [attData, setAttData] = useState([]);
  const [oneAttData, setOneAttData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);

  //=====📍گرفتن ویژگی های یک محصول برای نشاندن در جدول ========
  const handleGetAttributes = async () => {
    const res = await getAttributesService(location.state?.categoryId);
    try {
      setAttData(res.data.data);
    } catch {}
  };

  useEffect(() => {
    handleGetAttributes();
  }, []);

  //=========== 📍 گرفتن آیتم های یک ویژگی ================
  const handleGetOneAttribute = async (id) => {
    const res = await getOneAttributeService(id);
    try {
      console.log(res);
      setOneAttData(res.data.data);
    } catch (error) {}
  };

  //=============================================

  useEffect(() => {
    console.log(oneAttData);
    setReInitialValues({
      attributeTitle: oneAttData.title || "",
      attributeUnit: oneAttData.unit || "",
      switchShowFilter: oneAttData.in_filter ? true : false,
    });
    console.log(reInitialValues);
  }, [attData, oneAttData]);

  // ========== 📍additionField for add attributes ==========
  const additionField = [
    {
      title: "عملیات",
      elements: (rowData) => (
        <Operations_attributes
          rowData={rowData}
          data={attData}
          setData={setAttData}
          handleGetOneAttribute={handleGetOneAttribute}
        />
      ),
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <Formik
          initialValues={initialValues || reInitialValues || ""}
          onSubmit={(values, form) =>
            onSubmit(values, form, location, setAttData)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <PrevPageBtn
              customStyle="fs-2 text-start text-secondary"
              returnTitle={<i className="fa-solid fa-xmark"></i>}
            />
            <div className="row ">
              <div className=" col-md-6 col-lg-4 my-1">
                <FormControl
                  control="input"
                  type="text"
                  name="attributeTitle"
                  placeholder="عنوان ویژگی جدید"
                  errMs="لطفا این قسمت را پر کنید"
                />
              </div>
              <div className="col-md-6 col-lg-4 my-1">
                <FormControl
                  control="input"
                  type="text"
                  name="attributeUnit"
                  placeholder="واحد ویژگی جدید"
                  errMs="لطفا این قسمت را پر کنید"
                />
              </div>
              <div className="col-md-6 col-lg-3 my-1 d-flex justify-content-around">
                <FormControl
                  control="switch"
                  label="نمایش در فیلتر"
                  name="switchShowFilter"
                />
                <SubmitBtn />
              </div>
            </div>
          </Form>
        </Formik>
        <hr />
        <Reusable_table
          nameOfColumn={headers_attributesTable}
          dataOfRows={attData}
          having_searchBox={true}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          additionField={additionField}
          show_subset_icon={false}
        />
      </div>
    </div>
  );
};
