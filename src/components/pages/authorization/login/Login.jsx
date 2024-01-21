import React from "react";
import { LoginInputs } from "./LoginInputs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className=" w-100 vh-100 d-flex justify-content-center align-items-center">
<<<<<<< HEAD
      <div className="animate__animated animate__shakeY">
        <div className="customForm d-flex flex-column justify-content-center align-items-center ">
          <div className="w-100 text-center">
            <img
              src="../assets/images/openLock.png"
=======
      <div>
        <div className="customForm d-flex flex-column justify-content-center align-items-center ">
          <div className="w-100 text-center">
            <img
             src="../assets/images/openLock.png"
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
              className="formIcon"
              alt="login"
            />
          </div>
          <LoginInputs />
        </div>
        <div className=" mt-1 customRegisterLink ">
          <div className="pointer h-100 d-flex justify-content-center align-items-center fs-4">
            <NavLink
              to={"/auth/register"}
              className="text-decoration-none text-dark px-2"
            >
              ثبت نام
            </NavLink>
<<<<<<< HEAD
            <AiOutlineArrowLeft className="switch_loginReg_icon" />
=======
            <AiOutlineArrowLeft className="switch_loginReg_icon"/>
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
          </div>
        </div>
      </div>
    </div>
  );
};
