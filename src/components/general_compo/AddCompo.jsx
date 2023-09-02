import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FormikAddItems } from "../formik/FormikAddItems";

export const AddCompo = (props) => {
  const { title, exit_icon, hidden_compo ,params} = props;
console.log(params);
  const handleHideCompo = () => {
    document
      .getElementById("compo_for_add_items")
      .classList.remove("show_screen");

    document
      .getElementById("compo_for_add_items")
      .classList.add("hidden_screen");
  };

  return (
    <div
      className={`addProduct position-relative ${hidden_compo ? "d-none" : ""}`}
      id="compo_for_add_items"
    >
      <div className="header_addProduct p-3 d-flex justify-content-between">
        <h5>{title}</h5>

        {/* ================  in icon ❌  ================ */}
        <NavLink to={exit_icon}>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => (hidden_compo ? handleHideCompo() : null)}
          ></button>
        </NavLink>
      </div>
      {/* ================  formik inputs  ================ */}
      <div className=" d-flex p-3 justify-content-center row">
        <div className=" col-lg-5">
          <FormikAddItems />
        </div>
      </div>
    </div>
  );
};
