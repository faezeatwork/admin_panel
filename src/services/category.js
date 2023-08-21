import swal from "sweetalert";
import { httpService } from "./httpService";

export const getcategoreisService = (id = null, setData) => {
  return httpService(`admin/categories${id ? `?parent=${id}` : ""}`, "get");
};
