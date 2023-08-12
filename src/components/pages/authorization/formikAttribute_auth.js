import axios from "axios";
import { json } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";

// ==================  📍initialValues ======================
export const initialValues = {
  phone: "",
  password: "",
  c_password: "",
  remember: false,
};

//===================  📍validationSchema ==================
export const validationSchema = Yup.object({
  phone: Yup.number()
    .typeError("قالب شماره تلفن را رعایت کنید")
    .required("فیلد اجباری"),

  password: Yup.string().required("فیلد اجباری"),

  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("It is required"),
});

//=========================  📍onSubmit ======================
export const onSubmit = (values, submitMethods, navigate) => {
  console.log("enter onSubmit login");
  console.log(submitMethods.setSubmitting.dispatch);

  axios
    .post("http://ecomadminapi.azhadev.ir/api/auth/login", {
      ...values,
      remember: values.remember ? 1 : 0,
    })
    .then((res) => {
      if (res.status == 200) {
        //اگر لاگین با موفقیت انجام شد
        // توکن اش رو در لوکال استوریج ذخیره کن
        //و کاربر رو بفرست به صفحه اصلی
        //useNavigate با کمک
        localStorage.setItem("loginToken", JSON.stringify(res.data));
        navigate("/");

        // alert("ورود با موفقیت انجام شد");
      } else if (res.status != 200) {
        const msg = res.data.message;
        swal("متاسفم!", msg, "error");
      }
      console.log(res);
    })
    .catch((error) => {
      const msg = error.message;
      swal(
        "مشکلی از سمت سرور رخ داده!",
        "لطفا بعدا مجددا تلاش کنید...",
        "error"
      );
      console.error("error :" + error.response.data);
    });
};
