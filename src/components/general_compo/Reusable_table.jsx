import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const numOfRows_singlePage = 4; //در هر صفحه چند ردیف از حدول نمایش داده شود

export const Reusable_table = (props) => {
  const {
    nameOfColumn, //تیترها
    dataOfRows,
    placeholder_searchBox,
    go_where, //this icon ➕ link to where - hamishe ham link nist
    operation,
    show_addButton,
    show_compo,
    having_searchBox,
  } = props;

  const handleShowCompo = () => {
    document
      .getElementById("compo_for_add_items")
      .classList.remove("hidden_screen");
    document.getElementById("compo_for_add_items").classList.add("show_screen");
  };

  const [dataAnyPage, setDataAnyPage] = useState([]); //slice shodeye dataOfRows
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(2); //page_count = dataOfRows.length / numOfRows_singlePage (تعداد کل صفحات)
  const [pageArr, setPageArr] = useState([]); //[0,1,2,3,4,...,countPage]
  const [searchData, setSearchData] = useState(dataAnyPage);
  const [searchChar, setSearchChar] = useState("");

  console.log(dataAnyPage);
  console.log(dataOfRows);
  console.log(searchData);

  //======== فیلتر کردن آیتم هایی که نمایش داده می شود برحسب سرچ ===========
  useEffect(() => {
    setSearchData(dataOfRows.filter((d) => d.title.includes(searchChar)));
  }, [searchChar , dataOfRows]);

  //==================   تقسیم کردن ردیف ها بین صفحات   ======================
  useEffect(() => {
    //in useEffect , row ha ro be tedad page ha slice mikone
    const start = currentPage * numOfRows_singlePage - numOfRows_singlePage;
    const end = currentPage * numOfRows_singlePage;
    setDataAnyPage(searchData.slice(start, end));
  }, [currentPage, searchData]);

  //==========================================================================

  useEffect(() => {
    // Math.ceil() ==> round to up number
    const page_count = Math.ceil(searchData.length / numOfRows_singlePage);
    setCountPage(page_count);
    // ========================= //
    let arrOfPages = [];
    for (let i = 1; i <= page_count; i++) arrOfPages = [...arrOfPages, i]; //[0,1,2,3,4,...,dataOfRows.length]
    setPageArr(arrOfPages);
    setCurrentPage(1);
  }, [searchData]);

  //==========================================================================

  return (
    <div className="p-1 reusable_table">
      <div className="d-flex justify-content-between align-items-center p-2">
        {/* ================== start searchBox👇 ================== */}
        {having_searchBox ? (
          <div className="input-group mb-3 searchBox">
            <span className="input-group-text searchButton " id="basic-addon2">
              جستجو
            </span>
            <input
              type="text"
              className="form-control searchInput"
              placeholder={placeholder_searchBox}
              onChange={(e) => setSearchChar(e.target.value)}
            />
          </div>
        ) : null}

        {/* ================== end searchBox👆 ==================== */}

        {/* ================== start show_addButton👇 ================== */}
        {/* in icon ➕  */}
        {show_addButton ? ( //اضافه کردن آیتم
          <NavLink to={go_where}>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => (show_compo ? handleShowCompo() : "")}
                className="btn btn-success d-flex justify-content-center align-items-center"
              >
                <i className="fas fa-plus text-light"></i>
              </button>
            </div>
          </NavLink>
        ) : (
          <div></div>
        )}
      </div>
      {/* ================== end show_addButton👆 ==================== */}

      {/* ================== start table👇 ====================== */}
      <table className=" table_of_reusable_table table table-responsive text-center table-hover table-bordered">
        <thead>
          <tr>
            {nameOfColumn.map((item) => (
              <th key={Math.random()}>{item}</th>
            ))}
            {operation ? <th>عملیات</th> : null}
          </tr>
        </thead>
        <tbody>
          {dataAnyPage.map((data) => (
            <tr key={Math.random()}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.descriptions}</td>
              <td>{data.created_at}</td>
              {operation ? (
                <td>
                  <i
                    class="icon_product_table fa-solid fa-share-nodes text-success mx-1 pointer has_tooltip"
                    title="زیرمجموعه"
                  ></i>
                  <i
                    className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
                    title="ویرایش محصول"
                    data-bs-toggle="modal"
                    data-bs-placement="top"
                    data-bs-target="#add_product_modal"
                  ></i>
                  <i
                    className="icon_product_table fas fa-receipt text-info mx-1 pointer has_tooltip"
                    title="ثبت ویژگی"
                    data-bs-toggle="modal"
                    data-bs-target="#add_product_attr_modal"
                  ></i>
                  <i
                    className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
                    title="حذف محصول"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  ></i>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
      {/* ================== end table👆 ======================== */}

      {/* ================== start pagination👇 ================= */}

      {/*🏮🏮🏮 agar tedad safahat 1 bood 
      Pagination namayesh dade nashe 👇*/}

      {countPage > 1 ? (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center"
        >
          <ul className="pagination dir_ltr">
            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == 1 ? "disabled_pagination" : ""
                }`}
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
            {pageArr.map((i) => (
              <li className="page-item" key={Math.random()}>
                <span
                  className="page-link pointer
              "
                  onClick={() => setCurrentPage(i)}
                >
                  {i}
                </span>
              </li>
            ))}

            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == countPage ? "disabled_pagination" : ""
                }`}
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
      {/* ================== end pagination👆 =================== */}
    </div>
  );
};
