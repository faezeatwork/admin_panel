import React, { useEffect } from "react";
import { UpperPartPages } from "../../general_compo/UpperPartPages";
import { getCategoriesService } from "../../../services/category";
import { useState } from "react";
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
  // const [forceRender, setForceRender] = useState(0); //برای اینکه هرجا خواستیم جدول رو رندر مجدد کنیم

  const handleGetCategories = async () => {
    const res = await getCategoriesService(params.productId);
    try {
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch {}
  };

  useEffect(() => {
    handleGetCategories(setData);
    console.log(params);
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
        <Reusable_table
          nameOfColumn={headers_productTable}
          dataOfRows={data}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          show_addButton={true}
          go_where="/adding-items"
          having_searchBox={true}
          additionField={additionField}
          params={params}
        />
      </div>
    </>
  );
};
