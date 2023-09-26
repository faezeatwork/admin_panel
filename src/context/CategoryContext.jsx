import { createContext, useState } from "react";

export const CategoryContext = createContext({
  editId: null,
  setEditId: () => {},
});

export const CategoryContextContainer = ({ children }) => {
  const [editId, setEditId] = useState('test context');

  return (
    <CategoryContext.Provider
      value={{
        editId,
        setEditId,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
