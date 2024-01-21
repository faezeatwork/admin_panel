<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
import {
  getAllBrandsService,
  getAllColorService,
  getAllGuaranteeService,
  getCategoriesService,
} from "../../../../services/CRUD_categoryService";

//=========== 👇 گرفتن همه محصولات والد =============
export const handleGetParentCategories = async (setParentsCategories) => {
  const res = await getCategoriesService();
  if (res.status == 200) {
    if (typeof res.data.data == "object") {
      for (const key in res.data.data) {
        setParentsCategories((oldData) => [
          ...oldData,
          { id: res.data.data[key].id, value: res.data.data[key].title },
        ]);
      }
    } else {
      console.log("its not object");
    }
  }
};

//=============== 👇 گرفتن دسته های اصلی ===========
export const handleGetMainCategories = async (id = "0", setMainCategories) => {
  const res = await getCategoriesService(id);

  if (res.status == 200) {
    setMainCategories(
      res.data.data.map((d) => {
        return { id: d.id, value: d.title };
      })
    );
  }
};
//=============== 👇 گرفتن رنگ ها ===================
export const handleGetColors = async (setColors) => {
  const res = await getAllColorService();
  if (res.status == 200) {
    if (typeof res.data.data == "object") {
      for (const key in res.data.data) {
        setColors((oldData) => [
          ...oldData,
          { id: res.data.data[key].id, value: res.data.data[key].title },
        ]);
      }
    } else {
    }
  }
};

// ============== 👇 گرفتن برند ها ===================
export const handleGetBrands = async (setBrands) => {
  const res = await getAllBrandsService();
  if (res.status == 200) {
    if (typeof res.data.data == "object") {
      for (const key in res.data.data) {
        setBrands((oldData) => [
          ...oldData,
          {
            id: res.data.data[key].id,
            value: res.data.data[key].persian_name,
          },
        ]);
      }
    } else {
    }
  }
};

// ============== 👇 گرفتن گارانتی ها ===================
export const handleGetGuarantees = async (setGuarantee) => {
  const res = await getAllGuaranteeService();
  if (res.status == 200) {
    setGuarantee(
      res.data.data.map((d) => {
        return {
          id: d.id,
          value: d.title,
        };
      })
    );
  }
};
// ========= 👇 handle change daste asli va chips =============
<<<<<<< HEAD
export const handleOnChange = (thisId, form, option, chips, setChips, name) => {


  const valueOfCat = option //value of chips
    .filter((a) => a.id == thisId)
    .map((a) => a.value);

  setChips((chips = []) => {
    const newData = [
      ...chips?.filter((chip) => chip.id != thisId), //except chips that selected previously :)
      {
        id: thisId,
        value:valueOfCat,
      },
    ];
   const selectedIds = newData.map((nd) => nd.id);
  form.setFieldValue(name, selectedIds.join("-"));
  return newData;
});
};


//
//
//
//
=======
export const handleOnChange = (e, form, option, setChips, name) => {
  const valueOfCat = option //value of chips
    .filter((a) => a.id == e.target.value)
    .map((a) => a.value);

  setChips((chips) => {
    const newData = [
      ...chips?.filter((chip) => chip.id != e.target.value), //except chips that selected previously :)
      {
        id: e.target.value,
        value: valueOfCat[0],
      },
    ];
    const selectedIds = newData.map((nd) => nd.id);
    console.log(selectedIds);
    form.setFieldValue(name, selectedIds.join("-"));
    return newData;
  });
};

>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
//in compo categories o barnds o colors ro migire
//baraye dropdown haye <AddProduct/>
