import React from "react";
import { useNavigate } from "react-router-dom";

export const PrevPageBtn = ({ returnTitle, customStyle }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`text-primary pointer ${customStyle}`}
      onClick={() => navigate(-1)}
    >
      {returnTitle}
    </div>
  );
};
