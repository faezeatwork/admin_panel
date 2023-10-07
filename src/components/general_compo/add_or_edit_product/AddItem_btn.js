import React from "react";


export const AddItem_btn = ({ show_compo }) => {



  const handleShowCompo = () => {
    document
      .getElementById("compo_for_add_items")
      .classList.remove("hidden_screen");
    document.getElementById("compo_for_add_items").classList.add("show_screen");
  };

  return (
    <div className="d-flex justify-content-end">
      <button
        onClick={() => (show_compo ? handleShowCompo() : "")}
        className="btn btn-success d-flex justify-content-center align-items-center"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
    </div>
  );
};
