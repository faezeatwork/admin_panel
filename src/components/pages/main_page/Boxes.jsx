import React from "react";
import { BoxControl } from "./BoxControl";

export const Boxes = () => {
  return (
    <div className="p-3 row">
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="today_cart_of_mainPage"
        />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="today_other_orders_of_mainPage"
        />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="today_orders_of_mainPage"
        />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="total_of_mainPage"
        />
      </div>
    </div>
  );
};
