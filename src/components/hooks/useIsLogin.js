import axios from "axios";
import { useEffect, useState } from "react";

export const useIsLogin = () => {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
      axios
        .get("https://ecomadminapi.azhadev.ir/api/auth/user", {
          headers: {
            Authorization: `Bearer ${loginToken.token}`,
          },
        })
        .then((res) => {
          setIsLogin(res.status == 200 ? true : false);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("loginToken");
          setIsLogin(false);
          setLoading(false);
        });
    } else {
      setIsLogin(false);
      setLoading(false);
    }
  }, []);

  return [isLogin, loading];
};
