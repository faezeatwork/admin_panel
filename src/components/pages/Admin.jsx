import React from "react";
import { Header } from "../layouts/header/Header";
import { Sidebar } from "../layouts/sidebar/Sidebar";
import { MainPage } from "./main_page/MainPage";

export const Admin = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainPage />
    </div>
  );
};
