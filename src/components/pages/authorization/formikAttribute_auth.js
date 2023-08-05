import axios from "axios";
import swal from "sweetalert";
import * as Yup from "yup";

// ==================  📍initialValues ======================
export const initialValues = {
  phone: "",
  password: "",
  remember: false,
};

//===================  📍validationSchema ==================
export const validationSchema = Yup.object({
  phone: Yup.number()
    .typeError("قالب شماره تلفن را رعایت کنید")
    .required("فیلد اجباری"),

  password: Yup.string().required("فیلد اجباری"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/,
  //   "مانند نمونه: XPp1@c5"
  // ),
});

//=========================  📍onSubmit ======================
export const onSubmit = (values) => {
  axios
    .post("http://127.0.0.1:8000/api/auth/login", {
      ...values,
      remember: values.remember ? 1 : 0,
    })
    .then((res) => {
      if (res.status == 200) {
        alert("ورود با موفقیت انجام شد");
      } else if (res.status == 203) {
        alert("مشخصات وارد شده صحیح نمی باشند");
      }
      console.log(res);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};
