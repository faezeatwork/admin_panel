import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteCategoryService } from "../../../../services/CRUD_categoryService";

export const Operations_product = ({ rowData, data, setData }) => {
  const navigate = useNavigate();

  //=============== عملیات حذف محصول 👇 ===============
  const handleDeleteCategory = async (id) => {
    await Swal.fire({
      title: "مطمئن هستید؟",
      text: "محصول حذف شود؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "انصراف",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("حذف شد!", `محصول مورد نظر حذف شد`, "success");
        deleteCategoryService(id).then(() => {
          console.log(`حذف شد (id: ${id}) محصول`);
          const updateData = data.filter((d) => d.id != id);
          setData(updateData);
        });
      }
    });
  };

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
              rowData: rowData,
              title: "ویرایش محصول",
            },
          });
        }}
      ></i>
      {rowData.parent_id ? (
        <i
          className="icon_product_table fas fa-receipt text-info mx-1 pointer has_tooltip"
          title="ثبت ویژگی"
          onClick={() => {
            navigate(
              `/product-group-management/${rowData.id}/adding-attribute` , {
                state:{
                  categoryId :rowData.id
                }
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
          handleDeleteCategory(rowData.id);
        }}
      ></i>
    </span>
  );
};
