import * as Yup from "yup";
import {
  createNewProductService,
  updateProductService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

//====================== 📍initialValues =====================
export const initialValues = {
  category_ids: "",
  title: "",
  price: "",
  weight: "",
  brand_id: "",
  color_ids: "",
  guarantee_ids: "",
  descriptions: "",
  short_descriptions: "",
  cart_descriptions: "",
  image: "",
  alt_image: "",
  discount: "",
  keywords: "",
  stock: "",
};

//====================== 📍onSubmit ===========================
export const onSubmit = async (
  rowData,
  action,
  reInitialize,
  setReInitialize
) => {
  console.log(action.resetForm);
  if (reInitialize.id) {
    //📍ویرایش
    const res = await updateProductService(rowData, reInitialize.id);
    if (res.status == 200) {
      swal("ویرایش شد!...", res.data.message, "success");
    }
  } else {
    //📍افزودن محصول جدید
    const res = await createNewProductService(rowData);
    if (res.status == 201) {
      swal("ثبت شد!...", res.data.message, "success");
    }
    setReInitialize({
      category_ids: "",
      title: "",
      price: "",
      weight: "",
      brand_id: "",
      color_ids: "",
      guarantee_ids: "",
      descriptions: "",
      short_descriptions: "",
      cart_descriptions: "",
      image: "",
      alt_image: "",
      discount: "",
      keywords: "",
      stock: "",
    });
    //هرجور امتحان کردم فقط همینطوری 👆 فرمه ریست میشد 😐😐😐
  }
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({
  category_ids: Yup.string().required("پر کردن این فیلد اجباری است"),
  title: Yup.string().required("پر کردن این فیلد اجباری است"),
  price: Yup.string().required("پر کردن این فیلد اجباری است"),
  stock: Yup.string().required("پر کردن این فیلد اجباری است"),
});
