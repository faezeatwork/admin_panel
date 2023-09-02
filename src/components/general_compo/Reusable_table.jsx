import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { PrevPageBtn } from "./PrevPageBtn";
import { Pagination } from "./Pagination";
import { SearchBox } from "./SearchBox";
import { AddItem_btn } from "./AddItem_btn";

const numOfRows_singlePage = 4; //در هر صفحه چند ردیف از حدول نمایش داده شود

export const Reusable_table = (props) => {
  const location = useLocation();
  //🏮👉 اشonClick :از این هوک اینجا استفاده شده in Operations_product

  const {
    nameOfColumn, //تیترها
    dataOfRows,
    placeholder_searchBox,
    go_where, //this icon ➕ link to where - hamishe ham link nist
    show_addButton,
    show_compo,
    having_searchBox,
    additionField,
    //setForceRender,
  } = props;

  const [dataAnyPage, setDataAnyPage] = useState([]); //slice shodeye dataOfRows
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(2); //page_count = dataOfRows.length / numOfRows_singlePage (تعداد کل صفحات)
  const [pageArr, setPageArr] = useState([]); //[0,1,2,3,4,...,countPage]
  const [searchData, setSearchData] = useState(dataAnyPage);
  const [searchChar, setSearchChar] = useState("");

  //======== فیلتر کردن آیتم هایی که نمایش داده می شود برحسب سرچ ===========
  useEffect(() => {
    setSearchData(dataOfRows.filter((d) => d.title.includes(searchChar)));
  }, [searchChar, dataOfRows]);

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

  //===============================  return ==================================

  return (
    <div className="p-1 reusable_table">
      {location.state ? (
        <h5 className="text-center d-flex justify-content-center">
          زیر گروه:
          <PrevPageBtn returnTitle={location.state.parentData.title} />
        </h5>
      ) : null}

      <div className="d-flex justify-content-between align-items-center p-2">
        {/* ================== start searchBox👇 ================== */}
        {having_searchBox ? (
          <SearchBox
            setSearchChar={setSearchChar}
            placeholder_searchBox={placeholder_searchBox}
          />
        ) : null}

        {/* ================== end searchBox👆 ==================== */}

        {/* ================== start show_addButton👇 ================== */}
        {/* in icon ➕  */}
        {show_addButton ? ( //اضافه کردن آیتم
          <NavLink to={go_where} >
            <AddItem_btn show_compo={show_compo} />
          </NavLink>
        ) : (
          <div></div>
        )}
      </div>
      {/* ================== end show_addButton👆 ==================== */}

      {/* ================== start table👇 ====================== */}
      {dataOfRows.length ? (
        <table className=" table_of_reusable_table table table-striped table-responsive text-center table-hover table-bordered">
          <thead>
            <tr>
              {nameOfColumn.map((item) => (
                <th key={Math.random()}>{item.title}</th>
              ))}
              {additionField
                ? additionField.map((a, index) => (
                    <th key={Math.random()}>{a.title}</th>
                  ))
                : null}
            </tr>
          </thead>

          <tbody>
            {dataAnyPage.map((data) => (
              <tr key={Math.random()}>
                {nameOfColumn.map((i) => (
                  <td key={Math.random()}>{data[i.field]}</td>
                ))}
                {additionField
                  ? additionField.map((a, index) => (
                      <td key={Math.random()}>{a.elements(data)}</td>
                    ))
                  : null}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="text-center text-danger ">موردی یافت نشد</h3>
      )}

      {/* ================== end table👆 ======================== */}

      {/* ================== start pagination👇 ================= */}
      <Pagination
        countPage={countPage}
        currentPage={currentPage}
        setCountPage={setCountPage}
        pageArr={pageArr}
        setCurrentPage={setCurrentPage}
      />
      {/* ================== end pagination👆 =================== */}
    </div>
  );
};
