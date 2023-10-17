import { httpService } from "./httpService";

//==================== گرفتن دسته ها ==============================
export const getCategoriesService = (id = null) => {
  return httpService(`api/admin/categories${id ? `?parent=${id}` : ""}`, "get");
};

//==================== ساختن دیتا =================================
export const createNewCategoryService = (data) => {
  if (data.image) {
    let formdata = new FormData();
    formdata.append("parent_id", data.parent_id);
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("image", data.image);
    formdata.append("is_active", data.is_active);
    formdata.append("show_in_menu", data.show_in_menu);
    data = formdata;
  }
  return httpService("api/admin/categories", "post", data);
};
//============== گرفتن تک دیتا با آی دی =========================
export const getSingleCategoryService = (id) => {
  return httpService(`api/admin/categories/${id}`, "get");
};

//===================== حذف دیتا ================================
export const deleteCategoryService = (id) => {
  return httpService(`api/admin/categories/${id}`, "delete");
};

//=================== ویرایش دیتا ===============================
export const updateCategoryService = (data, id) => {
  return httpService(`api/admin/categories/${id}`, "put", data);
};

//============= گرفتن ویژگی های یک دسته ========================
export const getAttributesService = (categoryId) => {
  return httpService(`api/admin/categories/${categoryId}/attributes`, "get");
};

//======= ایجاد یک ویژگی جدید برای یک دسته=====================
export const createNewAttributeService = (categoryId, data) => {
  return httpService(
    `api/admin/categories/${categoryId}/attributes`,
    "post",
    (data = {
      title: `${data.attributeTitle}`,
      unit: `${data.attributeUnit}`,
      in_filter: `${data.switchShowFilter ? 1 : 0}`,
    })
  );
};

//============ حذف یک ویژگی از محصول =========================
export const deleteAttributeService = (id) => {
  return httpService(`api/admin/categories/attributes/${id}`, "delete");
};

//=========== ویرایش یک ویژگی از محصول =======================
export const updateAttributeService = (id, data) => {
  return httpService(
    `api/admin/categories/attributes/${id}`,
    "put",
    (data = {
      title: `${data.attributeTitle}`,
      unit: `${data.attributeUnit}`,
      in_filter: `${data.switchShowFilter ? 1 : 0}`,
    })
  );
};

//==============  گرفتن همه ی برندها =========================
export const getAllBrandsService = () => {
  return httpService("api/admin/brands", "get");
};

//================  حذف یک برند  =============================
export const deleteBrandService = (id) => {
  return httpService(`api/admin/brands/${id}`, "delete");
};

//=============== ایجاد یک برند جدید ========================
export const createNewBrandService = (data) => {
  if (data.logo) {
    console.log(data.logo);
    let formData = new FormData();
    formData.append("original_name", data.original_name);
    formData.append("persian_name", data.persian_name);
    formData.append("descriptions", data.descriptions);
    formData.append("logo", data.logo);
    data = formData;
  }
  return httpService("api/admin/brands", "post", data);
};
