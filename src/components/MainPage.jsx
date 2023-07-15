import React from "react";
import { BoxControl } from "./BoxControl";
import { TableOfProducts } from "./TableOfProducts";
import { Boxes } from "./Boxes";

export const MainPage = () => {
  return (
    <div className="vh-100">
      <Boxes />
      <TableOfProducts />

      <div className="col-12"></div>
    </div>
  );
};
