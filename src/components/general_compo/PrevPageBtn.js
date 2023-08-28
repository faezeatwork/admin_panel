import React from "react";
import { useNavigate } from "react-router-dom";

export const PrevPageBtn = ({ returnTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="text-primary pointer" onClick={() => navigate(-1)}>
      {returnTitle}
    </div>
  );
};
