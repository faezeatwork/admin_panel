import React from "react";

export const Chips = ({ chips, setChips }) => {
<<<<<<< HEAD
  // console.log(chips);
=======
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
  const handleDeleteChips = (thisChip) => {
    setChips(chips?.filter((c) => c.id != thisChip));
  };
  return (
    <div className={`${chips?.length ? "mb-3 d-flex" : null}`}>
      {chips?.map((c) => (
<<<<<<< HEAD
        <span key={Math.random()} className="chips mx-1">
=======
        <span className="chips mx-1">
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
          <i
            className="close fas fa-times ps-2 pointer text-danger"
            onClick={() => handleDeleteChips(c.id)}
          ></i>
          {c.value || c.title}
        </span>
      ))}
    </div>
  );
};
