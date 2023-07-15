import React from "react";
import { MainPage } from "./components/MainPage";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="vh-100">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
