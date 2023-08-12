import React from "react";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import { Admin } from "../Admin";
import { Login } from "../authorization/login/Login";

export const Dashboard = () => {
  const [isLogin, loading] = useIsLogin();

  return (
    <div>
      {loading ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="lds-hourglass"></div>
          <div className="lds-hourglass"></div>
          <div className="lds-hourglass"></div>
        </div>
      ) : isLogin ? (
        <Admin />
      ) : (
        <Navigate to={"/auth"} />
      )}
      
    </div>
  );
};
