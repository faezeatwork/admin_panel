import * as Yup from "yup";
import { createNewAttributeService } from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

// ==============  📍header of table in add attributes ===================
export const headers_attributesTable = [
  { field: "id", title: "id" },
  { field: "title", title: "عنوان محصول" },
  { field: "unit", title: "واحد" },
  { field: "in_filter", title: "نمایش در فیلتر" },
];

// ==============  📍initialValues add attributes ===================
export const initialValues = {
  attributeTitle: "",
  attributeUnit: "",
  switchShowFilter: 0,
};

//================  📍onSubmit add attributes ======================
export const onSubmit = async (values, actions, location, setAttData) => {
  const res = await createNewAttributeService(
    location.state?.categoryId,
    values
  );
  try {
    if (res.status == 201) {
      swal("", res.data.message, "success");
      setAttData((oldData) => [...oldData, res.data.data]); //این خط چیکار میکنه؟ جدول ویژگی هارو رندر مجدد میکنه 😁
      actions.resetForm();
    }
  } catch {}
};

//===============  📍validationSchema add attributes ===============
export const validationSchema = Yup.object({
  attributeTitle: Yup.string().required("لطفا این قسمت را پر کنید"),
  attributeUnit: Yup.string().required("لطفا این قسمت را پر کنید"),
});
