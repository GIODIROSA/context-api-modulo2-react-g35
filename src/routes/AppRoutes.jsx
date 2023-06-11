import React from "react";

//router
import { Route, Routes } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Favoritos" element={<Favoritos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
