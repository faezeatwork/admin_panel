
import { useNavigate } from "react-router-dom";

export const Operations_product = ({  rowData  }) => {
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
    </span>
  );
};
