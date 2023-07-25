import React, { useEffect, useState } from "react";
let numOfPages = 2; //too har page chand ta row bashe
export const ControlTables = () => {
  const titles = ["#", "دسته", "عنوان", "وضعیت", "عملیات"];
  const rows = [
    { id: "1", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "2", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "3", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "4", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "5", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "6", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "7", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "8", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "9", name: "2", last_name: "3", post_code: "4", address: "5" },
    { id: "10", name: "2", last_name: "3", post_code: "4", address: "5" },
  ];
  const [tableData, setTableData] = useState([]); //adad haye ke pagination dare neshoon mide
  const [currentPage, setCurrentPage] = useState(1); //page ke dar oon hastim
  const [pages, setPages] = useState([]); //yek araye az pageha masalan age 5 ta page darim :[1,2,3,4,5]
  const [pageCount, setPageCount] = useState(1); //tedad safahat masalan: 5

  useEffect(() => {
    const page_count = rows.length / numOfPages;
    setPageCount(page_count);
    let pageArr = [];
    for (let i = 1; i <= page_count; i++) pageArr = [...pageArr, i];
    setPages(pageArr);
  }, []);

  useEffect(() => {
    let start = currentPage * numOfPages - numOfPages;
    let end = currentPage * numOfPages;
    setTableData(rows.slice(start, end));
  }, [currentPage]);

  return (
    <div className="p-4">
      <div className="input-group mb-3 w-50 searchBox">
        <span className="input-group-text pointer searchButton " id="basic-addon2">
          جستجو
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="قسمتی از عنوان را وارد کنید"
        />
      </div>
      <table className=" productTable table table-bordered border-primary ">
        <thead>
          <tr className="bg-info">
            {titles.map((d) => (
              <th key={Math.random()}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr className="productTableRow" key={Math.random()}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.last_name}</td>
              <td>{d.post_code}</td>
              <td>{d.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" d-flex justify-content-center ">
        <nav aria-label="Page navigation example ">
          <ul className="pagination">
            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == 1 ? "disabled_pagination" : ""
                }`}
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
            {pages.map((i) => (
              <li className="page-item" key={Math.random()}>
                <span
                  className="page-link pointer"
                  onClick={() => setCurrentPage(i)}
                >
                  {i}
                </span>
              </li>
            ))}

            <li className="page-item">
              <span
                className={`page-link pointer ${
                  currentPage == pageCount ? "disabled_pagination" : ""
                }`}
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
