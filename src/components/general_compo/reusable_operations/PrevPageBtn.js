import React from "react";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
export const PrevPageBtn = ({ returnTitle, customStyle, goWhere }) => {
=======
export const PrevPageBtn = ({ returnTitle, customStyle }) => {
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
  const navigate = useNavigate();
  return (
    <div
      className={`text-primary pointer ${customStyle}`}
<<<<<<< HEAD
      onClick={() => (goWhere ? navigate(goWhere) : navigate(-1))}
=======
      onClick={() => navigate(-1)}
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
    >
      {returnTitle}
    </div>
  );
};
