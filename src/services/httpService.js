//با این فایل متدها رو مدیریت می کنیم

import axios from "axios";
import config from "./config.json";

export const httpService = (url, method, params = null) => {
  const tokenInfo = JSON.parse(localStorage.getItem("loginToken"));
  return axios({
    url: config.onlineApi + url,
    method,
    params,
    headers: {
      Authorization: tokenInfo ? `Bearer ${tokenInfo.token}` : null,
      "content-Type": "application/json", //باشه json میگه اون محتوایی که می خواهی ارسال کنی به شکل
    },
  });
};

//میکنه reusable رو axios این فایل فقط
