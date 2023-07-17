import React from "react";
import { TableOfProducts } from "./TableOfProducts";
import { Boxes } from "./Boxes";

export const MainPage = () => {
  return (
    <div className="main_page" id="mainPage">
      <Boxes />
      <TableOfProducts />
    </div>
  );
};
