import React from "react";
import { MainPage } from "./0-main_page/MainPage";
import { Route, Routes } from "react-router-dom";
import { AddNewColor } from "./5-colour/add_or_edit_color/AddNewColor";
import { ProductGroupManagement } from "./1-productGroup/ProductGroupManagement";
import { ProductManagement } from "./2-product/ProductManagement";
import { BrandsManagement } from "./3-brand/BrandsManagement";
import { AddNewBrands } from "./3-brand/add_or_edir_brands/AddNewBrands";
import { AddNewGuarantee } from "./4-guarantee/add_or_edit_guarantee/AddNewGuarantee";
import { GuaranteeManagement } from "./4-guarantee/GuaranteeManagement";
import { ColourManagement } from "./5-colour/ColourManagement";
import { DiscountManagement } from "./6-discount/DiscountManagement";
import { CardsManagement } from "./7-card/CardsManagement";
import { OrdersManagement } from "./8-order/OrdersManagement";
import { SendManagement } from "./9-how_to_send/SendManagement";
import { WatchUsers } from "./10-watch_users/WatchUsers";
import { DutyUsers } from "./11-duty_user/DutyUsers";
import { Licenses } from "./12-license/Licenses";
import { Questions } from "./13-question/Questions";
import { ReusableAdding } from "../general_compo/reusable_operations/ReusableAdding";
import { ControlPages } from "../general_compo/reusable_operations/ControlPages";
import { Register } from "./authorization/register/Register";
import { Exit } from "../layouts/header/dropdown/Exit";
import { AddAttribute } from "../general_compo/attributes/AddAttribute";
import { AddProduct } from "./2-product/add_or_edit_product/AddProduct";
<<<<<<< HEAD
import { AddAttributes } from "./2-product/table_addition/AddAttributes";
import { AddNewDiscounts_modal } from "./6-discount/AddNewDiscounts_modal";
=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f

export const Admin = () => {
  return (
    <div>
      <Routes>
        {/* ======================  داشبورد  ======================== */}
        <Route path="/" element={<ControlPages namePage={<MainPage />} />} />

        {/* ======================  ثبت ویژگی ها ======================== */}

<<<<<<< HEAD
        {/* ================= 1- مدیریت گروه محصول  ===================== */}
=======
        {/* ================= مدیریت گروه محصول ===================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
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

<<<<<<< HEAD
        {/* =================== 2- مدیریت محصول ======================== */}
=======
        {/* ===================  مدیریت محصول ======================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/product-management"
          element={<ControlPages namePage={<ProductManagement />} />}
        />
<<<<<<< HEAD
        <Route
          path="/product-management/:productId/adding-attribute"
          element={<AddAttributes />}
        ></Route>
        <Route path="/adding-product" element={<AddProduct />} />

        {/* =================== 3- مدیریت برندها   ===================== */}
=======
        <Route path="/adding-product" element={<AddProduct />} />

        {/* ===================  مدیریت برندها   ===================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/brand-management"
          element={<ControlPages namePage={<BrandsManagement />} />}
        />
        <Route path="/adding-brands" element={<AddNewBrands />} />

<<<<<<< HEAD
        {/* ================== 4- مدیریت گارانتی ها  ================== */}
=======
        {/* ==================  مدیریت گارانتی ها  ================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/guarantee-management"
          element={<ControlPages namePage={<GuaranteeManagement />} />}
        />
        <Route path="/adding-guarantee" element={<AddNewGuarantee />} />

<<<<<<< HEAD
        {/* ================== 5- مدیریت رنگ ها  ====================== */}
=======
        {/* ==================  مدیریت رنگ ها  ====================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/colour-management"
          element={<ControlPages namePage={<ColourManagement />} />}
        />
        <Route path="/add-colour" element={<AddNewColor />} />

<<<<<<< HEAD
        {/* ================== 6- مدیریت تخفیف ها  ==================== */}
        <Route
          path="/discount-management"
          element={<ControlPages namePage={<DiscountManagement />} />}
        >
          <Route path="/discount-management/add-edit-discount" />
        </Route>

        {/* ================== 7- مدیریت سبد ها  ====================== */}
=======
        {/* ==================  مدیریت تخفیف ها  ==================== */}
        <Route
          path="/discount-management"
          element={<ControlPages namePage={<DiscountManagement />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

        {/* ==================  مدیریت سبد ها  ====================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/card-management"
          element={<ControlPages namePage={<CardsManagement />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

<<<<<<< HEAD
        {/* ================== 8- مدیریت سفارشات  ==================== */}
=======
        {/* ==================  مدیریت سفارشات  ==================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/order-management"
          element={<ControlPages namePage={<OrdersManagement />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

<<<<<<< HEAD
        {/* ================= 9- مدیریت نحوه ارسال ================== */}
=======
        {/* =================  مدیریت نحوه ارسال ================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/send-management"
          element={<ControlPages namePage={<SendManagement />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}
<<<<<<< HEAD
        {/* ================= 10-  مشاهده کاربران  ================== */}
=======
        {/* =================   مشاهده کاربران  ================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/watch-user"
          element={<ControlPages namePage={<WatchUsers />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

<<<<<<< HEAD
        {/* ==================  11-  نقش ها   ======================= */}
=======
        {/* ==================    نقش ها   ======================= */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/duty-user"
          element={<ControlPages namePage={<DutyUsers />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

<<<<<<< HEAD
        {/* ==================  12-  مجوز ها   ====================== */}
=======
        {/* ==================    مجوز ها   ====================== */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/license"
          element={<ControlPages namePage={<Licenses />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

<<<<<<< HEAD
        {/* ==================  13-  سوالات    ======================= */}
=======
        {/* ==================    سوالات    ======================= */}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
        <Route
          path="/question"
          element={<ControlPages namePage={<Questions />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

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
