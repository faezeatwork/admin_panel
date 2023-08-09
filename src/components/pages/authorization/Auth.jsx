import React from "react";
import { Navigate } from "react-router-dom";
import { Login } from "./login/Login";
import { useIsLogin } from "../../hooks/useIsLogin";

export const Auth = () => {
  const [isLogin, loading] = useIsLogin();
  return (
    <div>
      {loading ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="lds-hourglass"></div>
          <div className="lds-hourglass"></div>
          <div className="lds-hourglass"></div>
        </div>
      ) : !isLogin ? (
        <Login />
      ) : (
        <Navigate to={"/"} />
      )}
      {/* <Routes>
        <Route path="/auth" element={<Login />} />
      </Routes> */}
    </div>
  );
};
