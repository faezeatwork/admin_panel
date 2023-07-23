import React from "react";
import { Admin } from "./components/pages/Admin";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Admin />
    </BrowserRouter>
  );
};

export default App;
