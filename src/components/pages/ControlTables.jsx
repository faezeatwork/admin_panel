import React, { useEffect, useState } from "react";
let numOfPages = 2;
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
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    const page_count = rows.length / numOfPages;
    setPageCount(page_count);
    let pageArr = [];
    for (let i = 1; i < page_count; i++) {
      pageArr = [...pageArr, i];
    }
    setPages(pageArr);
  }, []);
  useEffect(() => {
    let start = currentPage * numOfPages - numOfPages;
    let end = currentPage * numOfPages;
    setTableData(rows.slice(start, end));
  }, [currentPage]);

  return (
    <div className="p-2">
      <table className=" productTable table table-bordered border-primary ">
        <thead>
          <tr className="bg-info">
            {titles.map((d) => (
              <th key={Math.random()}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* <tr className="productTableRow"> */}
          {tableData.map((d) => (
            <tr className="productTableRow" key={Math.random()}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.last_name}</td>
              <td>{d.post_code}</td>
              <td>{d.address}</td>
            </tr>
          ))}
          {/* </tr> */}
        </tbody>
      </table>
      <div className=" d-flex justify-content-center ">
        <nav aria-label="Page navigation example ">
          <ul className="pagination">
            <li className="page-item">
              <span
                className="page-link"
                href="#"
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
            {pages.map((page) => (
              <li className="page-item">
                <span
                  className="page-link "
                  href="#"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </span>
              </li>
            ))}

            <li className="page-item">
              <span
                className="page-link"
                href="#"
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
