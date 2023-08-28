
import { httpService } from "./httpService";

export const getcategoreisService = (id = null) => {
  return httpService(`admin/categories${id ? `?parent=${id}` : ""}`, "get");
};
