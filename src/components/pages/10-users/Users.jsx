import React from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { getAllUsersService } from "../../../services/CRUD_categoryService";
import { useEffect } from "react";

export const Users = () => {
  //================= 👇 table header =========================

  //================= 👇 get all users ========================
  const handleGetAllUsers = async () => {
    const res = await getAllUsersService();
    console.log(res);
    if (res.status == 200) {
      console.log(res.data.data);
    }
  };
  useEffect(() => {
    handleGetAllUsers();
  }, []);
  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت کاربران" />
      </div>
    </>
  );
};
