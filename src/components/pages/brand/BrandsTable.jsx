import React from "react";
import { useState } from "react";

export const BrandsTable = () => {
  const [data, setData] = useState([]);

  //================== 📍هدرهای جدول  ================
  const header_brandsTable = [
    { field: "id", title: "id" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },
    { field: "logo", title: "تصویر" },
  ];

  return (
    <div>
      {/* <Reusable_table
        nameOfColumn={header_brandsTable}
        dataOfRows={data}
        placeholder_searchBox="قسمتی از عنوان را وارد کنید"
        show_subGroup={true}
        show_addButton={true}
        go_where="/adding-items"
        having_searchBox={true}
        additionField={additionField}
        show_subset_icon={true}
      /> */}
    </div>
  );
};
