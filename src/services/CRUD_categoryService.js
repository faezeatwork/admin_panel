<<<<<<< HEAD
import { ConvertDataToFormData } from "../components/general_compo/utils/ConvertDataToFormData.jsx";
import { httpService } from "./httpService";
=======
import { apiPath, httpService } from "./httpService";
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f

//==================== 1- گرفتن دسته ها ==============================
export const getCategoriesService = (id = null) => {
  return httpService(`api/admin/categories${id ? `?parent=${id}` : ""}`, "get");
};

//==================== 1- ایجاد یکسته جدید محصول=================================
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
//============== 1- گرفتن تک دسته با آی دی =========================
export const getSingleCategoryService = (id) => {
  return httpService(`api/admin/categories/${id}`, "get");
};

//===================== 1- حذف یک دشته =================================
export const deleteCategoryService = (id) => {
  return httpService(`api/admin/categories/${id}`, "delete");
};

//=================== 1- ویرایش یک دسته ===============================
export const updateCategoryService = (data, id) => {
  return httpService(`api/admin/categories/${id}`, "put", data);
};

//============= 1- گرفتن ویژگی های یک دسته ========================
export const getAttributesService = (categoryId) => {
  return httpService(`api/admin/categories/${categoryId}/attributes`, "get");
};

//======= 1- ایجاد یک ویژگی جدید برای یک دسته=====================
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

//============ 1- حذف یک ویژگی از محصول ==========================
export const deleteAttributeService = (id) => {
  return httpService(`api/admin/categories/attributes/${id}`, "delete");
};

//=========== 1- ویرایش یک ویژگی از محصول ========================
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

//📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍
//================= 2- گرفتن محصولات  =============================
export const getProductsService = (page, countOnPage, searchChar) => {
  return httpService(
    `api/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`,
    "get"
  );
};

//================== 2- حذف یکی از محصولات  =======================
export const deleteProductService = (id) => {
  return httpService(`api/admin/products/${id}`, "delete");
};

//================= 2- اضافه کردن یک محصول جدید =================
export const createNewProductService = (value) => {
<<<<<<< HEAD
  value.image ? console.log(value.image.name) : console.log("not");
  return httpService(
    "api/admin/products",
    "post",
    value.image ? ConvertDataToFormData(value) : value
  );
=======
  return httpService("api/admin/products", "post", value);
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
};

//================== 2- ویرایش یک محصول ==========================
export const updateProductService = (value, id) => {
  return httpService(`api/admin/products/${id}`, "put", value);
};
<<<<<<< HEAD

//======== 2-اضافه کردن یک ویژگی جدید برای یک محصول ============
export const createNewAttrForProductService = (id, value) => {
  return httpService(`api/admin/products/${id}/add_attr`, "post", value);
};

//=============== 2- گرفتن تایتل همه ی محصولات ===================
export const getAllTitlesOfProducts = () => {
  return httpService("api/admin/products/all_titles", "get");
};

=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
//📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍
//==============  3- گرفتن همه ی برندها ==========================
export const getAllBrandsService = () => {
  return httpService("api/admin/brands", "get");
};

//================  3- حذف یک برند  ==============================
export const deleteBrandService = (id) => {
  return httpService(`api/admin/brands/${id}`, "delete");
};

//=============== 3- ایجاد یک برند جدید =========================
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

//===============  3- ویرایش یک برند موجود  ====================
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

//📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍
//=============== 4- گرفتن همه گارانتی ها  ======================
export const getAllGuaranteeService = () => {
  return httpService("api/admin/guarantees", "get");
};

//=============== 4- اضافه کردن یک گارانتی جدید  ================
export const createNewGuaranteeService = (data) => {
  //console.log(data);
  return httpService("api/admin/guarantees", "post", data);
};

//============== 4- ویرایش یک گارانتی  ===========================
export const updateGuaranteeService = (data, id) => {
  return httpService(`api/admin/guarantees/${id}`, "put", data);
};

//================ 4- حذف یک گارانتی  ============================
export const deleteGuaranteeService = (id) => {
  return httpService(`api/admin/guarantees/${id}`, "delete");
};

//📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍
//================= 5- گرفتن همه رنگ ها  ========================
export const getAllColorService = () => {
  return httpService("api/admin/colors", "get");
};

//================ 5- اضافه کردن یک رنگ جدید  ==================
export const createNewColorService = (data) => {
  return httpService("api/admin/colors", "post", data);
};

//================  5- ویرایش یک رنگ  ===========================
export const updateColorService = (data, id) => {
  return httpService(`api/admin/colors/${id}`, "put", data);
};

//=================== 5- حذف یک رنگ  ============================
export const deleteColorService = (id) => {
  return httpService(`api/admin/colors/${id}`, "delete");
};
<<<<<<< HEAD

//📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍
//================= 6- گرفتن همه تخفیف ها  ====================
export const getAllDiscountsService = () => {
  return httpService("api/admin/discounts", "get");
};

//================= 6- ایجاد یک تخفیف جدید ====================
export const createNewDiscountService = (values) => {
  return httpService("api/admin/discounts", "post", values);
};

//================= 6- ویرایش یک تخفیف  =======================
export const updateDiscountService = (id, values) => {
  return httpService(`api/admin/discounts/${id}`, "put", values);
};

//================= 6- حذف یک تخفیف  ==========================
export const deleteDiscountService = (id) => {
  return httpService(`api/admin/discounts/${id}`, "delete");
};

//📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍
=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
