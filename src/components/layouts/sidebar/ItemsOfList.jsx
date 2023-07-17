import React from "react";

export const ItemsOfList = (props) => {
  const { icon, item } = props;
  return (
    <div>
      <li className="p-2 sidebar_menu_item d-flex justify-content-start align-items-center pointer">
        <i className={`ps-1 icon fas ${icon} text-light bg-dark icon`}></i>
        <span className="items_of_sidebar_list d-none text-light " id="sidebar_items">{item}</span>
      </li>
    </div>
  );
};
