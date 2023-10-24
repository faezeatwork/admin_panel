import * as Yup from "yup";
import {
  createNewColorService,
  updateColorService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

//====================== 📍initialValues =====================
export const initialValues = {
  title: "",
  code: "#fffff",
};

//====================== 📍onSubmit ===========================
export const onSubmit = async (
  values,
  actions,
  colorToEdit,
  setData,
  setColorPickerValue
) => {
  if (colorToEdit) {
    const res = await updateColorService(values, colorToEdit.id);
    if (res.status == 200) {
      swal("ویرایش شد!...", res.data.message, "success");
      setData((oldData) => {
        let newData = [...oldData];
        let index = newData.findIndex((d) => d.id == colorToEdit.id);
        newData[index] = res.data.data;
        return newData;
      });
    }
  } else {
    const res = await createNewColorService(values);
    if (res.status == 201) {
      swal("ثبت شد!...", res.data.message, "success");
      setData((oldData) => [...oldData, res.data.data]);
      setColorPickerValue("#000");
      actions.resetForm();
    }
  }
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({});
