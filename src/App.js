import React from "react";
import { useLocation } from "react-router-dom";
import { Auth } from "./components/pages/authorization/Auth";
import { Dashboard } from "./components/pages/main_page/Dashboard";
const App = () => {
  const location = useLocation();

  return (
    <>
      {/* check component path */}
      {location.pathname.includes("/auth") ? <Auth /> : <Dashboard />}
    </>
  );
};

export default App;
