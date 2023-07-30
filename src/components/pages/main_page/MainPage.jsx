import React, { useEffect } from "react";
import { TableOfProducts } from "./TableOfProducts";
import { Boxes } from "./Boxes";
import { BarChart } from "../../charts/BarChart";

export const MainPage = () => {
  return (
    <div className="main_page ps-2 " id="mainPage">
      <Boxes />
      <div className="row">
        <TableOfProducts />
        <BarChart />
      </div>
    </div>
  );
};
