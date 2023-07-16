import React from "react";
import { ItemsOfList } from "./ItemsOfList";
import { Title_itemsOfList } from "./Title_itemsOfList";

export const Sidebar = () => {
  return (
    <section id="sidebar_section">
      <div className="mini_sidebar bg-dark vh-100">
        <ul className="p-0">
          <ItemsOfList item="داشبورد" icon="fa-tachometer-alt" />
          {/* ======================= فروشگاه ======================== */}
          <Title_itemsOfList item="فروشگاه" />
          <ItemsOfList item="مدیریت گروه محصولات" icon="fa-stream" />
          <ItemsOfList item="مدیریت محصول" icon="fa-cube" />
          <ItemsOfList item="مدیریت برندها" icon="fa-copyright" />
          <ItemsOfList item="مدیریت گارانتی ها" icon="fa-pagelines" />
          <ItemsOfList item="مدیریت رنگ ها" icon="fa-palette" />
          <ItemsOfList item="مدیریت تخفیف ها" icon="fa-percentage" />
          {/* ======================= سفارشات و سبد ======================== */}
          <Title_itemsOfList item="سفارشات و سبد " />
          <ItemsOfList item="مدیریت سبدها" icon="fa-shopping-basket" />
          <ItemsOfList item="مدیریرت سفارشات" icon="fa-luggage-cart" />
          <ItemsOfList item="مدیریت نحوه ارسال" icon="fa-truck-loading" />
          {/* ======================= کاربران و همکاران ======================== */}
          <Title_itemsOfList item="کاربران و همکاران " />
          <ItemsOfList item="مشاهده کاربران" icon="fa-users" />
          <ItemsOfList item="نفش ها" icon="fa-user-tag" />
          <ItemsOfList item="مجوزها" icon="fa-shield-alt" />
          {/* ======================= ارتباطات ======================== */}
          <Title_itemsOfList item="ارتباطات" />
          <ItemsOfList item="سوالات" icon="fa-question-circle" />
        </ul>
      </div>
    </section>
  );
};
