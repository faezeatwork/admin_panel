import { getCategoriesService } from "../../../services/category";


export const headers = [
  "id",
  "عنوان",
  "توضیحات",
  "تاریخ",
  // "موجودی",
  // "تعداد لایک",
  // "وضعیت",
  // "عملیات",
];

export const handleGetCategories = async (setData) => {
  try {
    const res = await getCategoriesService();

    if (res.status == 200) {
      console.log(res.data.data);
      setData(res.data.data);
    }
  } catch {}
};


export const rows_data_productTable = [
  ["1", "فلان1", "محصول1", "20تومان", "100", "123", "فعال"],
  ["2", "فلان2", "محصول2", "20تومان", "100", "123", "فعال"],
  ["3", "فلان3", "محصول3", "20تومان", "100", "123", "فعال"],
  ["4", "فلان4", "محصول4", "20تومان", "100", "123", "فعال"],
  ["5", "فلان5", "محصول5", "20تومان", "100", "123", "فعال"],
  ["6", "فلان6", "محصول6", "20تومان", "100", "123", "فعال"],
  ["7", "فلان7", "محصول7", "20تومان", "100", "123", "فعال"],
  ["8", "فلان1", "محصول1", "20تومان", "100", "123", "فعال"],
  ["9", "فلان2", "محصول2", "20تومان", "100", "123", "فعال"],
  ["10", "فلان3", "محصول3", "20تومان", "100", "123", "فعال"],
  ["11", "فلان4", "محصول4", "20تومان", "100", "123", "فعال"],
  ["12", "فلان5", "محصول5", "20تومان", "100", "123", "فعال"],
  ["13", "فلان6", "محصول6", "20تومان", "100", "123", "فعال"],
  ["14", "فلان7", "محصول7", "20تومان", "100", "123", "فعال"],
  ["15", "فلان1", "محصول1", "20تومان", "100", "123", "فعال"],
  ["16", "فلان2", "محصول2", "20تومان", "100", "123", "فعال"],
  ["17", "فلان3", "محصول3", "20تومان", "100", "123", "فعال"],
  ["18", "فلان4", "محصول4", "20تومان", "100", "123", "فعال"],
  ["19", "فلان5", "محصول5", "20تومان", "100", "123", "فعال"],
  ["20", "فلان6", "محصول6", "20تومان", "100", "123", "فعال"],
  ["21", "فلان7", "محصول7", "20تومان", "100", "123", "فعال"],
];

// =========================================================

export const headers_colourTable = ["#", "نام رنگ", "کد رنگ", "رنگ", "عملیات"];

export const rows_data_colourTable = [
  ["1", "ابی", "aaa", "رنگ ابی"],
  ["2", "سبز", "aaa", "رنگ ابی"],
  ["3", "سفید", "aaa", "رنگ ابی"],
  ["4", "بنفش", "aaa", "رنگ ابی"],
  ["5", "صورتی", "aaa", "رنگ ابی"],
  ["6", "قرمز", "aaa", "رنگ ابی"],
  ["7", "قهوه ای", "aaa", "رنگ ابی"],
  ["8", "سیاه", "aaa", "رنگ ابی"],
];
