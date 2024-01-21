import * as Yup from "yup";
import {
  createNewProductService,
  updateProductService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

//====================== 📍initialValues =====================
export const initialValues = {
<<<<<<< HEAD
  main_ids: "",
  parent_id: "",
=======
  main_ids:'',
  parent_id:'',
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
  category_ids: [],
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
  setReInitialize,
<<<<<<< HEAD
  setChips_color,
  setChips_guarantee
=======

>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
) => {
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
<<<<<<< HEAD
      console.log(res.data.data);
      swal("ثبت شد!...", res.data.message, "success");

    }
    setChips_color([]);
    setChips_guarantee([]);
=======
      swal("ثبت شد!...", res.data.message, "success");
      console.log(res.data.data);
    }
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
    setReInitialize({
      category_ids: [],
      parent_id: "",
      title: "",
      price: "",
      weight: "",
      brand_id: "",
<<<<<<< HEAD
      color_ids: [],
      guarantee_ids: [],
=======
      color_ids: "",
      guarantee_ids: "",
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
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
