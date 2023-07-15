import React from "react";
import { BoxControl } from "./BoxControl";

export const Boxes = () => {
  return (
    <div className="p-3 row">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="today_cart"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="today_other_orders"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="today_orders"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <BoxControl
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13 در هفته گذشته"
          num_last_month="18 در ماه گذشته"
          backGround="total"
        />
      </div>
    </div>
  );
};
