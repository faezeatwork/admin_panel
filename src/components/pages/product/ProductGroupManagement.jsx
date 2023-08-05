import React from "react";
import {
  headers_productTable,
  rows_data_productTable,
} from "../../layouts/local_DB/local_DataBase";
import { UpperPartPages } from "../../general_compo/UpperPartPages";
import { ReusableTable } from "../../general_compo/ReusableTable";

export const ProductGroupManagement = () => {
  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت گروه محصولات" />
        <ReusableTable
          nameOfColumn={headers_productTable}
          dataOfRows={rows_data_productTable}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          show_addButton={true}
          go_where="/adding-items"
          operation={true}
          having_searchBox={true}
        />
      </div>
    </>
  );
};
