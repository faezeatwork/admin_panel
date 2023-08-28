import React from "react";
import { Boxes } from "./Boxes";
import {
  headers_productTable,
  rows_data_productTable,
  testfilter,
} from "../../layouts/local_DB/local_DataBase";
import swal from "sweetalert";
import { useEffect } from "react";
import { useState } from "react";
import { getcategoreisService } from "../../../services/category";
import { BarChart } from "../../../charts/BarChart";
export const MainPage = () => {
  return (
    <div className="ps-2 " id="mainPage">
      <Boxes />
      <div className="row">
        <div className="table_mainPage  col-12 col-lg-6">
          {/* <ReusableTable
            nameOfColumn={headers_productTable}
            dataOfRows={rows_data_productTable}
            placeholder_searchBox="قسمتی از عنوان را وارد کنید"
            show_addButton={false}
            operation={false}
            having_searchBox={false}
          /> */}
        </div>

        <BarChart />
      </div>
    </div>
  );
};
