import React, { useState } from "react";
import { ItemsOfList } from "./ItemsOfList";
import { Title_itemsOfList } from "./Title_itemsOfList";

export const Sidebar = () => {
  return (
    <section id="sidebar_section">
      <div className=" mini_sidebar bg-dark vh-100">
        <ul className="p-0 pt-3">
          <ItemsOfList targetPath="/" item="داشبورد" icon="fa-tachometer-alt" />
          {/* ======================= فروشگاه ======================== */}
          <Title_itemsOfList item="فروشگاه" />
          <ItemsOfList
            targetPath="/product-group-management"
            item="مدیریت گروه محصولات"
            icon="fa-stream"
          />
          <ItemsOfList targetPath="/" item="مدیریت محصول" icon="fa-cube" />
          <ItemsOfList
            targetPath="/"
            item="مدیریت برندها"
            icon="fa-copyright"
          />
          <ItemsOfList
            targetPath="/"
            item="مدیریت گارانتی ها"
            icon="fa-pagelines"
          />
          <ItemsOfList targetPath="/" item="مدیریت رنگ ها" icon="fa-palette" />
          <ItemsOfList
            targetPath="/"
            item="مدیریت تخفیف ها"
            icon="fa-percentage"
          />
          {/* ======================= سفارشات و سبد ======================== */}
          <Title_itemsOfList item="سفارشات و سبد " />
          <ItemsOfList
            targetPath="/"
            item="مدیریت سبدها"
            icon="fa-shopping-basket"
          />
          <ItemsOfList
            targetPath="/"
            item="مدیریرت سفارشات"
            icon="fa-luggage-cart"
          />
          <ItemsOfList
            targetPath="/"
            item="مدیریت نحوه ارسال"
            icon="fa-truck-loading"
          />
          {/* ======================= کاربران و همکاران ======================== */}
          <Title_itemsOfList item="کاربران و همکاران " />
          <ItemsOfList targetPath="/" item="مشاهده کاربران" icon="fa-users" />
          <ItemsOfList targetPath="/" item="نفش ها" icon="fa-user-tag" />
          <ItemsOfList targetPath="/" item="مجوزها" icon="fa-shield-alt" />
          {/* ======================= ارتباطات ======================== */}
          <Title_itemsOfList item="ارتباطات" />
          <ItemsOfList targetPath="/" item="سوالات" icon="fa-question-circle" />
        </ul>
      </div>
    </section>
  );
};
