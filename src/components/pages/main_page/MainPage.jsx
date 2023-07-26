import React, { useEffect } from "react";
import { TableOfProducts } from "./TableOfProducts";
import { Boxes } from "./Boxes";
import { mainPage_chart } from "./mainPage_chart";

export const MainPage = () => {
  return (
    <div className="main_page ps-2 " id="mainPage">
      <Boxes />
      <TableOfProducts />
    </div>
  );
};
