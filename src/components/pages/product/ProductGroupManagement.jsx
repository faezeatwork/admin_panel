import React, { useEffect } from "react";
import { UpperPartPages } from "../../general_compo/UpperPartPages";
import { getcategoreisService } from "../../../services/category";
import { useState } from "react";
import swal from "sweetalert";
import { Reusable_table } from "../../general_compo/Reusable_table";



export const headers_productTable = [
  { field: "id", title: "id" },
  { field: "title", title: "عنوان محصول" },
  { field: "parent_id", title: "والد" },
  { field: "created_at", title: "تاریخ" },

];


export const ProductGroupManagement = () => {
  const [data, setData] = useState([]);


  const handleGetCategoreis = async () => {
    const res = await getcategoreisService();
    try {
      if (res.status == 200) {
        setData(res.data.data);
      } else {
        swal("خطا!", "مشکلی رخ داده است");
      }
    } catch {
      swal("خطا!", "مشکلی رخ داده است");
      console.log("error catch");
    }
  };

  useEffect(() => {
    handleGetCategoreis(setData);
  }, []);

  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت گروه محصولات" />
        <Reusable_table
          nameOfColumn={headers_productTable}
          dataOfRows={data}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          show_addButton={true}
          go_where="/adding-items"
          operation={true}
          having_searchBox={true}
          show_menu={true}
        />
      </div>
    </>
  );
};
