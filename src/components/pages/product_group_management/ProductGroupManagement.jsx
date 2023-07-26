import React, { useEffect } from "react";
import { ReusableTable } from "../ReusableTable";
import { NavLink } from "react-router-dom";
import { UpperPartPages } from "../UpperPartPages";
import { headers_productTable, rows_data_productTable } from "../../layouts/local_DB/local_DataBase";


export const ProductGroupManagement = () => {
  return (
    <>
      <div className="main_page px-4 productGroupManagement">
        <UpperPartPages title="مدیریت گروه محصولات" />
        <ReusableTable
          nameOfColumn={headers_productTable}
          dataOfRows={rows_data_productTable}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          show_addButton={true}
          link_addButton="/add-product"
          operation={true}
        />
      </div>
    </>
  );
};
