import * as Yup from "yup";

//====================== 📍initialValues =====================
export const initialValues = {
  title: "",
  descriptions: "",
  length: "",
  length_unit: "",
};
//====================== 📍onSubmit ===========================
export const onSubmit = () => {
  console.log("submit");
};
//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({});
