import React, { useEffect } from "react";
import { Header } from "../layouts/header/Header";
import { Sidebar } from "../layouts/sidebar/Sidebar";
import { MainPage } from "./main_page/MainPage";

export const Admin = () => {
  useEffect(() => {
    document
      .getElementById("handle_toggle_sideMenu")
      .addEventListener("change", function () {
        if (this.checked) {
          document
            .getElementsByClassName("main_page")[0]
            .classList.add("decrease_mainPage_width");
          document
            .getElementsByClassName("mini_sidebar")[0]
            .classList.add("expanded");
          const elements = document.querySelectorAll(".items_of_sidebar_list");
          elements.forEach((element) => {
            element.classList.add("showItems");
          });
          
          const icons = document.querySelectorAll(".icon");
          icons.forEach((icon) => {
            icon.classList.add("move_corner_icons");
          });

        }else{
          document
          .getElementsByClassName("main_page")[0]
          .classList.remove("decrease_mainPage_width");
        document
          .getElementsByClassName("mini_sidebar")[0]
          .classList.remove("expanded");
        const elements = document.querySelectorAll(".items_of_sidebar_list");
        elements.forEach((element) => {
          element.classList.remove("showItems");
        });
        const icons = document.querySelectorAll(".icon");
        icons.forEach((icon) => {
          icon.classList.remove("move_corner_icons");
        });
        }
      });
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <MainPage />
    </div>
  );
};
