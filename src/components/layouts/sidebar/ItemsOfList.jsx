import React from "react";

export const ItemsOfList = (props) => {
  const { icon, item } = props;
  return (
    <div>
      <li
        className={`py-2 px-3 sidebar_menu_item d-flex justify-content-start align-items-center pointer`}
      >
        <i className={`icon fas ${icon} text-light bg-dark`}></i>
        <span className={`px-2 items_of_sidebar_list d-none text-light `}>
          {item}
        </span>
      </li>
    </div>
  );
};
