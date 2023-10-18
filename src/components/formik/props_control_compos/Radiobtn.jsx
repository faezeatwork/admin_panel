import { FastField } from "formik";
import React from "react";

export const Radiobtn = () => {
  return (
    <div>
      <FastField>
        {() => (
          <>
            <div class="control d-flex align-items-center">
              <span>بر حسب : </span>
              <label class="radio ps-1">
                سال
                <input type="radio" name="answer" />
              </label>
              <label class="radio">
                ماه
                <input type="radio" name="answer" />
              </label>
            </div>
          </>
        )}
      </FastField>
    </div>
  );
};
