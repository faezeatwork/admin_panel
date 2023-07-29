import React from "react";
import { NavLink } from "react-router-dom";

export const AddCompo = (props) => {
  const { title, exit_icon, hidden_compo } = props;

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
      className={`addProduct w-100 position-relative ${
        hidden_compo ? "d-none" : ""
      }`}
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

      <div className="">
        <div className="row p-3 d-flex align-items-center justify-content-center">
          {/* ============ دسته والد =========== */}
          <div className="col-lg-8">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">
                دسته والد
              </span>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Open this select menu</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          {/* ============  عنوان  ============= */}
          <div className="col-lg-8">
            <div className="input-group mb-3 ">
              <span className="input-group-text titleSpan" id="basic-addon2">
                عنوان
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                //   aria-label="Recipient's username"
                //   aria-describedby="basic-addon2"
              />
            </div>
          </div>
          {/* ============ توضیحات ============= */}
          <div className="col-lg-8">
            <div className="input-group mb-3 ">
              <span className="input-group-text titleSpan">توضیحات</span>
              <textarea
                placeholder="توضیحات"
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
          {/* ============ تصویر =============== */}
          <div className="col-lg-8">
            <div className="input-group mb-3 ">
              <span className="input-group-text titleSpan">تصویر</span>
              <input
                type="text"
                className="form-control"
                placeholder="برای انتخاب تصویر خود کلیک کنید."
              />
              <input type="file" className="choose_file" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="form-check form-switch d-flex justify-content-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkBoxSave_addProduct"
            />
            <label
              className="form-check-label pe-5"
              htmlFor="checkBoxSave_addProduct"
            >
              وضعیت فعال
            </label>
          </div>
          <button type="button" className="btn btn-primary m-3">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
};
