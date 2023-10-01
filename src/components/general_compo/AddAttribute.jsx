import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FormControl } from "../pages/authorization/FormControl_Auth";
import { SubmitBtn } from "../formik/SubmitBtn";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import {
  createNewAttributeService,
  getAttributesService,
} from "../../services/CRUD_categoryService";
import swal from "sweetalert";
import { Reusable_table } from "./Reusable_table";
import { PrevPageBtn } from "./PrevPageBtn";

export const headers_attributesTable = [
  { field: "id", title: "id" },
  { field: "title", title: "عنوان محصول" },
  { field: "unit", title: "واحد" },
  { field: "in_filter", title: "نمایش در فیلتر" },
];

export const AddAttribute = () => {
  const location = useLocation();
  const [attData, setAttData] = useState([]);
  const [forceRender, setForceRender] = useState(1);

  // useEffect(() => {
  //   console.log(attData);
  // }, [attData]);

  const handleGetAttributes = async () => {
    const res = await getAttributesService(location.state.categoryId);
    try {
      // console.log(res);
      setAttData(res.data.data);
    } catch {}
  };

  useEffect(() => {
    handleGetAttributes();
  }, []);

  const initialValues = {
    attributeTitle: "",
    attributeUnit: "",
    switchShowFilter: 0,
  };

  const onSubmit = async (values, actions) => {
    const res = await createNewAttributeService(
      location.state?.categoryId,
      values
    );
    try {
      if (res.status == 201) {
        swal("", res.data.message, "success");
        actions.resetForm();
      }
    } catch {}
  };

  const validationSchema = Yup.object({
    attributeTitle: Yup.string().required("لطفا این قسمت را پر کنید"),
    attributeUnit: Yup.string().required("لطفا این قسمت را پر کنید"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, form) => onSubmit(values, form)}
          validationSchema={validationSchema}
        >
          <Form>
            <PrevPageBtn
              customStyle="fs-2 text-start text-secondary"
              returnTitle={<i class="fa-solid fa-xmark"></i>}
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
        />
      </div>
    </div>
  );
};
