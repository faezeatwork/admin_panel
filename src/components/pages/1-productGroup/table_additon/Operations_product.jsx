import { useNavigate } from "react-router-dom";
import { deleteCategoryService } from "../../../../services/CRUD_categoryService";
import { handleDeleteOperation } from "../../../general_compo/reusable_operations/delete_operation/DeleteOperation";

export const Operations_product = ({ rowData, data, setData }) => {
  const navigate = useNavigate();

  return (
    <span className=" d-flex justify-content-center">
      {rowData.parent_id ? null : (
        <i
          className="icon_product_table fa-solid fa-share-nodes text-success mx-1 pointer has_tooltip"
          title="زیرمجموعه"
          onClick={() =>
            navigate(`/product-group-management/${rowData.id}`, {
              state: {
                parentData: rowData,
                //👉is called with ==> const location=useLocation() ==> in Reusable_table
              },
            })
          }
        ></i>
      )}
      <i
        className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
        title="ویرایش محصول"
        onClick={() => {
          navigate("/adding-items", {
            state: {
              editState: {
                rowData: rowData,
                title: "ویرایش محصول",
              },
            },
          });
        }}
      ></i>

      {rowData.parent_id ? (
        <i
          className="icon_product_table fas fa-receipt text-info mx-1 pointer has_tooltip"
          title="ثبت ویژگی"
          onClick={() => {
<<<<<<< HEAD
            //for <AddAttribute />
=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
            navigate(
              `/product-group-management/${rowData.id}/adding-attribute`,
              {
                state: {
<<<<<<< HEAD
                  rowData: rowData,
=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
                  parentId: rowData.parent_id,
                  categoryId: rowData.id,
                },
              }
            );
          }}
        ></i>
      ) : (
        ""
      )}

      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() => {
<<<<<<< HEAD
       
=======
          console.log(rowData);
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
          handleDeleteOperation(
            rowData.id,
            data,
            setData,
            deleteCategoryService
          );
        }}
      ></i>
    </span>
  );
};
