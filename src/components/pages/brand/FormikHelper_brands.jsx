import * as Yup from "yup";
import { createNewBrandService } from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

//====================== 📍initialValues =====================
export const initialValues = {
  original_name: "",
  persian_name: "",
  descriptions: "",
  logo: null,
};

//====================== 📍onSubmit ===========================
export const onSubmit = async (data, actions, tableData, setTableData) => {
  const res = await createNewBrandService(data);
  try {
    if (res.status == 201) {
      swal("ثبت شد", res.data.message, "success");
      setTableData([...tableData, res.data.data]);
      actions.resetForm();
    } else {
      actions.resetForm();
    }
  } catch {}
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({
  original_name: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[0-9A-Za-z]{1,}$/, "فقط حروف انگلیسی"),
  persian_name: Yup.string().matches(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی"),
  descriptions: Yup.string().matches(
    /^[0-9A-Za-z\u0600-\u06FF\s]+$/,
    "فقط حروف و اعداد مجازند"
  ),
});
