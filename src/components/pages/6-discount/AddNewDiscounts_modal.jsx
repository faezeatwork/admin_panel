import React, { useState } from "react";
import { AddItem_btn } from "../../general_compo/add_or_edit_product/AddItem_btn";
import { Form, Formik } from "formik";
import { FormikControl } from "../../formik/FormikControl_AddItems";
import { SubmitBtn } from "../../formik/SubmitBtn";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "./FormikHelper_discounts";
import { getAllTitlesOfProducts } from "../../../services/CRUD_categoryService";
import { useEffect } from "react";
import "animate.css";
import { NavLink, useLocation } from "react-router-dom";
import moment from "jalali-moment";

export const AddNewDiscounts_modal = ({ discountToEdit }) => {
  const [titlesOfProducts, setTitlesOfProducts] = useState([]);
  const [chips_productTitles, setChips_productTitles] = useState([]);
  const [reInitialize, setReInitialize] = useState([]);

  useEffect(() => {
    if (discountToEdit) {
      setReInitialize({
        ...discountToEdit,
        expire_at: moment(discountToEdit.expire_at)
          .locale("fa")
          .format("YYYY/M/D"),
        for_all: discountToEdit.for_all ? true : false,
        product_ids: "",
        // product_ids: discountToEdit.product_ids?.map((p) => p.id).join("-"),
      });
    }
  }, [discountToEdit]);

  const handleGetProduct_ids = async () => {
    const res = await getAllTitlesOfProducts();

    if (res.status == 200) {
      setTitlesOfProducts(
        res.data.data.map((d) => {
          return {
            id: d.id,
            value: d.title,
          };
        })
      );
    }
  };

  useEffect(() => {
    handleGetProduct_ids();
  }, []);

  //==================================================================
  const handleSetProductSelectBox = (formik) => {
    return (
      <FormikControl
        control="multiSelect"
        label="برای"
        option={titlesOfProducts}
        name="product_ids"
        chips={chips_productTitles}
        setChips={setChips_productTitles}
        addBtnOption={true}
        customAnimatedClass="animate__animated animate__headShake"
        // addBtnPath="/colour-management"
        // selectedItems={selectedTitlesOfProd}
      />
    );
  };
  //===================== 📍 handle reset form ==========================
  const handleResetForm = () => {
    document.getElementById("formOfAddDiscounts").reset();
  };

  //====================== 📍 start main return =========================
  return (
    <div>
      {/* <!----- Button trigger modal ➕icon -----> */}
      <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <NavLink to={"/discount-management/add-edit-discount"}>
          <AddItem_btn />
        </NavLink>
      </span>

      {/* <!----------------- Modal ---------------> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content animate__animated animate__pulse">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h5 className="modal-title w-100 mx-5" id="staticBackdropLabel">
                {Object.keys(discountToEdit).length == 0
                  ? " افزودن کد تخفیف"
                  : `${discountToEdit.title}`}
              </h5>
              <NavLink to={"/discount-management"} className="ps-4">
                <button
                  id="btn-close-modal"
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => handleResetForm()}
                ></button>
              </NavLink>
            </div>

            <div className="modal-body">
              <Formik
                initialValues={reInitialize || initialValues}
                onSubmit={(values, action) =>
                  onSubmit(values, action, discountToEdit)
                }
                validationSchema={validationSchema}
                enableReinitialize
              >
                {(formik) => {
                  return (
                    <Form id="formOfAddDiscounts">
                      <FormikControl
                        control="input"
                        type="text"
                        name="title"
                        placeholder="عنوان"
                      />
                      <FormikControl
                        control="input"
                        type="text"
                        name="code"
                        placeholder="کد تخفیف"
                      />
                      <FormikControl
                        control="input"
                        type="number"
                        name="percent"
                        placeholder="درصد تخفیف"
                      />

                      <FormikControl
                        control="persianDate"
                        formik={formik}
                        name="expire_at"
                        label="تاریخ انقضاء"
                        yearsLimit={{ from: 2, to: 10 }}
                      />

                      <FormikControl
                        control="checkbox"
                        name="for_all"
                        label="برای همه"
                        customClass="text-center"
                      />
                      {!formik.values.for_all
                        ? handleSetProductSelectBox(formik)
                        : null}
                      <div className="text-center">
                        <SubmitBtn id={discountToEdit.id} />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
