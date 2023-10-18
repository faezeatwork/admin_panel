import React from "react";
import { MainPage } from "./main_page/MainPage";
import { Route, Routes } from "react-router-dom";
import { ColourManagement } from "./colour/ColourManagement";
import { AddColour } from "./colour/AddColour";
import { ProductGroupManagement } from "./product/ProductGroupManagement";
import { ProductManagement } from "./product/ProductManagement";
import { BrandsManagement } from "./brand/BrandsManagement";
import { GuaranteeManagement } from "./guarantee/GuaranteeManagement";
import { DiscountManagement } from "./discount/DiscountManagement";
import { CardsManagement } from "./card/CardsManagement";
import { OrdersManagement } from "./order/OrdersManagement";
import { SendManagement } from "./how_yo_send/SendManagement";
import { Licenses } from "./license/Licenses";
import { WatchUsers } from "./watch_users/WatchUsers";
import { DutyUsers } from "./duty_user/DutyUsers";
import { ReusableAdding } from "../general_compo/reusable_operations/ReusableAdding";
import { Questions } from "./question/Questions";
import { ControlPages } from "../general_compo/reusable_operations/ControlPages";
import { Register } from "./authorization/register/Register";
import { Exit } from "../layouts/header/dropdown/Exit";
import { AddAttribute } from "../general_compo/attributes/AddAttribute";
import { AddNewBrands } from "./brand/add_or_edir_brands/AddNewBrands";
import { AddNewGuarantee } from "./guarantee/add_or_edit_guarantee/AddNewGuarantee";

export const Admin = () => {
  return (
    <div>
      <Routes>
        {/* ======================  داشبورد  ======================== */}
        <Route path="/" element={<ControlPages namePage={<MainPage />} />} />

        {/* ======================  ثبت ویژگی ها ======================== */}

        {/* ================= مدیریت گروه محصول ===================== */}
        <Route
          path="/product-group-management"
          element={<ControlPages namePage={<ProductGroupManagement />} />}
        >
          <Route path=":productId" />
        </Route>
        <Route
          path="/product-group-management/:productId/adding-attribute"
          element={<AddAttribute />}
        >
          <Route path=":attId" />
        </Route>
        <Route path="/adding-items" element={<ReusableAdding />} />

        {/* ===================  مدیریت محصول ======================== */}
        <Route
          path="/product-management"
          element={<ControlPages namePage={<ProductManagement />} />}
        />
        <Route path="/adding-items" element={<ReusableAdding />} />

        {/* ===================  مدیریت برندها   ===================== */}
        <Route
          path="/brand-management"
          element={<ControlPages namePage={<BrandsManagement />} />}
        />
        <Route path="/adding-brands" element={<AddNewBrands />} />

        {/* ==================  مدیریت گارانتی ها  ================== */}
        <Route
          path="/guarantee-management"
          element={<ControlPages namePage={<GuaranteeManagement />} />}
        />
        <Route path="/adding-guarantee" element={<AddNewGuarantee />} />

        {/* ==================  مدیریت رنگ ها  ====================== */}
        <Route
          path="/colour-management"
          element={<ControlPages namePage={<ColourManagement />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* ==================  مدیریت تخفیف ها  ==================== */}
        <Route
          path="/discount-management"
          element={<ControlPages namePage={<DiscountManagement />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* ==================  مدیریت سبد ها  ====================== */}
        <Route
          path="/card-management"
          element={<ControlPages namePage={<CardsManagement />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* ==================  مدیریت سفارشات  ==================== */}
        <Route
          path="/order-management"
          element={<ControlPages namePage={<OrdersManagement />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* =================  مدیریت نحوه ارسال ================== */}
        <Route
          path="/send-management"
          element={<ControlPages namePage={<SendManagement />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />
        {/* =================   مشاهده کاربران  ================== */}
        <Route
          path="/watch-user"
          element={<ControlPages namePage={<WatchUsers />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* ==================    نقش ها   ======================= */}
        <Route
          path="/duty-user"
          element={<ControlPages namePage={<DutyUsers />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* ==================    مجوز ها   ====================== */}
        <Route
          path="/license"
          element={<ControlPages namePage={<Licenses />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* ==================    سوالات    ======================= */}
        <Route
          path="/question"
          element={<ControlPages namePage={<Questions />} />}
        />
        <Route path="/add-colour" element={<AddColour />} />

        {/* ==================    register    ======================= */}
        <Route path="/register" element={<Register />} />

        {/* ====================================================== */}

        <Route path="/exit" element={<Exit />} />

        {/* ====================================================== */}

        <Route path="*" element={<ControlPages namePage={<MainPage />} />} />
      </Routes>
    </div>
  );
};
