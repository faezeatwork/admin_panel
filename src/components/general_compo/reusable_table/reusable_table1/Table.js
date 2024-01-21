import React from "react";

export const Table = ({
  dataOfRows,
  nameOfColumn,
  additionField,
  dataAnyPage,
}) => {
  return (
    <div>
      {dataOfRows.length ? (
        <table className=" table_of_reusable_table table table-striped table-responsive text-center table-hover table-bordered">
          <thead>
            <tr>
              {nameOfColumn.map((item) => (
                <th key={Math.random()}>{item.title}</th>
              ))}
              {additionField
<<<<<<< HEAD
                ? additionField.map((a, index) => <th>{a.title}</th>)
=======
                ? additionField.map((a, index) => (
                    <th key={Math.random()}>{a.title}</th>
                  ))
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
                : null}
            </tr>
          </thead>

          <tbody>
            {dataAnyPage.map((data) => (
              <tr key={Math.random()}>
                {nameOfColumn.map((item) => (
<<<<<<< HEAD
                  <td key={Math.random()}>
                    {item.field ? data[item.field] : item.elements(data)}
                  </td>
=======
                  <td key={Math.random()}>{data[item.field]}</td>
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
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
    </div>
  );
};
