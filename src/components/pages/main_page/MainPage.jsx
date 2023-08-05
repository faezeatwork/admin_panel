import React, { useEffect } from "react";
import { TableOfProducts } from "./TableOfProducts";
import { Boxes } from "./Boxes";
import { BarChart } from "../../charts/BarChart";
import { ReusableTable } from "../../general_compo/ReusableTable";
import {
  headers_productTable,
  rows_data_productTable,
} from "../../layouts/local_DB/local_DataBase";

export const MainPage = () => {
  return (
    <div className="ps-2 " id="mainPage">
      <Boxes />
      <div className="row">
        <div className="table_mainPage  col-12 col-lg-6">
          <ReusableTable
            nameOfColumn={headers_productTable}
            dataOfRows={rows_data_productTable}
            placeholder_searchBox="قسمتی از عنوان را وارد کنید"
            show_addButton={false}
            operation={false}
            having_searchBox={false}
          />
        </div>
        <BarChart />
      </div>
    </div>
  );
};
