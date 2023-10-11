import React, { useEffect } from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { getBrandsService } from "../../../services/CRUD_categoryService";
import { useState } from "react";
import { Reusable_table } from "../../general_compo/Reusable_table";

export const BrandsManagement = () => {
  const [data, setData] = useState([]);

  //================== 📍هدرهای جدول  ================
  const header_brandsTable = [
    { field: "id", title: "id" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },
    { field: "logo", title: "تصویر" },
  ];

  //=============  📍Get all brands =====================
  const handleGetBrands = async () => {
    const res = await getBrandsService();
    try {
      if (res.status == 200) {
        console.log(res.data.data);
        setData(res.data.data);
      }
    } catch {}
  };
  useEffect(() => {
    handleGetBrands();
  }, []);

  //======================  return  =======================
  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت برندها" />
        {/* <Reusable_table
          nameOfColumn={header_brandsTable}
          dataOfRows={data}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          show_subGroup={true}
          show_addButton={true}
          go_where="/adding-items"
          having_searchBox={true}
          //additionField={additionField}
          show_subset_icon={true}
          titleName="original_name"
        /> */}
      </div>
    </>
  );
};
