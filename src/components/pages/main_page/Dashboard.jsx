import React, { useEffect } from "react";
import { Header } from "../../layouts/header/Header";
import { MainPage } from "./MainPage";
import { Sidebar } from "../../layouts/sidebar/Sidebar";
import { toggleSidebar } from "../../layouts/sidebar/toggleSidebar";

export const Dashboard = () => {
  useEffect(() => {
    toggleSidebar();
    // be joz in 👆 2 approach dg ham dare -j86
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <MainPage />
    </div>
  );
};
