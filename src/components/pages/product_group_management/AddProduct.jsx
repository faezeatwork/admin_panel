import React from "react";

export const AddProduct = () => {
  return (
    <div className="addProduct w-100 vh-100 position-relative">
      <div className="header_addProduct p-3 d-flex justify-content-between">
        <h5>افزودن دسته محصولات</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div className="container">
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
              >
                <option selected>Open this select menu</option>
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
                class="form-control"
                placeholder="Recipient's username"
                //   aria-label="Recipient's username"
                //   aria-describedby="basic-addon2"
              />
            </div>
          </div>
          {/* ============ توضیحات ============= */}
          <div className="col-lg-8">
            <div class="input-group mb-3 ">
              <span class="input-group-text titleSpan">توضیحات</span>
              <textarea
                placeholder="توضیحات"
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
          {/* ============ تصویر =============== */}
          <div className="col-lg-8">
            <div class="input-group mb-3 ">
              <span class="input-group-text titleSpan">تصویر</span>
              <input
                type="text"
                class="form-control"
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
              for="checkBoxSave_addProduct"
            >
              وضعیت فعال
            </label>
          </div>
          <button type="button" className="btn btn-primary m-3">
            ذخیره
          </button>
        </div>
      </div>

      <button className="btn btn-secondary exit_btn_addProduct">انصراف</button>
    </div>
  );
};
