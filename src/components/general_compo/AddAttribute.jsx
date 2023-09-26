import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { FormControl } from "../pages/authorization/FormControl_Auth";
import { SubmitBtn } from "../formik/SubmitBtn";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const AddAttribute = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.categoryId);
  }, [location]);

  const handleGetAttributes = async () => {
    await axios.get("http://webcode.me").then((resp) => {
      console.log(resp.data);
    });
  };

  useEffect(() => {
    handleGetAttributes();
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <Formik>
          <Form>
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
              <div className="col-md-6 col-lg-4 my-1 d-flex justify-content-around">
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
      </div>
    </div>
  );
};
