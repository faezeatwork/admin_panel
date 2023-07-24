import React, { useEffect } from "react";
import { toggleSidebar } from "../layouts/sidebar/toggleSidebar";
import { Sidebar } from "../layouts/sidebar/Sidebar";
import { Header } from "../layouts/header/Header";

export const ControlPages = ({ namePage }) => {
  useEffect(() => {
    toggleSidebar();
    // be joz in 👆 2 approach dg ham dare -j86
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      {namePage}
    </>
  );
};
