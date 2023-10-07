import Swal from "sweetalert2";


export const handleDeleteOperation = async (id, data, setData , deleteService) => {
    console.log(id);
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
      deleteService(id).then(() => {
        console.log(`حذف شد (id: ${id}) محصول`);
        const updateData = data.filter((d) => d.id != id);
        setData(updateData);
      });
    }
  });
};

//=============== 👆👆👆 عملیات حذف محصول 👆👆👆 ===============
