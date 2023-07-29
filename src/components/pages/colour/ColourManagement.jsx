import React from "react";
import {
  headers_colourTable,
  rows_data_colourTable,
} from "../../layouts/local_DB/local_DataBase";
import { AddColour } from "./AddColour";
import { UpperPartPages } from "../../general_compo/UpperPartPages";
import { ReusableTable } from "../../general_compo/ReusableTable";

export const ColourManagement = () => {
  return (
    <div className="main_page px-4 position-relative">
      <UpperPartPages title="مدیریت رنگ ها" />
      <ReusableTable
        nameOfColumn={headers_colourTable}
        dataOfRows={rows_data_colourTable}
        placeholder_searchBox="قسمتی از عنوان را وارد کنید"
        show_addButton={true}
        operation={true}
        show_compo={true}
      />
      <div className="add_colour">
        <AddColour />
      </div>
    </div>
  );
};
