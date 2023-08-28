import React, { useEffect } from "react";
import { UpperPartPages } from "../../general_compo/UpperPartPages";
import { getcategoreisService } from "../../../services/category";
import { useState } from "react";
import swal from "sweetalert";
import { Reusable_table } from "../../general_compo/Reusable_table";
import { useParams } from "react-router-dom";
import { Operations_product } from "./table_additon/Operations_product";
import moment from "jalali-moment";

export const headers_productTable = [
  { field: "id", title: "id" },
  { field: "title", title: "عنوان محصول" },
  { field: "parent_id", title: "والد" },
];

export const ProductGroupManagement = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  const handleGetCategoreis = async () => {
    const res = await getcategoreisService(params.productId);

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
  }, [params]);

  const additionField = [
    {
      title: "تاریخ",
      elements: (data) =>
        moment(data.created_at).locale("fa").format("YYYY/M/D"),
    },
    {
      title: "عملیات",
      elements: (rowData) => <Operations_product rowData={rowData} />,
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => (
        <span className={rowData ? "text-success" : "text-danger"}>
          {rowData ? "هست" : "نیست"}
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت گروه محصولات" />
        {data.length ? (
          <Reusable_table
            nameOfColumn={headers_productTable}
            dataOfRows={data}
            placeholder_searchBox="قسمتی از عنوان را وارد کنید"
            show_addButton={true}
            go_where="/adding-items"
            having_searchBox={true}
            additionField={additionField}
          />
        ) : (
          <h3 className="text-center text-danger ">موردی یافت نشد</h3>
        )}
      </div>
    </>
  );
};
