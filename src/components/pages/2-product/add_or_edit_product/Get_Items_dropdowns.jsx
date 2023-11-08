import {
  getAllBrandsService,
  getAllColorService,
  getCategoriesService,
} from "../../../../services/CRUD_categoryService";

//=========== 👇 گرفتن همه محصولات والد =============
export const handleGetCategories = async (setMainCategories) => {
  const res = await getCategoriesService();
  if (res.status == 200) {
    if (typeof res.data.data == "object") {
      for (const key in res.data.data) {
        setMainCategories((oldData) => [
          ...oldData,
          { id: res.data.data[key].id, value: res.data.data[key].title },
        ]);
      }
    } else {
      console.log("its not object");
    }
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
      console.log("its not object");
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
      console.log("its not object");
    }
  }
};

//in compo categories o barnds o colors ro migire
//baraye dropdown haye AddProduct
