import React from "react";

export const Title_itemsOfList = (props) => {
  const { item } = props;
  return (
    <div>
      <li
        className={` d-flex justify-content-center align-items-center`}
      >
        <span className={`items_of_sidebar_list text-light titleStyle`}>
          {item}
        </span>
      </li>
    </div>
  );
};
