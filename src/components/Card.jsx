import React from "react";

export const Card = (props) => {
  const { supply, title, desc, num_last_week, num_last_month, backGround } =
    props;
  return (
    <div className="">
      <div className="mt-2 box">
        <div
          className={`pointer p-3 rounded-top box1 ${backGround} d-flex justify-content-between`}
        >
          <div>
            <div>{supply}</div>
            <div>{title}</div>
            <div>{desc}</div>
          </div>
          <div className=" ms-4 mt-3 icon d-flex justify-content-center rounded-circle align-items-center">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>

        <div className={`pointer p-3 mt-2 rounded-bottom box1 box2 ${backGround}`}>
          <div>{num_last_week}</div>
          <div>{num_last_month}</div>
        </div>
      </div>
    </div>
  );
};
