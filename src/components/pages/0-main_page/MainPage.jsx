import React from "react";
import { Boxes } from "./Boxes";
import { BarChart } from "../../../charts/BarChart";
import { useLocation } from "react-router-dom";
export const MainPage = () => {
<<<<<<< HEAD
  // const location = useLocation();
  //const { myState } = location.state;

=======
  const location = useLocation();
  //const { myState } = location.state;
  //console.log({ myState });
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
  return (
    <div className="ps-2 " id="mainPage">
      {/* <div>{myState}</div> */}
      <Boxes />
      <div className="row">
        <div className="table_mainPage  col-12 col-lg-6">
          {/* <ReusableTable
            nameOfColumn={headers_productTable}
            dataOfRows={rows_data_productTable}
            placeholder_searchBox="قسمتی از عنوان را وارد کنید"
            show_addButton={false}
            operation={false}
            having_searchBox={false}
          /> */}
        </div>
        <BarChart />
      </div>
    </div>
  );
};
