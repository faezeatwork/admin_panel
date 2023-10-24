import { apiPath, httpService } from "./httpService";

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

//===================== حذف دیتا =================================
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

//============ حذف یک ویژگی از محصول ==========================
export const deleteAttributeService = (id) => {
  return httpService(`api/admin/categories/attributes/${id}`, "delete");
};

//=========== ویرایش یک ویژگی از محصول ========================
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

//==============  گرفتن همه ی برندها ==========================
export const getAllBrandsService = () => {
  return httpService("api/admin/brands", "get");
};

//================  حذف یک برند  ==============================
export const deleteBrandService = (id) => {
  return httpService(`api/admin/brands/${id}`, "delete");
};

//=============== ایجاد یک برند جدید =========================
export const createNewBrandService = (data) => {
  // console.log(data);
  if (data.logo) {
    let formData = new FormData();
    formData.append("original_name", data.original_name);
    formData.append("persian_name", data.persian_name);
    formData.append("descriptions", data.descriptions);
    formData.append("logo", data.logo);
    data = formData;
  }
  return httpService("api/admin/brands", "post", data);
};

//===============  ویرایش یک برند موجود  ====================
export const updateBrandService = (id, data) => {
  if (data.logo) {
    let formData = new FormData();
    formData.append("original_name", data.original_name);
    formData.append("persian_name", data.persian_name);
    formData.append("descriptions", data.descriptions);
    formData.append("logo", data.logo);
    data = formData;
  }
  return httpService(`api/admin/brands/${id}`, "post", data);
};

//=============== گرفتن همه گارانتی ها  ======================
export const getAllGuaranteeService = () => {
  return httpService("api/admin/guarantees", "get");
};

//=============== اضافه کردن یک گارانتی جدید  ================
export const createNewGuaranteeService = (data) => {
  //console.log(data);
  return httpService("api/admin/guarantees", "post", data);
};

//============== ویرایش یک گارانتی  ===========================
export const updateGuaranteeService = (data, id) => {
  return httpService(`api/admin/guarantees/${id}`, "put", data);
};

//================ حذف یک گارانتی  ============================
export const deleteGuaranteeService = (id) => {
  return httpService(`api/admin/guarantees/${id}`, "delete");
};

//================= گرفتن همه رنگ ها  ========================
export const getAllColorService = () => {
  return httpService("api/admin/colors", "get");
};

//================ اضافه کردن یک رنگ جدید  ==================
export const createNewColorService = (data) => {
  return httpService("api/admin/colors", "post", data);
};

//================  ویرایش یک رنگ  ===========================
export const updateColorService = (data, id) => {
  return httpService(`api/admin/colors/${id}`, "put", data);
};

//=================== حذف یک رنگ  ============================
export const deleteColorService = (id) => {
  return httpService(`api/admin/colors/${id}`, "delete");
};
