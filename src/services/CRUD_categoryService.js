import { httpService } from "./httpService";

//==================== گرفتن دیتا ====================
export const getCategoriesService = (id = null) => {
  return httpService(`admin/categories${id ? `?parent=${id}` : ""}`, "get");
};
//==================== ساختن دیتا ====================
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

  return httpService("admin/categories", "post", data);
};
//============== گرفتن تک دیتا با آی دی =============
export const getSingleCategoryService = (id) => {
  return httpService(`admin/categories/${id}`, "get");
};
//===================== حذف دیتا =====================
export const deleteCategoryService = (id) => {
  return httpService(`admin/categories/${id}`, "delete");
};
//=================== ویرایش دیتا ===================
export const updateCategoryService = (data, id) => {
  return httpService(`admin/categories/${id}`, "put", data);
};

//============== گرفتن ویژگی های یک دسته =============
export const getAttributesService = (categoryId) => {
  return httpService(`admin/categories/${categoryId}/attributes`, "get");
};

//===========ایجاد یک ویژگی جدید برای یک دسته===========
export const createNewAttributeService = (categoryId, data) => {
  return httpService(
    `admin/categories/${categoryId}/attributes`,
    "post",
    (data = {
      title: `${data.attributeTitle}`,
      unit: `${data.attributeUnit}`,
      in_filter: `${data.switchShowFilter ? 1 : 0}`,
    })
  );
};

//=============== حذف یک ویژگی از محصول =================
export const deleteAttributeService = (id) => {
  return httpService(`admin/categories/attributes/${id}`, "delete");
};

//============== گرفتن یکی از ویژگی های یک دسته ============
export const getOneAttributeService = (id) => {
  return httpService(`admin/categories/attributes/${id}`, "get");
};

//=============== ویرایش یک ویژگی از محصول =================
export const updateAttributeService = (id) => {
  return httpService(`admin/categories/attributes/${id}`, "put");
};
