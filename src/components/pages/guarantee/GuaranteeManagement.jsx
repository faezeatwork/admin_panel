import React from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { getAllGuaranteeService } from "../../../services/CRUD_categoryService";
import { useState } from "react";
import swal from "sweetalert";
import { Reusable_table } from "../../general_compo/reusable_table/Reusable_table";
import { useEffect } from "react";
import { Operations_guarantee } from "./Operations_guarantee";
import { AddNewGuarantee } from "./add_or_edit_guarantee/AddNewGuarantee";

export const GuaranteeManagement = () => {
  const [data, setData] = useState([]);

  //================== 📍هدرهای جدول  ======================
  const header_guaranteeTable = [
    { field: "id", title: "id" },
    { field: "title", title: "عنوان" },
    { field: "descriptions", title: "توضیحات" },
    { field: "length", title: "مدت گارانتی" },
    { field: "length_unit", title: "واحد" },
  ];
  //=============  📍Get all guarantees =====================
  const handleGetAllGuarantee = async () => {
    const res = await getAllGuaranteeService();
    if (res.status == 200) {
      setData(res.data.data);
    }
  };
  useEffect(() => {
    handleGetAllGuarantee();
  }, []);

  //=============  📍additionField =========================
  const additionField = [
    {
      title: "عملیات",
      elements: () => {
        return <Operations_guarantee />;
      },
    },
  ];
  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت گارانتی ها" />
        <Reusable_table
          nameOfColumn={header_guaranteeTable}
          dataOfRows={data}
          placeholder_searchBox="عنوان را جستجو کنید"
          go_where="/adding-guarantee"
          show_subGroup={true}
          show_addButton={false}
          having_searchBox={true}
          additionField={additionField}
          show_subset_icon={true}
          titleName="original_name"
        />
        <div className="text-center ">
          <AddNewGuarantee />
        </div>
      </div>
    </>
  );
};
