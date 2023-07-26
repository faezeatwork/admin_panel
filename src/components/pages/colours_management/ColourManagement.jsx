import React from "react";
import { UpperPartPages } from "../UpperPartPages";
import { ReusableTable } from "../ReusableTable";
import { headers_colourTable, rows_data_colourTable } from "../../layouts/local_DB/local_DataBase";
import { AddProduct } from "../product_group_management/AddProduct";

export const ColourManagement = () => {
  return (
    <div className="main_page px-4 position-relative">
      <UpperPartPages title="مدیریت رنگ ها" />
      <ReusableTable
        nameOfColumn={headers_colourTable}
        dataOfRows={rows_data_colourTable}
        placeholder_searchBox="قسمتی از عنوان را وارد کنید"
        show_addButton={true}
        link_addButton="/add-colour"
        operation={true}
      />
      <div className="add_colour">
        <AddProduct/>
      </div>
    </div>
  );
};
