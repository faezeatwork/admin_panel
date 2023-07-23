import React, { useEffect } from "react";
import { Header } from "../layouts/header/Header";
import { Sidebar } from "../layouts/sidebar/Sidebar";
import { MainPage } from "./main_page/MainPage";
import { toggleSidebar } from "../layouts/sidebar/toggleSidebar";
import { ProductGroupManagement } from "./product_group_management/ProductGroupManagement";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./main_page/Dashboard";
import { AddProduct } from "./product_group_management/AddProduct";

export const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/product-group-management"
          element={<ProductGroupManagement />}
        />
          <Route path="/add-product" element={<AddProduct />} />
     
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
